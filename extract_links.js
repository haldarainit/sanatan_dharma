const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const links = new Set();
const matches = html.matchAll(/href=["']([^"']+)["']/gi);
for (const m of matches) {
  links.add(m[1]);
}
console.log('All links in index.html:', Array.from(links));
