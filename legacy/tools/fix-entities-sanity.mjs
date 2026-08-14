/* Decodes the HTML entities that were published into Sanity as literal text
   (see fix-entities.js for why they are wrong). Only blocks whose stored text
   still matches the entity-carrying original are touched, so anything the
   client has since rewritten is left alone.

   Run: node legacy/tools/fix-entities-sanity.mjs [--write] */
import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const WRITE = process.argv.includes('--write')

for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-10-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

const NAMED = [
  ['&quot;', '"'], ['&apos;', "'"], ['&nbsp;', ' '],
  ['&lsquo;', '‘'], ['&rsquo;', '’'], ['&ldquo;', '“'], ['&rdquo;', '”'],
  ['&mdash;', '—'], ['&ndash;', '–'], ['&hellip;', '…'],
  ['&lt;', '<'], ['&gt;', '>'],
]

function decode(s) {
  let out = s
  for (const [ent, ch] of NAMED) out = out.split(ent).join(ch)
  out = out.replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
  out = out.replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
  return out.split('&amp;').join('&')
}

const docs = await client.fetch(`*[_type == "page"]{ _id, path, blocks }`)

let changed = 0
let touchedDocs = 0

for (const doc of docs) {
  const patch = {}
  ;(doc.blocks || []).forEach((b, i) => {
    if (b._type !== 'textBlock' || typeof b.text !== 'string') return
    const fixed = decode(b.text)
    if (fixed !== b.text) {
      patch[`blocks[${i}].text`] = fixed
      changed++
    }
  })

  const n = Object.keys(patch).length
  if (!n) continue
  touchedDocs++
  console.log(`  ${doc.path.padEnd(34)} ${String(n).padStart(3)} blocks  (${doc._id})`)
  if (WRITE) await client.patch(doc._id).set(patch).commit()
}

console.log(`\n${changed} blocks across ${touchedDocs} documents`)
if (!WRITE) console.log('\n(dry run — pass --write)')
