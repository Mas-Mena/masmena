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
 * Usage: runs automatically as part of `npm run build`.
 *        Run on its own with `npm run prerender` (requires an existing dist/).
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
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

async function main() {
  const template = await readFile(path.join(DIST, 'index.html'), 'utf8');
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('dist/index.html is already prerendered. Run `vite build` first.');
  }

  const server = await preview({ root: ROOT, preview: { port: 4179, strictPort: false, open: false }, logLevel: 'warn' });
  const baseUrl = server.resolvedUrls.local[0].replace(/\/$/, '');
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  try {
    for (const route of ROUTES) {
      const { rootHtml, textLength } = await renderRoute(browser, baseUrl, route);
      await writeFile(path.join(DIST, route.out), buildPage(template, route, rootHtml));
      console.log(`  ✓ prerendered ${route.path} → dist/${route.out} (${textLength.toLocaleString()} chars of text)`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

main().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
