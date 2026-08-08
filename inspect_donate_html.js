const fs = require('fs');
const html = fs.readFileSync('donate.html', 'utf8');

const match = html.match(/Donation Details[\s\S]*?<\/section>/i);
if (match) {
  console.log('Donate page snippet:');
  console.log(match[0].substring(0, 3000));
} else {
  console.log('Not found in section match, searching text...');
  const idx = html.indexOf('Donation Details');
  if (idx !== -1) {
    console.log(html.substring(idx - 100, idx + 2500));
  }
}
