/* Split the donate page's three payment panels into React components and
   swap the copy buttons for a client <CopyButton>. */
const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');
const { htmlToJsx } = require('./html2jsx');

const ROOT = path.join(__dirname, '..', '..');
const html = fs.readFileSync(path.join(ROOT, 'legacy/html/donate.html'), 'utf8');
const h = html.indexOf('</header>');
const f = html.lastIndexOf('<footer');
const root = parse(html.slice(h + 9, f), { comment: false });

const NAMES = { qr: 'QrPanel', bank: 'BankPanel', other: 'OtherPanel' };
const parts = [];

for (const key of Object.keys(NAMES)) {
  const el = root.querySelector(`[data-sd-panel="${key}"]`);
  if (!el) { console.log('missing panel: ' + key); continue; }

  /* strip the state class -- visibility is the tab component's job now */
  el.setAttribute('class', (el.getAttribute('class') || '').replace(/\bis-active\b/, '').trim());
  el.removeAttribute('data-sd-panel');

  let jsx = htmlToJsx(el.toString(), { indent: 2 });

  /* copy buttons become a client component carrying the value */
  const copies = [];
  jsx = jsx.replace(
    /<button([^>]*?)data-sd-copy(?:="")?([^>]*?)>[\s\S]*?<\/button>/g,
    (full) => {
      const val = full.match(/data-sd-copyval="([^"]*)"/);
      copies.push(val ? val[1] : '');
      return `<CopyButton value=${JSON.stringify(val ? val[1] : '')} />`;
    }
  );
  console.log(`${key}: ${jsx.length} chars, ${copies.length} copy button(s)`);
  parts.push({ name: NAMES[key], jsx });
}

const src = `import CopyButton from './CopyButton'

/* The three payment panels from the donate page, split out during the
   Next.js rebuild so PayTabs can switch between them. */
${parts
  .map(
    (p) => `export function ${p.name}() {
  return (
${p.jsx}
  )
}`
  )
  .join('\n\n')}
`;

fs.mkdirSync(path.join(ROOT, 'components/donate'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'components/donate/panels.tsx'), src, 'utf8');
console.log('\nwrote components/donate/panels.tsx', src.length, 'chars');
