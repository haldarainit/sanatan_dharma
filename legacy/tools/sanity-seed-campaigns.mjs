/* Publishes the nine Our Missions campaigns from lib/campaigns.ts.

   Scoped to campaigns only: the general seeder replaces documents of every
   type and would wipe Studio edits to hero slides, donation tiers and site
   settings.

   Run: node legacy/tools/sanity-seed-campaigns.mjs [--write] */
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
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
})

/* read the literal out of the TypeScript source rather than compiling it */
const src = fs
  .readFileSync(path.join(ROOT, 'lib', 'campaigns.ts'), 'utf8')
  .replace(/^export type [\s\S]*?^}$/gm, '')
  .replace(/^export /gm, '')
  .replace(/: Campaign\[\]/, '')
  .replace(/^const campaignBySlug[\s\S]*$/m, '')
const CAMPAIGNS = new Function(`${src}; return CAMPAIGNS`)()

const uploaded = new Map()
async function upload(srcPath) {
  if (!srcPath?.startsWith('/')) return null
  if (uploaded.has(srcPath)) return uploaded.get(srcPath)
  const file = path.join(ROOT, 'public', decodeURIComponent(srcPath.replace(/^\//, '')))
  if (!fs.existsSync(file)) {
    uploaded.set(srcPath, null)
    return null
  }
  try {
    const asset = await client.assets.upload('image', fs.createReadStream(file), {
      filename: path.basename(file),
    })
    const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
    uploaded.set(srcPath, ref)
    return ref
  } catch {
    uploaded.set(srcPath, null)
    return null
  }
}

const keyed = (arr, pick) =>
  (arr || []).map((v, i) => ({ _key: `${pick}${i}`, ...v }))

console.log(`${CAMPAIGNS.length} campaigns from lib/campaigns.ts\n`)

let n = 0
for (const [i, c] of CAMPAIGNS.entries()) {
  const id = `campaign-${c.slug}`
  const existing = await client.fetch('*[_id == $id][0]{ image }', { id })

  const fields = {
    order: i + 1,
    slug: c.slug,
    title: c.title,
    tagline: c.tagline,
    currentSrc: c.img,
    lead: c.lead,
    sub: c.sub || '',
    cardText: c.cardText,
    paras: c.paras,
    topicsTitle: c.topicsTitle || '',
    topics: keyed(c.topics, 'topic'),
    checklistTitle: c.checklistTitle || '',
    checklist: c.checklist || [],
    categoryTitle: c.categoryTitle || '',
    categories: c.categories || [],
    supportTitle: c.supportTitle || '',
    support: keyed(c.support, 'sup'),
    sections: keyed(c.sections, 'sec'),
    closing: c.closing || '',
    buttons: keyed(c.buttons, 'btn'),
  }

  /* keep an image already uploaded in the Studio */
  const image = existing?.image ?? (await upload(c.img))
  if (image) fields.image = image

  console.log(`  ${c.slug.padEnd(24)} ${c.title}`)
  if (WRITE) {
    await client.createOrReplace({ _id: id, _type: 'campaign', ...fields })
    n++
  }
}

console.log(WRITE ? `\npublished ${n} campaigns` : '\n(dry run — pass --write)')
