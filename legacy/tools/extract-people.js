/* Lift the inspiration figures out of the About page markup into typed data
   so the React slider renders them without hand-copying 14 cards. */
const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

const ROOT = path.join(__dirname, '..', '..');
const html = fs.readFileSync(path.join(ROOT, 'legacy/html/about.html'), 'utf8');
const h = html.indexOf('</header>');
const f = html.lastIndexOf('<footer');
const root = parse(html.slice(h + 9, f), { comment: false });

const people = root.querySelectorAll('[data-sd-cat]').map((el) => {
  const img = el.querySelector('img');
  const texts = el
    .querySelectorAll('h3, h4, p, span')
    .map((n) => n.structuredText.replace(/\s+/g, ' ').trim())
    .filter(Boolean);
  return {
    category: el.getAttribute('data-sd-cat'),
    name: img ? img.getAttribute('alt') : texts[0] || '',
    img: img ? img.getAttribute('src') : '',
    title: texts[0] || '',
    role: texts[1] || '',
  };
});

const filters = root.querySelectorAll('[data-sd-filter]').map((b) => ({
  id: b.getAttribute('data-sd-filter'),
  label: b.structuredText.replace(/\s+/g, ' ').trim(),
}));

console.log('people:', people.length);
people.forEach((p) => console.log(`  [${p.category}] ${p.title}${p.role ? ' — ' + p.role : ''}`));
console.log('\nfilters:', filters.map((f) => f.id).join(', '));

const ts = `export type Person = {
  category: string
  name: string
  img: string
  title: string
  role: string
}

export type PeopleFilter = { id: string; label: string }

/* Inspiration figures, lifted from the About page during the Next.js
   rebuild. Order is preserved from the original markup. */
export const PEOPLE: Person[] = ${JSON.stringify(people, null, 2)}

export const PEOPLE_FILTERS: PeopleFilter[] = ${JSON.stringify(filters, null, 2)}
`;
fs.writeFileSync(path.join(ROOT, 'lib/people.ts'), ts, 'utf8');
console.log('\nwrote lib/people.ts');
