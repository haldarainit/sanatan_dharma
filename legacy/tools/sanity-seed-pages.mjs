/* Publishes the per-page text and image blocks produced by
   cms-extract.js and cms-extract-home.js into Sanity.

   Existing edits are preserved: a block already carrying text in Sanity keeps
   it, so re-running after a content change never overwrites the client's
   work. New blocks are added, and blocks whose code fallback has changed are
   left alone unless they were never edited.

   Run:  npm run sanity:seed:pages
   Needs SANITY_API_WRITE_TOKEN in .env.local (Editor role). */
import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) {
  console.error('\nSANITY_API_WRITE_TOKEN is empty — see .env.example.\n')
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
  token,
  useCdn: false,
})

function load(name) {
  const p = path.join(ROOT, 'legacy', 'tools', name)
  if (!fs.existsSync(p)) {
    console.log('  (skipping, not generated yet:', name + ')')
    return []
  }
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

const docs = [...load('_page-blocks.json'), ...load('_home-blocks.json')]
if (!docs.length) {
  console.error('Nothing to publish. Run the extractors with --write first.')
  process.exit(1)
}

/* upload each distinct image once and reuse the asset */
const uploaded = new Map()
const rejected = []
async function upload(src) {
  if (!src || !src.startsWith('/')) return null
  if (uploaded.has(src)) return uploaded.get(src)
  const file = path.join(ROOT, 'public', decodeURIComponent(src.replace(/^\//, '')))
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
    /* A file Sanity cannot decode must not abort the whole publish -- the
       block still renders the file from /public, it just cannot be swapped
       in the Studio until a usable image is uploaded there. */
    rejected.push(`${src} (${(err.message || '').split('(')[0].trim()})`)
    uploaded.set(src, null)
    process.stdout.write('x')
    return null
  }
}


async function main() {
  console.log(
    'Publishing page content to',
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    '/',
    process.env.NEXT_PUBLIC_SANITY_DATASET,
    '\n'
  )

  let added = 0
  let kept = 0

  for (const doc of docs) {
    const existing = await client.fetch('*[_id == $id][0]{ blocks }', { id: doc._id })
    const previous = new Map((existing?.blocks || []).map((b) => [b.key, b]))

    const blocks = []
    for (const b of doc.blocks) {
      const old = previous.get(b.key)

      if (b._type === 'imageBlock') {
        /* keep an uploaded image; otherwise seed the file the site ships */
        const image = old?.image ?? (await upload(b.currentSrc))
        blocks.push({
          _type: 'imageBlock',
          _key: b._key,
          key: b.key,
          section: b.section,
          currentSrc: b.currentSrc,
          alt: old?.alt ?? b.alt ?? '',
          ...(image ? { image } : {}),
        })
      } else {
        /* never clobber text the client has already edited */
        const text = typeof old?.text === 'string' && old.text.trim() !== '' ? old.text : b.text
        if (old) kept++
        else added++
        blocks.push({
          _type: 'textBlock',
          _key: b._key,
          key: b.key,
          section: b.section,
          text,
        })
      }
    }

    await client.createOrReplace({
      _id: doc._id,
      _type: 'page',
      title: doc.title,
      path: doc.path,
      blocks,
    })
    console.log(`  ${doc.path.padEnd(42)} ${blocks.length} blocks`)
  }

  console.log(`\n${docs.length} pages published — ${added} new blocks, ${kept} existing kept.`)
}

main().catch((e) => {
  console.error('\nfailed:', e.message)
  process.exit(1)
})
