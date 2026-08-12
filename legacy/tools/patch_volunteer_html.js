const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target = 'style="transform:translateX(calc(-5 * (33.3333% + 8px)))"';
const replacement = 'style="transform:translateX(0px)"';

if (html.includes(target)) {
  html = html.replace(target, replacement);
  fs.writeFileSync('index.html', html);
  console.log('Successfully patched index.html for Volunteer carousel initial transform!');
} else {
  console.log('Target string not found in index.html, searching regex...');
  html = html.replace(/style="transform:\s*translateX\(calc\(-5[^"]*\)"/gi, 'style="transform:translateX(0px)"');
  fs.writeFileSync('index.html', html);
  console.log('Regex patch applied to index.html!');
}
