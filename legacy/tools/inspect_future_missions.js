const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const match = html.match(/<section[^>]*>[^]*?भविष्य में आने वाली सेवा[^]*?<\/section>/i);
if (match) {
  console.log('Future Missions section HTML:');
  console.log(match[0].substring(0, 3500));
} else {
  console.log('Section not found directly, searching text...');
  const idx = html.indexOf('भविष्य में आने वाली सेवा');
  if (idx !== -1) {
    console.log(html.substring(idx - 200, idx + 2500));
  }
}
