/* Pull the portal page content (FAQ, status tables) out of the legacy markup
   into a typed data file so the React pages render it without retyping. */
const fs = require('fs');
const { parse } = require('node-html-parser');
const ROOT = 'c:/Users/ASUS/Desktop/Sanatan Dharma/';

function bodyOf(route) {
  const html = fs.readFileSync(ROOT + 'legacy/html/' + route + '.html', 'utf8');
  const h = html.indexOf('</header>');
  const f = html.lastIndexOf('<footer');
  return parse(html.slice(h + 9, f), { comment: false });
}

const out = {};

/* FAQ items from need-help */
{
  const root = bodyOf('need-help');
  const items = root.querySelectorAll('[data-sd-faq]').map((el) => ({
    q: el.querySelector('.sd-fx-faq-q').structuredText.trim(),
    a: el.querySelector('.sd-fx-faq-a p').structuredText.trim(),
  }));
  out.NEED_HELP_FAQ = items;
  console.log('need-help FAQ items:', items.length);
}

/* status tables */
for (const [route, key] of [['need-help', 'NEED_HELP_STATUS'], ['raise-complaint', 'COMPLAINT_STATUS']]) {
  const root = bodyOf(route);
  const rows = root.querySelectorAll('.sd-fx-status tbody tr').map((tr) => {
    const td = tr.querySelectorAll('td');
    return { status: td[0].structuredText.trim(), meaning: td[1].structuredText.trim() };
  });
  out[key] = rows;
  console.log(route, 'status rows:', rows.length);
}

/* the "Important Information" bullet lists */
for (const [route, key] of [['need-help', 'NEED_HELP_RULES'], ['contact', 'CONTACT_RULES']]) {
  const root = bodyOf(route);
  const ul = root.querySelectorAll('.sd-mem-list');
  const list = ul.length ? ul[0].querySelectorAll('li').map((li) => li.structuredText.trim()) : [];
  out[key] = list;
  console.log(route, 'rules:', list.length);
}

/* how-it-works steps */
{
  const root = bodyOf('need-help');
  const ol = root.querySelector('.sd-fx-steps-list');
  out.NEED_HELP_STEPS = ol ? ol.querySelectorAll('li').map((li) => li.structuredText.trim()) : [];
  console.log('need-help how-it-works steps:', out.NEED_HELP_STEPS.length);
}

const ts = `/* Portal page copy, lifted verbatim from the client's documents during the
   Next.js rebuild so the React pages render it without retyping. */

export type FaqItem = { q: string; a: string }
export type StatusRow = { status: string; meaning: string }

export const NEED_HELP_FAQ: FaqItem[] = ${JSON.stringify(out.NEED_HELP_FAQ, null, 2)}

export const NEED_HELP_STATUS: StatusRow[] = ${JSON.stringify(out.NEED_HELP_STATUS, null, 2)}

export const COMPLAINT_STATUS: StatusRow[] = ${JSON.stringify(out.COMPLAINT_STATUS, null, 2)}

export const NEED_HELP_RULES: string[] = ${JSON.stringify(out.NEED_HELP_RULES, null, 2)}

export const CONTACT_RULES: string[] = ${JSON.stringify(out.CONTACT_RULES, null, 2)}

export const NEED_HELP_STEPS: string[] = ${JSON.stringify(out.NEED_HELP_STEPS, null, 2)}
`;
fs.writeFileSync(ROOT + 'lib/portal-content.ts', ts, 'utf8');
console.log('\nwrote lib/portal-content.ts', ts.length, 'chars');
