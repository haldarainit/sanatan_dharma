/* The five mission detail pages ship their own <style> block in the head with
   page-scoped class names (hero-section, breadcrumb, mission-*). The converter
   only takes markup from </header> onward, so those rules were lost and the
   pages rendered unstyled. Lift them into one stylesheet. */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', '..');
const PAGES = [
  'sanatan-help-center',
  'sanatan-bhojanalaya',
  'skill-development',
  'ashray-dham',
  'gurukul-sansar-kendra',
];

const blocks = [];
for (const p of PAGES) {
  const file = path.join(ROOT, 'legacy/html/future-activities', p, 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  let found = 0;
  const re = /<style[^>]*>([\s\S]*?)<\/style>/g;
  let m;
  while ((m = re.exec(html))) {
    blocks.push({ page: p, css: m[1] });
    found++;
  }
  console.log(`${p}: ${found} style block(s), ${blocks.filter((b) => b.page === p).reduce((a, b) => a + b.css.length, 0)} chars`);
}

/* the five pages share one stylesheet -- keep the longest and check the rest
   are the same so we do not ship five near-copies */
const unique = [];
for (const b of blocks) {
  const norm = b.css.replace(/\s+/g, ' ').trim();
  if (!unique.some((u) => u.norm === norm)) unique.push({ ...b, norm });
}
console.log(`\ndistinct blocks: ${unique.length}`);

/* These rules were page-scoped by virtue of living in one page's <style>.
   As a shared stylesheet they would leak -- the block even restyles `body` --
   so every selector gets nested under .mission-page, which the five pages
   carry on their wrapper. */
function scope(css) {
  const SCOPE = '.mission-page';
  let out = '';
  let i = 0;
  while (i < css.length) {
    /* skip whitespace so an at-rule after a normal rule is still recognised */
    while (i < css.length && /\s/.test(css[i])) i++;
    if (i >= css.length) break;

    /* @media / @supports: scope the selectors inside, keep the at-rule */
    if (css[i] === '@') {
      const braceStart = css.indexOf('{', i);
      const prelude = css.slice(i, braceStart + 1);
      let depth = 1, j = braceStart + 1;
      while (j < css.length && depth > 0) {
        if (css[j] === '{') depth++;
        else if (css[j] === '}') depth--;
        j++;
      }
      const inner = css.slice(braceStart + 1, j - 1);
      /* @keyframes percentages must not be prefixed */
      out += prelude + (/^@(keyframes|font-face)/.test(prelude) ? inner : scope(inner)) + '}';
      i = j;
      continue;
    }
    const braceStart = css.indexOf('{', i);
    if (braceStart === -1) break;
    const braceEnd = css.indexOf('}', braceStart);
    if (braceEnd === -1) break;

    const selectors = css.slice(i, braceStart).trim();
    const body = css.slice(braceStart + 1, braceEnd);
    if (selectors) {
      const scoped = selectors
        .split(',')
        .map((sel) => {
          const s = sel.trim();
          if (!s) return '';
          /* body/html become the wrapper itself rather than the document */
          if (/^(body|html)$/.test(s)) return SCOPE;
          return SCOPE + ' ' + s;
        })
        .filter(Boolean)
        .join(', ');
      out += scoped + '{' + body + '}';
    }
    i = braceEnd + 1;
  }
  return out;
}

let out = `/* --------------------------------------------------------------------------
   Mission detail pages
   Lifted from the <style> block each of the five scraped pages carried in its
   head. The converter reads markup from </header> onward, so these rules were
   dropped and the pages rendered as unstyled text. Everything is nested under
   .mission-page so it cannot leak into the rest of the site.
   -------------------------------------------------------------------------- */
`;
for (const u of unique) {
  out += `\n/* --- from ${u.page} --- */\n` + scope(u.css.replace(/\r\n/g, '\n')) + '\n';
}

const dest = path.join(ROOT, 'styles/mission-detail.css');
fs.writeFileSync(dest, out, 'utf8');
console.log('wrote styles/mission-detail.css', out.length, 'chars');

/* register it once */
const g = path.join(ROOT, 'styles/globals.css');
let gs = fs.readFileSync(g, 'utf8');
if (!gs.includes('mission-detail.css')) {
  gs = gs.replace("@import './page-sections.css';", "@import './page-sections.css';\n@import './mission-detail.css';");
  fs.writeFileSync(g, gs, 'utf8');
  console.log('registered in globals.css');
} else {
  console.log('already registered');
}
