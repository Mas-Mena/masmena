/**
 * IndexNow: tells Bing, Yandex, Seznam, Naver and other participating search
 * engines that the site's pages changed, so they re-crawl quickly. (Google does
 * not use IndexNow; it reads the sitemap submitted in Search Console.)
 *
 * Runs at the end of `npm run build`. By default it only pings from the hosting
 * build server (Linux), not from local Windows/macOS builds. Override with
 * INDEXNOW=1 (always ping) or INDEXNOW=0 (never ping).
 * Never fails the build: any error is just logged.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const HOST = 'masmena.com';
const KEY = '28bae39ddd4355a3914d2c27beecd61a'; // must match public/28bae39ddd4355a3914d2c27beecd61a.txt
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function main() {
  const mode = process.env.INDEXNOW;
  if (mode === '0' || (mode !== '1' && process.platform !== 'linux')) {
    console.log('  - IndexNow: skipped (local build). Runs automatically on the hosting build.');
    return;
  }

  const sitemap = await readFile(path.join(ROOT, 'dist', 'sitemap.xml'), 'utf8');
  const urlList = [...sitemap.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (!urlList.length) throw new Error('no URLs found in dist/sitemap.xml');

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
    signal: AbortSignal.timeout(15_000),
  });
  // 200 = accepted, 202 = accepted (key validation pending)
  if (res.ok) console.log(`  ✓ IndexNow: submitted ${urlList.length} URLs (HTTP ${res.status})`);
  else console.warn(`  ! IndexNow: HTTP ${res.status} ${await res.text().catch(() => '')}`.trim());
}

main().catch((err) => console.warn(`  ! IndexNow skipped: ${err.message}`));
