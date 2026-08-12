/* Split one scraped page into per-section components using the parsed DOM,
   so section boundaries are exact rather than inferred from indentation.
   Run: node legacy/tools/split-page.js <route> <OutDir> [--write] */
const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');
const { htmlToJsx } = require('./html2jsx');

const ROOT = path.join(__dirname, '..', '..');

function bodyOf(route) {
  const file = route === '.' ? 'index.html' : route + '.html';
  const html = fs.readFileSync(path.join(ROOT, 'legacy', 'html', file), 'utf8');
  const hdr = html.indexOf('</header>');
  const ftr = html.lastIndexOf('<footer');
  let body = html.slice(hdr + 9, ftr);
  for (;;) {
    const m = body.match(/^\s*<main[^>]*>([\s\S]*)<\/main>\s*$/);
    if (!m) break;
    body = m[1];
  }
  return { body, html };
}

function label(el) {
  const h = el.querySelector('h1, h2, h3');
  const txt = h ? h.structuredText.replace(/\s+/g, ' ').trim() : '';
  return txt.slice(0, 60);
}

const route = process.argv[2];
const outDirName = process.argv[3];
const write = process.argv.includes('--write');
if (!route || !outDirName) {
  console.error('usage: node split-page.js <route> <OutDirName> [--write]');
  process.exit(1);
}

const { body } = bodyOf(route);
const root = parse(body, { lowerCaseTagName: false, comment: true, blockTextElements: { script: true, style: true, pre: true } });
const sections = root.childNodes.filter((n) => n.nodeType === 1);

console.log(`top-level sections: ${sections.length}`);
sections.forEach((s, i) => {
  console.log(
    `${String(i + 1).padStart(3)}) <${s.rawTagName}> ${String(s.toString().length).padStart(7)}B  id=${(s.getAttribute('id') || '').padEnd(18)} ${label(s)}`
  );
});

if (!write) {
  console.log('\n(dry run; pass --write)');
  process.exit(0);
}

const names = JSON.parse(fs.readFileSync(path.join(__dirname, '_names.json'), 'utf8'));
if (names.length !== sections.length) {
  console.error(`name count ${names.length} != section count ${sections.length}`);
  process.exit(1);
}

const dir = path.join(ROOT, 'components', outDirName);
fs.mkdirSync(dir, { recursive: true });

names.forEach((name, i) => {
  const jsx = htmlToJsx(sections[i].toString(), { indent: 2 });
  const linked = linkify(jsx);
  const needsLink = /<Link\b/.test(linked);
  const src = `${needsLink ? "import Link from 'next/link'\n\n" : ''}export default function ${name}() {
  return (
${linked}
  )
}
`;
  fs.writeFileSync(path.join(dir, name + '.tsx'), src, 'utf8');
});

function linkify(jsx) {
  const s = jsx.replace(/<a\b([^>]*?)href="(\/[^"]*)"([^>]*?)>/g, (full, pre, href, post) =>
    /\btarget=/.test(full) ? full : `<Link${pre}href="${href}"${post}>`
  );
  const out = [];
  const st = [];
  let i = 0;
  while (i < s.length) {
    if (s.startsWith('<Link', i)) { st.push('L'); out.push('<Link'); i += 5; continue; }
    if (s.startsWith('<a', i) && /[\s>]/.test(s[i + 2] || '')) { st.push('a'); out.push('<a'); i += 2; continue; }
    if (s.startsWith('</a>', i)) { out.push(st.pop() === 'L' ? '</Link>' : '</a>'); i += 4; continue; }
    out.push(s[i++]);
  }
  return out.join('');
}

console.log(`\nwrote ${names.length} components to components/${outDirName}/`);
