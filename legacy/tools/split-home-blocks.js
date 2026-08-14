/* The homepage was one Sanity document holding every block on the page, which
   is correct but leaves an editor scrolling several hundred rows to find a
   sentence. This splits it into one document per section -- "Home — Hero",
   "Home — Active Fundraisers" and so on -- all still pointing at "/", which
   getPageContent merges back together by key.

   Run: node legacy/tools/split-home-blocks.js [--write] */
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', '..')
const WRITE = process.argv.includes('--write')
const FILE = path.join(__dirname, '_home-blocks.json')

const docs = JSON.parse(fs.readFileSync(FILE, 'utf8'))
const home = docs.find((d) => d.path === '/')
if (!home) {
  console.error('no "/" document in _home-blocks.json')
  process.exit(1)
}
if (docs.length > 1) {
  console.log('already split into', docs.length, 'documents — nothing to do')
  process.exit(0)
}

/* the order the sections appear in on the page */
const page = fs.readFileSync(path.join(ROOT, 'app', 'page.tsx'), 'utf8')
const rendered = [...page.matchAll(/<([A-Z][A-Za-z0-9]*)\s/g)].map((m) => m[1])
const slug = (name) => name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
const orderOf = new Map(rendered.map((n, i) => [slug(n), i + 1]))

/* keys look like "active-fundraisers-k12" / "active-fundraisers-i7" */
const groups = new Map()
for (const b of home.blocks) {
  const m = b.key.match(/^(.*)-[ki]\d+$/)
  const prefix = m ? m[1] : 'other'
  if (!groups.has(prefix)) groups.set(prefix, [])
  groups.get(prefix).push(b)
}

const ACRONYM = { csr: 'CSR', faq: 'FAQ', cta: 'CTA' }
const titleOf = (prefix) =>
  'Home — ' +
  prefix
    .split('-')
    .map((w) => ACRONYM[w] || w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

const out = [...groups.entries()]
  .map(([prefix, blocks]) => ({
    _id: 'page-home-' + prefix,
    _type: 'page',
    title: titleOf(prefix),
    path: '/',
    order: orderOf.get(prefix) ?? 99,
    blocks,
  }))
  .sort((a, b) => a.order - b.order)

console.log('splitting', home.blocks.length, 'blocks into', out.length, 'documents:\n')
for (const d of out) {
  console.log('  ' + String(d.order).padStart(2), d.title.padEnd(38), d.blocks.length, 'blocks')
}

const total = out.reduce((n, d) => n + d.blocks.length, 0)
console.log(`\n${total} blocks placed (was ${home.blocks.length})`)
if (total !== home.blocks.length) {
  console.error('block count changed — refusing to write')
  process.exit(1)
}

if (WRITE) {
  fs.writeFileSync(FILE, JSON.stringify(out, null, 1), 'utf8')
  console.log('rewrote _home-blocks.json')
} else {
  console.log('\n(dry run — pass --write)')
}
