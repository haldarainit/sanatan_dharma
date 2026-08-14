/* Pushes the five membership categories from lib/membership.ts into Sanity.

   The general seeder replaces whole documents of every type, which would wipe
   edits made in the Studio to hero slides, donation tiers and site settings.
   This touches the membership categories only, and leaves their uploaded
   images alone.

   Run: node legacy/tools/sanity-seed-membership.mjs [--write] */
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
const src = fs.readFileSync(path.join(ROOT, 'lib', 'membership.ts'), 'utf8')
const body = src
  .replace(/^import[^\n]*$/gm, '')
  /* drop the type declarations, which run from "export type X = {" to the
     closing brace in column 0 */
  .replace(/^export type [\s\S]*?^\}$/gm, '')
  .replace(/^export /gm, '')
  .replace(/: FeeRow\[\]/g, '')
  .replace(/: Category\[\]/g, '')
  .replace(/ as const/g, '')
  /* the helpers below the data are typed; the data itself is not */
  .replace(/^function [\s\S]*$/m, '')

const CATEGORIES = new Function(`${body}; return CATEGORIES`)()

console.log(`${CATEGORIES.length} categories from lib/membership.ts\n`)

let changed = 0
for (const [i, c] of CATEGORIES.entries()) {
  const id = `membership-${c.id}`
  const fields = {
    order: i + 1,
    slug: c.id,
    cardTitle: c.cardTitle,
    cardText: c.cardText,
    formTitle: c.formTitle,
    headingEn: c.headingEn,
    headingHi: c.headingHi,
    notice: c.notice,
    aboutTitle: c.aboutTitle || '',
    about: c.about || [],
    objectives: c.objectives || [],
    roles: c.roles || [],
    sankalpTitle: c.sankalpTitle || '',
    sankalpTagline: c.sankalpTagline || '',
    sankalpText: c.sankalpText || '',
    interests: c.interests,
    skills: c.skills,
    declaration: c.declaration,
    levelNote: c.levelNote || '',
    idCardNote: c.idCardNote || '',
    pledge: !!c.pledge,
    autoUpdateNote: !!c.autoUpdateNote,
    fees: (c.fees || []).map((f) => ({ _key: f.level, ...f })),
  }

  const fee = fields.fees.map((f) => `${f.label} ₹${f.base}/₹${f.withId}`).join(', ')
  console.log(`  ${c.id.padEnd(24)} ${fields.objectives.length} objectives, ${fields.roles.length} roles`)
  console.log(`    ${fee}`)

  if (WRITE) {
    /* set(), not createOrReplace(): the uploaded card image stays put */
    await client.patch(id).set(fields).unset(['feeLine']).commit()
    changed++
  }
}

console.log(WRITE ? `\nupdated ${changed} categories` : '\n(dry run — pass --write)')
