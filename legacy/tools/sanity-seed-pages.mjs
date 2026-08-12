/* Publishes the page documents produced by cms-extract.js.
   Run: node legacy/tools/sanity-seed-pages.mjs */
import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const docs = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'legacy/tools/_page-blocks.json'), 'utf8')
)

/* upload the images each page already ships so an editor can see and swap
   them, rather than facing an empty picker */
const uploaded = new Map()
async function upload(src) {
  if (!src || uploaded.has(src)) return uploaded.get(src) || null
  const file = path.join(ROOT, 'public', src.replace(/^\//, ''))
  if (!fs.existsSync(file)) {
    uploaded.set(src, null)
    return null
  }
  try {
    const asset = await client.assets.upload('image', fs.createReadStream(file), {
      filename: path.basename(file),
    })
    const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
    uploaded.set(src, ref)
    process.stdout.write('.')
    return ref
  } catch (err) {
    /* not every file the markup points at is a real image; the block still
       renders from currentSrc, so skip rather than abort the whole seed */
    console.log('\n   ! skipped ' + src + ' — ' + err.message)
    uploaded.set(src, null)
    return null
  }
}

let text = 0
let images = 0
for (const doc of docs) {
  for (const b of doc.blocks) {
    if (b._type === 'imageBlock') {
      b.image = await upload(b.currentSrc)
      images++
    } else text++
  }
}

console.log(`\n\nwriting ${docs.length} pages — ${text} text blocks, ${images} images`)
/* one page per commit: 1,000+ blocks in a single transaction is large
   enough for the API to return a gateway error */
for (const d of docs) {
  await client.createOrReplace(JSON.parse(JSON.stringify(d)))
  process.stdout.write('.')
}
console.log('')
console.log('done — open https://sanatan-dharma.sanity.studio/ and pick Pages')
