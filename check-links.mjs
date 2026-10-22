// Checks that every internal link in the built pages points to a page/anchor that exists.
//   node check-links.mjs
import { readdirSync, readFileSync, existsSync } from 'node:fs';

const dir = new URL('.', import.meta.url);
const pages = readdirSync(dir).filter((f) => f.endsWith('.html'));
const html = Object.fromEntries(pages.map((p) => [p, readFileSync(new URL(p, dir), 'utf8')]));
const ids = Object.fromEntries(pages.map((p) => [p, new Set([...html[p].matchAll(/id="([^"]+)"/g)].map((m) => m[1]))]));
// accordion items are rendered by site.js
for (let i = 0; i < 4; i++) ids['services.html']?.add('svc-' + i);
const always = new Set(['top', 'st-mark', 'st-word', 'st-tag']);

const bad = [];
for (const p of pages) {
  for (const [, href] of html[p].matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|mailto:|tel:|data:)/.test(href)) continue;
    const [file, hash] = href.split('#');
    const target = file || p;
    if (!pages.includes(target) && !existsSync(new URL(target, dir))) { bad.push(`${p} -> ${href}`); continue; }
    if (hash && !always.has(hash) && !ids[target]?.has(hash)) bad.push(`${p} -> ${href}`);
  }
}
console.log(pages.length + ' pages:', pages.join(' '));
console.log(bad.length ? 'BROKEN:\n' + bad.join('\n') : 'all internal links OK');
process.exitCode = bad.length ? 1 : 0;
