const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const idx = html.indexOf('Volunteer •');
if (idx !== -1) {
  console.log('Full Volunteer Section HTML:');
  console.log(html.substring(idx - 100, idx + 4000));
}
