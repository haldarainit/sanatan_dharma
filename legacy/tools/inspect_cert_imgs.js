const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const match = html.match(/Section 8[\s\S]*?ISO 9001:2015/i);
if (match) {
  console.log('Certificates section snippet:');
  console.log(match[0]);
} else {
  console.log('Not found in direct match, searching img tags in section...');
  const idx = html.indexOf('Section 8');
  if (idx !== -1) {
    console.log(html.substring(idx - 500, idx + 1000));
  }
}
