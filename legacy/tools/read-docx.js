/* Minimal .docx reader: unzip (stored + deflate) and pull the text runs out of
   word/document.xml, preserving paragraph and table structure. */
const fs = require('fs');
const zlib = require('zlib');

function entries(buf) {
  const out = [];
  /* walk the central directory from the end-of-central-directory record */
  let eocd = -1;
  for (let i = buf.length - 22; i >= 0; i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd === -1) throw new Error('not a zip');
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);

  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) break;
    const method = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOff = buf.readUInt32LE(p + 42);
    const name = buf.slice(p + 46, p + 46 + nameLen).toString('utf8');

    const lhNameLen = buf.readUInt16LE(localOff + 26);
    const lhExtraLen = buf.readUInt16LE(localOff + 28);
    const dataStart = localOff + 30 + lhNameLen + lhExtraLen;
    const data = buf.slice(dataStart, dataStart + compSize);

    out.push({ name, method, data });
    p += 46 + nameLen + extraLen + commentLen;
  }
  return out;
}

function inflate(entry) {
  if (entry.method === 0) return entry.data;
  return zlib.inflateRawSync(entry.data);
}

function textOf(xml) {
  const lines = [];
  /* tables first so their rows stay grouped */
  const body = xml.replace(/<w:tbl>[\s\S]*?<\/w:tbl>/g, (tbl) => {
    lines.push('');
    lines.push('[TABLE]');
    const rows = tbl.match(/<w:tr[\s>][\s\S]*?<\/w:tr>/g) || [];
    for (const r of rows) {
      const cells = (r.match(/<w:tc>[\s\S]*?<\/w:tc>/g) || []).map((c) =>
        (c.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g) || [])
          .map((t) => t.replace(/<[^>]+>/g, ''))
          .join('')
          .trim()
      );
      lines.push('  | ' + cells.join(' | '));
    }
    lines.push('[/TABLE]');
    lines.push('');
    return '';
  });

  const paras = body.match(/<w:p[\s>][\s\S]*?<\/w:p>/g) || [];
  for (const p of paras) {
    const runs = (p.match(/<w:t[^>]*>([\s\S]*?)<\/w:t>/g) || [])
      .map((t) => t.replace(/<[^>]+>/g, ''))
      .join('');
    const txt = runs
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .trim();
    /* keep list level so structure is visible */
    const isList = /<w:numPr>/.test(p);
    lines.push(isList && txt ? '  - ' + txt : txt);
  }
  return lines.join('\n').replace(/\n{3,}/g, '\n\n');
}

const file = process.argv[2];
if (!file) {
  console.error('usage: node read-docx.js <file.docx>');
  process.exit(1);
}
const buf = fs.readFileSync(file);
const all = entries(buf);
const doc = all.find((e) => e.name === 'word/document.xml');
if (!doc) throw new Error('word/document.xml not found');
const xml = inflate(doc).toString('utf8');
process.stdout.write(textOf(xml));
