/* Turns a scraped page into an app/<route>/page.tsx.
   Content between </header> and <footer> becomes the page body; the shell
   comes from app/layout.tsx. Internal <a> become next/link.
   Run: node legacy/tools/convert-page.js <route> [...]  (route "" = home) */
const fs = require('fs');
const path = require('path');
const { htmlToJsx } = require('./html2jsx');

const ROOT = path.join(__dirname, '..', '..');
const SRC = path.join(ROOT, 'legacy', 'html');

function readPage(route) {
  const file = route === '' ? 'index.html' : route + '.html';
  const p = path.join(SRC, file);
  if (!fs.existsSync(p)) throw new Error('no such page: ' + p);
  return fs.readFileSync(p, 'utf8');
}

function meta(html) {
  const t = html.match(/<title>([\s\S]*?)<\/title>/);
  const d = html.match(/<meta name="description" content="([^"]*)"/);
  return {
    title: t ? t[1].trim() : 'Sanatan Dharm Manav Kalyan Foundation',
    description: d ? d[1].trim() : '',
  };
}

function mainOf(html) {
  const hdr = html.indexOf('</header>');
  const ftr = html.lastIndexOf('<footer');
  if (hdr === -1 || ftr === -1) throw new Error('header/footer boundary missing');
  let body = html.slice(hdr + 9, ftr);
  /* The scrape wraps content in <main> -- the homepage nests two of them,
     which is invalid anyway. app/layout.tsx supplies the real one, so peel
     every wrapper off. */
  for (;;) {
    const m = body.match(/^\s*<main[^>]*>([\s\S]*)<\/main>\s*$/);
    if (!m) break;
    body = m[1];
  }
  return body;
}

/* internal hrefs become <Link>, everything else stays an anchor */
function linkify(jsx) {
  let used = false;
  const out = jsx.replace(
    /<a\b([^>]*?)href="(\/[^"]*)"([^>]*?)>/g,
    (full, pre, href, post) => {
      if (/\btarget=/.test(full)) return full;
      used = true;
      return `<Link${pre}href="${href}"${post}>`;
    }
  );
  if (!used) return { jsx: out, used };
  /* close the tags we opened: walk and match */
  return { jsx: closeLinks(out), used };
}

function closeLinks(src) {
  /* replace the </a> that terminates each <Link ...> we produced */
  const chars = src.split('');
  const stack = [];
  const result = [];
  let i = 0;
  while (i < src.length) {
    if (src.startsWith('<Link', i)) {
      stack.push('Link');
      result.push(src.slice(i, i + 5));
      i += 5;
      continue;
    }
    if (src.startsWith('<a', i) && /[\s>]/.test(src[i + 2] || '')) {
      stack.push('a');
      result.push(src.slice(i, i + 2));
      i += 2;
      continue;
    }
    if (src.startsWith('</a>', i)) {
      const tag = stack.pop();
      result.push(tag === 'Link' ? '</Link>' : '</a>');
      i += 4;
      continue;
    }
    result.push(chars[i]);
    i++;
  }
  return result.join('');
}

function componentName(route) {
  if (route === '') return 'HomePage';
  return route
    .split(/[/-]/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('') + 'Page';
}

function convert(route) {
  const html = readPage(route);
  const { title, description } = meta(html);
  const jsx0 = htmlToJsx(mainOf(html), { indent: 2 });
  const { jsx, used } = linkify(jsx0);

  const dir = route === '' ? path.join(ROOT, 'app') : path.join(ROOT, 'app', route);
  fs.mkdirSync(dir, { recursive: true });

  const src = `${used ? "import Link from 'next/link'\n" : ''}import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: ${JSON.stringify(title)},${description ? `\n  description: ${JSON.stringify(description)},` : ''}
}

export default function ${componentName(route)}() {
  return (
    <>
${jsx}
    </>
  )
}
`;
  const out = path.join(dir, 'page.tsx');
  fs.writeFileSync(out, src, 'utf8');
  return { out, bytes: src.length, lines: src.split('\n').length };
}

const routes = process.argv.slice(2);
if (!routes.length) {
  console.error('usage: node convert-page.js <route> [...]   ("" for home)');
  process.exit(1);
}
for (const r of routes) {
  try {
    const { out, bytes, lines } = convert(r === '.' ? '' : r);
    console.log(`${(r === '.' ? '/' : '/' + r).padEnd(26)} -> ${path.relative(ROOT, out).padEnd(40)} ${lines} lines, ${Math.round(bytes / 1024)}KB`);
  } catch (e) {
    console.log(`${r.padEnd(26)} -> FAILED: ${e.message}`);
  }
}
