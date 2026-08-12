/* Lift the hero slide deck out of the old server-injected script. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..', '..');
const src = fs.readFileSync(path.join(ROOT, 'legacy/server.js'), 'utf8');

const marker = src.indexOf('const slidesData = [');
if (marker === -1) throw new Error('slidesData not found');
const start = src.indexOf('[', marker);

let depth = 0, quote = null, end = -1;
for (let i = start; i < src.length; i++) {
  const ch = src[i];
  if (quote) {
    if (ch === '\\') { i++; continue; }
    if (ch === quote) quote = null;
    continue;
  }
  if (ch === '"' || ch === "'") { quote = ch; continue; }
  if (ch === '[') depth++;
  else if (ch === ']') { depth--; if (depth === 0) { end = i + 1; break; } }
}

const slides = vm.runInNewContext('(' + src.slice(start, end) + ')');
console.log('slides:', slides.length);
slides.forEach((s, i) => console.log(`  ${i + 1}. ${s.img}${s.noOverlay ? '  (no overlay)' : '  cta=' + s.cta.label}`));

const ts = `export type HeroSlide = {
  img: string
  imgMobile?: string
  alt: string
  line1?: string
  line2?: string
  cta?: { label: string; href: string }
  noOverlay?: boolean
}

/* Hero slides, lifted from the old server-injected slider during the
   Next.js rebuild. */
export const HERO_SLIDES: HeroSlide[] = ${JSON.stringify(slides, null, 2)}
`;
fs.writeFileSync(path.join(ROOT, 'lib/hero.ts'), ts, 'utf8');
console.log('\nwrote lib/hero.ts');
