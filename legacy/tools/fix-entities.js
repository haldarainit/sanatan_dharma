/* The original site was scraped as HTML, so its text carried HTML entities.
   Inside JSX those entities are correct -- <p>Seva &amp; Dharma</p> renders an
   ampersand. But the CMS extraction moved that text into JavaScript string
   literals, and a string literal is escaped again on the way out, so
   t(text, 'k1', "VISION &amp; MISSION") reaches the browser as
   "VISION &amp;amp; MISSION" and the reader sees the entity itself.

   This decodes entities only where they are now literal text: the fallback
   strings passed to t()/img()/alt() and the values published to Sanity.
   Entities sitting in plain JSX text are left alone, because there they are
   still doing their job.

   Run: node legacy/tools/fix-entities.js [--write] */
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', '..')
const WRITE = process.argv.includes('--write')

/* &amp; is decoded last so "&amp;quot;" becomes "&quot;" and not a quote */
const NAMED = [
  ['&quot;', '"'],
  ['&apos;', "'"],
  ['&nbsp;', ' '],
  ['&lsquo;', '‘'],
  ['&rsquo;', '’'],
  ['&ldquo;', '“'],
  ['&rdquo;', '”'],
  ['&mdash;', '—'],
  ['&ndash;', '–'],
  ['&hellip;', '…'],
  ['&lt;', '<'],
  ['&gt;', '>'],
]

function decode(s) {
  let out = s
  for (const [ent, ch] of NAMED) out = out.split(ent).join(ch)
  out = out.replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  out = out.replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
  return out.split('&amp;').join('&')
}

const HAS_ENTITY = /&(?:[a-zA-Z]+|#x?[0-9a-fA-F]+);/

/* ---------- source files ---------- */
function walk(d, out = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name)
    if (e.isDirectory()) walk(p, out)
    else if (e.name.endsWith('.tsx')) out.push(p)
  }
  return out
}

const files = [...walk(path.join(ROOT, 'app')), ...walk(path.join(ROOT, 'components'))]
let sourceFixed = 0
let filesTouched = 0

/* only the fallback argument of t(...) / img(...) / alt(...) */
const CALL = /\b(t|img|alt)\((text|images)\s*,\s*('[^']*')\s*,\s*"((?:[^"\\]|\\.)*)"\s*\)/g

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8')
  let n = 0
  const out = src.replace(CALL, (whole, fn, map, key, fallback) => {
    if (!HAS_ENTITY.test(fallback)) return whole
    /* the literal is escaped source, so unescape, decode, re-escape */
    let value
    try {
      value = JSON.parse('"' + fallback + '"')
    } catch {
      return whole
    }
    const fixed = decode(value)
    if (fixed === value) return whole
    n++
    return `${fn}(${map}, ${key}, ${JSON.stringify(fixed)})`
  })
  if (n) {
    sourceFixed += n
    filesTouched++
    console.log('  ' + path.relative(ROOT, file).replace(/\\/g, '/').padEnd(46) + n)
    if (WRITE) fs.writeFileSync(file, out, 'utf8')
  }
}

console.log(`\n${sourceFixed} fallback strings in ${filesTouched} files`)

/* ---------- seed files ---------- */
let seedFixed = 0
for (const name of ['_page-blocks.json', '_home-blocks.json']) {
  const p = path.join(__dirname, name)
  if (!fs.existsSync(p)) continue
  const docs = JSON.parse(fs.readFileSync(p, 'utf8'))
  for (const doc of docs) {
    for (const b of doc.blocks) {
      if (b._type !== 'textBlock' || typeof b.text !== 'string') continue
      const fixed = decode(b.text)
      if (fixed !== b.text) {
        b.text = fixed
        seedFixed++
      }
    }
  }
  if (WRITE) fs.writeFileSync(p, JSON.stringify(docs, null, 1), 'utf8')
}
console.log(`${seedFixed} blocks in the seed files`)

if (!WRITE) console.log('\n(dry run — pass --write)')

module.exports = { decode }
