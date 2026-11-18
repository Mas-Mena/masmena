/**
 * Build-time prerender.
 *
 * After `vite build`, this script opens each route in headless Chrome, waits for
 * React (and all lazy-loaded sections) to render, and writes the resulting HTML
 * into dist/. Crawlers that don't run JavaScript (Bing, GPTBot, PerplexityBot,
 * ClaudeBot, social link previews…) then get the full page content.
 *
 * The browser app is unchanged: main.tsx still calls createRoot(), which replaces
 * the prerendered markup with the live React tree once the JS loads.
 *
 * Hosts whose build servers can't run Chrome (e.g. Hostinger): every successful
 * local build also saves the rendered pages to prerendered/ (commit that folder).
 * When Chrome can't start, the build uses those saved pages instead, but only if
 * they were made from the exact same src/ code (checked with a fingerprint), so
 * crawlers never get outdated content. If they're outdated, the site deploys as a
 * plain client-side app and the log says to rebuild locally.
 *
 * Usage: runs automatically as part of `npm run build`.
 *        Run on its own with `npm run prerender` (requires an existing dist/).
 */
import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SNAPSHOT_DIR = path.join(ROOT, 'prerendered');
const SNAPSHOT_MANIFEST = path.join(SNAPSHOT_DIR, 'manifest.json');
const SITE_URL = 'https://masmena.com';

// One entry per page. `out` is the file written inside dist/.
// .htaccess serves /work from work.html (see public/.htaccess).
const ROUTES = [
  {
    path: '/',
    out: 'index.html',
    // null = keep the <title>/<meta description> already in index.html
    title: null,
    description: null,
  },
  {
    path: '/work',
    out: 'work.html',
    title: 'Our Work | MAS MENA',
    description:
      'Selected campaigns, branding and digital work by MAS MENA, a full-service marketing agency in Amman, Jordan, for brands across Jordan, the GCC and beyond.',
  },
];

// Never load these while prerendering: analytics would record fake visits,
// and the videos/fonts are heavy and not needed to capture the HTML.
const BLOCKED = [
  /googletagmanager\.com/,
  /google-analytics\.com/,
  /calendly\.com/,
  /fonts\.(googleapis|gstatic)\.com/,
  /\.(mp4|webm|mov)(\?|#|$)/i,
];

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// For visitors whose browser runs JS, keep the static snapshot invisible until React
// has mounted (main.tsx removes the class), so the intro animations play exactly as
// before instead of flashing the snapshot first. Crawlers that don't run JS never
// execute this script, so they always see the content. The timeout is a safety net
// in case the app bundle fails to load.
const BOOT_SNIPPET = `
    <style>html.prerender-boot #root{opacity:0}</style>
    <script>document.documentElement.classList.add('prerender-boot');setTimeout(function(){document.documentElement.classList.remove('prerender-boot')},3000)</script>`;

function buildPage(template, route, rootHtml) {
  let html = template;

  const canonical = SITE_URL + (route.path === '/' ? '/' : route.path);
  html = html.replace(
    '</head>',
    `    <link rel="canonical" href="${canonical}" />${BOOT_SNIPPET}\n  </head>`
  );

  if (route.title) {
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(route.title)}</title>`);
  }
  if (route.description) {
    html = html.replace(
      /<meta name="description" content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${escapeAttr(route.description)}" />`
    );
  }

  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error(`Could not find ${marker} in dist/index.html`);
  return html.replace(marker, `<div id="root">${rootHtml}</div>`);
}

async function renderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setRequestInterception(true);
  page.on('request', (req) =>
    BLOCKED.some((re) => re.test(req.url())) ? req.abort() : req.continue()
  );
  const errors = [];
  page.on('pageerror', (err) => errors.push(err.message));

  await page.goto(baseUrl + route.path, { waitUntil: 'networkidle0', timeout: 60_000 });

  // Scroll through the page so scroll-triggered sections settle, then return to the top.
  await page.evaluate(async () => {
    const step = window.innerHeight / 2;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForNetworkIdle({ idleTime: 500, timeout: 30_000 });
  await new Promise((r) => setTimeout(r, 1500)); // let entrance animations finish

  const rootHtml = await page.$eval('#root', (el) => el.innerHTML);
  const textLength = await page.$eval('#root', (el) => el.innerText.trim().length);
  await page.close();

  if (errors.length) console.warn(`  ! page errors on ${route.path}:\n    ${errors.join('\n    ')}`);
  if (textLength < 200) {
    throw new Error(`Prerender of ${route.path} produced almost no text (${textLength} chars).`);
  }
  return { rootHtml, textLength };
}

// Fingerprint of everything that affects the rendered markup. Line endings are
// normalised so a Windows checkout (CRLF) and the Linux build server (LF) agree.
const TEXT_EXT = /\.(tsx?|jsx?|mjs|cjs|css|json|html|svg|md|txt)$/i;
async function sourceFingerprint() {
  const files = [];
  const walk = async (dir) => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) await walk(full);
      else files.push(full);
    }
  };
  await walk(path.join(ROOT, 'src'));
  files.push(path.join(ROOT, 'index.html'));
  const hash = createHash('sha256');
  for (const file of files.map((f) => path.relative(ROOT, f).split(path.sep).join('/')).sort()) {
    let data = await readFile(path.join(ROOT, file));
    if (TEXT_EXT.test(file)) data = Buffer.from(data.toString('utf8').replace(/\r/g, ''));
    hash.update(file).update('\0').update(data).update('\0');
  }
  return hash.digest('hex');
}

async function saveSnapshot(results, fingerprint) {
  await mkdir(SNAPSHOT_DIR, { recursive: true });
  for (const { route, rootHtml } of results) {
    await writeFile(path.join(SNAPSHOT_DIR, route.out), rootHtml);
  }
  const manifest = {
    note: 'Generated by scripts/prerender.mjs on a local build. Commit this folder. Used when the build server cannot run Chrome.',
    fingerprint,
    createdAt: new Date().toISOString(),
    routes: results.map(({ route }) => route.out),
  };
  await writeFile(SNAPSHOT_MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
}

async function useSnapshot(template, fingerprint) {
  let manifest;
  try {
    manifest = JSON.parse(await readFile(SNAPSHOT_MANIFEST, 'utf8'));
  } catch {
    throw new Error('No saved snapshot in prerendered/. Run `npm run build` locally and commit the prerendered/ folder.');
  }
  if (manifest.fingerprint !== fingerprint) {
    throw new Error(
      `The saved snapshot in prerendered/ (from ${manifest.createdAt}) is outdated: src/ has changed since. ` +
        'Run `npm run build` locally and commit the prerendered/ folder.'
    );
  }
  for (const route of ROUTES) {
    const rootHtml = await readFile(path.join(SNAPSHOT_DIR, route.out), 'utf8');
    await writeFile(path.join(DIST, route.out), buildPage(template, route, rootHtml));
    console.log(`  ✓ prerendered ${route.path} → dist/${route.out} (from saved snapshot, ${manifest.createdAt})`);
  }
}

async function main() {
  const template = await readFile(path.join(DIST, 'index.html'), 'utf8');
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html is already prerendered. Run `vite build` first.');
  }

  const fingerprint = await sourceFingerprint();
  try {
    await renderWithChrome(template, fingerprint);
  } catch (err) {
    console.warn(`  ! Chrome prerender unavailable (${describe(err)}). Trying the saved snapshot…`);
    await useSnapshot(template, fingerprint);
  }
}

async function renderWithChrome(template, fingerprint) {
  const server = await preview({ root: ROOT, preview: { port: 4179, strictPort: false, open: false }, logLevel: 'warn' });
  const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, '');

  try {
    // Render every route first, then write them all, so a failure never leaves
    // dist/ half-prerendered.
    let lastError;
    for (const attempt of LAUNCH_ATTEMPTS) {
      let browser;
      try {
        browser = await puppeteer.launch({ headless: attempt.headless, args: attempt.args });
        const results = [];
        for (const route of ROUTES) {
          results.push({ route, ...(await renderRoute(browser, baseUrl, route)) });
        }
        for (const { route, rootHtml, textLength } of results) {
          await writeFile(path.join(DIST, route.out), buildPage(template, route, rootHtml));
          console.log(`  ✓ prerendered ${route.path} → dist/${route.out} (${textLength.toLocaleString()} chars of text)`);
        }
        await saveSnapshot(results, fingerprint);
        console.log('  ✓ saved snapshot to prerendered/ (commit it so the hosting build can use it)');
        return;
      } catch (err) {
        lastError = err;
        console.warn(`  ! prerender attempt "${attempt.name}" failed: ${describe(err)}`);
      } finally {
        await browser?.close().catch(() => {});
      }
    }
    throw lastError;
  } finally {
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

// Build servers are often minimal containers where Chrome crashes on start-up
// (tiny /dev/shm, no sandbox support). Try the lightweight headless shell with
// container-safe flags first, then a single-process fallback.
const CONTAINER_ARGS = [
  '--no-sandbox',
  '--disable-setuid-sandbox',
  '--disable-dev-shm-usage',
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
];
const LAUNCH_ATTEMPTS = [
  { name: 'headless-shell', headless: 'shell', args: CONTAINER_ARGS },
  { name: 'headless-shell, single process', headless: 'shell', args: [...CONTAINER_ARGS, '--no-zygote', '--single-process'] },
  { name: 'chrome', headless: true, args: CONTAINER_ARGS },
];

const describe = (err) =>
  err?.message ?? err?.[Object.getOwnPropertySymbols(err ?? {}).find((s) => String(s) === 'Symbol(kMessage)')] ?? String(err);

main()
  .then(() => process.exit(0))
  .catch((err) => {
    // Never block a deploy because of prerendering: the app still works as a
    // normal client-side SPA, it just won't have prerendered HTML for crawlers.
    // Set PRERENDER_STRICT=1 to make the build fail instead.
    console.warn('\n⚠️  PRERENDER SKIPPED: ' + describe(err));
    console.warn('   The site will deploy as a normal client-side app (no prerendered HTML for crawlers).\n');
    process.exit(process.env.PRERENDER_STRICT === '1' ? 1 : 0);
  });
