/* Seeds the Sanity dataset from the content that currently ships in lib/.
   Idempotent: every document has a deterministic _id, so re-running updates
   rather than duplicates. Images in /public are uploaded once and reused.

   Run:  npm run sanity:seed
   Needs SANITY_API_WRITE_TOKEN in .env.local (Editor role). */
import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..')

/* read .env.local without adding a dotenv dependency */
for (const line of fs.readFileSync(path.join(ROOT, '.env.local'), 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/)
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim()
}

const token = process.env.SANITY_API_WRITE_TOKEN
if (!token) {
  console.error(
    '\nSANITY_API_WRITE_TOKEN is empty.\n' +
      'Create one with Editor rights at\n' +
      '  https://sanity.io/manage/project/' +
      process.env.NEXT_PUBLIC_SANITY_PROJECT_ID +
      '/api#tokens\n' +
      'then paste it into .env.local and run this again.\n'
  )
  process.exit(1)
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01',
  token,
  useCdn: false,
})

/* ---------- image upload, cached so a rerun does not re-upload ---------- */
const uploaded = new Map()
async function upload(src) {
  if (!src || !src.startsWith('/')) return null
  if (uploaded.has(src)) return uploaded.get(src)
  const file = path.join(ROOT, 'public', src.replace(/^\//, ''))
  if (!fs.existsSync(file)) {
    console.log('\n   ! missing image, skipped:', src)
    uploaded.set(src, null)
    return null
  }
  const asset = await client.assets.upload('image', fs.createReadStream(file), {
    filename: path.basename(file),
  })
  const ref = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  uploaded.set(src, ref)
  process.stdout.write('.')
  return ref
}

/* ---------- read the data files without a build step ----------
   They are plain literals, but they reference one another: a category's fees
   point at STANDARD_FEES and its notice at NOTICE_A. So every top-level
   declaration is pulled out and evaluated, retrying until the dependencies
   resolve. */
const QUOTES = ['"', "'", '`']

function literalAt(src, start) {
  const open = src[start]

  if (open !== '[' && open !== '{') {
    let quote = null
    for (let i = start; i < src.length; i++) {
      const ch = src[i]
      if (quote) {
        if (ch === '\\') { i++; continue }
        if (ch === quote) quote = null
        continue
      }
      if (QUOTES.includes(ch)) { quote = ch; continue }
      if (ch === '\n') return src.slice(start, i).replace(/;\s*$/, '')
    }
    return src.slice(start).replace(/;\s*$/, '')
  }

  const close = open === '[' ? ']' : '}'
  let depth = 0
  let quote = null
  for (let i = start; i < src.length; i++) {
    const ch = src[i]
    if (quote) {
      if (ch === '\\') { i++; continue }
      if (ch === quote) quote = null
      continue
    }
    if (QUOTES.includes(ch)) { quote = ch; continue }
    if (ch === open) depth++
    else if (ch === close) {
      depth--
      if (depth === 0) return src.slice(start, i + 1)
    }
  }
  throw new Error('unbalanced literal')
}

const scopeCache = new Map()
function moduleScope(file) {
  if (scopeCache.has(file)) return scopeCache.get(file)
  const src = fs.readFileSync(path.join(ROOT, 'lib', file), 'utf8')

  const decls = []
  const re = /^(?:export )?const ([A-Za-z_][A-Za-z0-9_]*)[^=\n]*=/gm
  let m
  while ((m = re.exec(src))) {
    /* the value often starts on the next line, so skip past any whitespace
       rather than assuming it sits right after the equals sign */
    let start = m.index + m[0].length
    while (start < src.length && /\s/.test(src[start])) start++
    try {
      decls.push({ name: m[1], literal: literalAt(src, start) })
    } catch {
      /* unparseable declaration: only the data ones matter */
    }
  }

  const scope = {}
  let remaining = decls
  for (let pass = 0; pass < 8 && remaining.length; pass++) {
    const next = []
    for (const d of remaining) {
      try {
        const names = Object.keys(scope)
        // eslint-disable-next-line no-new-func
        scope[d.name] = Function(...names, 'return (' + d.literal + ')')(
          ...names.map((k) => scope[k])
        )
      } catch {
        next.push(d)
      }
    }
    if (next.length === remaining.length) break
    remaining = next
  }

  scopeCache.set(file, scope)
  return scope
}

function readData(file, exportName) {
  const scope = moduleScope(file)
  if (!(exportName in scope)) throw new Error(exportName + ' not resolved in ' + file)
  return scope[exportName]
}

async function main() {
  console.log(
    'Seeding project',
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    '/',
    process.env.NEXT_PUBLIC_SANITY_DATASET
  )

  const docs = []

  /* ---- site settings ---- */
  const nav = fs.readFileSync(path.join(ROOT, 'lib/nav.ts'), 'utf8')
  const helplines = [...nav.matchAll(/'(\+91[^']+)'/g)].map((x) => x[1])
  const emails = [...nav.matchAll(/'([\w.]+@[\w.]+)'/g)].map((x) => x[1])
  process.stdout.write('site settings ')
  docs.push({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Sanatan Dharm Manav Kalyan Foundation',
    donateLabel: 'Donate Now',
    logo: await upload('/img/logo.jpeg'),
    helplines,
    emails,
    whatsapp: (nav.match(/whatsapp: '(\d+)'/) || [])[1] || '918452003366',
    social: ['Facebook', 'Instagram', 'YouTube', 'Twitter', 'LinkedIn'].map((n) => ({
      _key: n.toLowerCase(),
      network: n,
      url: '',
    })),
  })

  /* ---- hero slides ---- */
  process.stdout.write('\nhero slides ')
  const slides = readData('hero.ts', 'HERO_SLIDES')
  for (const [i, s] of slides.entries()) {
    docs.push({
      _id: `heroSlide-${i + 1}`,
      _type: 'heroSlide',
      order: i + 1,
      image: await upload(s.img),
      imageMobile: s.imgMobile ? await upload(s.imgMobile) : undefined,
      currentSrc: s.img,
      alt: s.alt,
      line1: s.line1 || '',
      line2: s.line2 || '',
      ctaLabel: s.cta ? s.cta.label : '',
      ctaHref: s.cta ? s.cta.href : '',
      noOverlay: !!s.noOverlay,
    })
  }

  /* ---- missions ---- */
  process.stdout.write('\nmissions ')
  const missions = readData('missions.ts', 'FUTURE_MISSIONS')
  for (const [i, m] of missions.entries()) {
    docs.push({
      _id: `mission-${i + 1}`,
      _type: 'mission',
      order: i + 1,
      title: m.title,
      tagline: m.tagline,
      note: m.note || '',
      paras: m.paras,
      image: await upload(m.image),
      currentSrc: m.image,
      href: m.href,
    })
  }

  /* ---- inspiration figures ---- */
  process.stdout.write('\ninspiration figures ')
  const people = readData('people.ts', 'PEOPLE')
  for (const [i, p] of people.entries()) {
    docs.push({
      _id: `person-${i + 1}`,
      _type: 'person',
      order: i + 1,
      title: p.title,
      role: p.role,
      category: p.category,
      image: await upload(p.img),
      currentSrc: p.img,
    })
  }

  /* ---- membership categories ---- */
  process.stdout.write('\nmembership categories ')
  const cats = readData('membership.ts', 'CATEGORIES')
  for (const [i, c] of cats.entries()) {
    docs.push({
      _id: `membership-${c.id}`,
      _type: 'membershipCategory',
      order: i + 1,
      slug: c.id,
      cardTitle: c.cardTitle,
      cardText: c.cardText,
      image: await upload(c.img),
      currentSrc: c.img,
      formTitle: c.formTitle,
      headingEn: c.headingEn,
      headingHi: c.headingHi,
      notice: c.notice,
      aboutTitle: c.aboutTitle || '',
      about: c.about || '',
      roles: c.roles || [],
      interests: c.interests,
      skills: c.skills,
      declaration: c.declaration,
      feeLine: c.feeLine,
      levelNote: c.levelNote,
      idCardNote: c.idCardNote || '',
      pledge: !!c.pledge,
      autoUpdateNote: !!c.autoUpdateNote,
      fees: (c.fees || []).map((f) => ({ _key: f.level, ...f })),
    })
  }

  /* ---- donation amounts ---- */
  const tiers = readData('donation.ts', 'TIERS')
  tiers.forEach((t, i) => {
    docs.push({
      _id: `tier-${t.amount}`,
      _type: 'donationTier',
      order: i + 1,
      amount: t.amount,
      hi: t.hi,
      tag: t.tag || '',
    })
  })

  /* ---- FAQ and status rows ---- */
  const faq = readData('portal-content.ts', 'NEED_HELP_FAQ')
  faq.forEach((f, i) =>
    docs.push({
      _id: `faq-need-help-${i + 1}`,
      _type: 'faqItem',
      order: i + 1,
      page: 'need-help',
      q: f.q,
      a: f.a,
    })
  )
  const nhStatus = readData('portal-content.ts', 'NEED_HELP_STATUS')
  nhStatus.forEach((r, i) =>
    docs.push({
      _id: `status-need-help-${i + 1}`,
      _type: 'statusRow',
      order: i + 1,
      table: 'need-help',
      status: r.status,
      meaning: r.meaning,
    })
  )
  const cmpStatus = readData('portal-content.ts', 'COMPLAINT_STATUS')
  cmpStatus.forEach((r, i) =>
    docs.push({
      _id: `status-complaint-${i + 1}`,
      _type: 'statusRow',
      order: i + 1,
      table: 'complaint',
      status: r.status,
      meaning: r.meaning,
    })
  )

  /* ---- write ---- */
  console.log(`\n\nwriting ${docs.length} documents`)
  let tx = client.transaction()
  for (const d of docs) {
    tx = tx.createOrReplace(JSON.parse(JSON.stringify(d)))
  }
  await tx.commit()

  const counts = {}
  for (const d of docs) counts[d._type] = (counts[d._type] || 0) + 1
  for (const [type, n] of Object.entries(counts)) console.log(`  ${type}: ${n}`)
  console.log('\ndone.')
}

main().catch((e) => {
  console.error('\nseed failed:', e.message)
  process.exit(1)
})
