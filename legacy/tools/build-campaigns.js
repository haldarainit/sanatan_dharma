/* Builds lib/campaigns.ts from the client's brief
   "सनातन संस्कृति संरक्षण एवं जनजागरण अभियान.docx", which carries all nine
   Our Missions campaigns: a LANDING PAGE blurb for the card and a DETAILS
   PAGE for the page behind it.

   The Hindi is copied out of the document by line rather than retyped, so the
   wording cannot drift. The map below says which line holds what; re-run it
   if the client sends a revised document.

   Run: node legacy/tools/build-campaigns.js [--write] */
const fs = require('fs')
const path = require('path')
const { execFileSync } = require('child_process')

const ROOT = path.join(__dirname, '..', '..')
const WRITE = process.argv.includes('--write')
const DOCX = path.join(ROOT, 'सनातन संस्कृति संरक्षण एवं जनजागरण अभियान.docx')

const raw = execFileSync('node', [path.join(__dirname, 'read-docx.js'), DOCX], {
  encoding: 'utf8',
  maxBuffer: 1 << 24,
})
const L = raw.split('\n')
const line = (n) => (L[n - 1] || '').replace(/^\s*-\s*/, '').trim()

/* "Donate — आपका सहयोग ..." */
function item(n) {
  const s = line(n)
  const i = s.indexOf('—')
  return i === -1
    ? { label: s, text: '' }
    : { label: s.slice(0, i).trim(), text: s.slice(i + 1).trim() }
}

/* "✅ Donate  ✅ Join  ✅ Share" -> the pages those buttons open */
const HREFS = {
  Donate: '/donate',
  Join: '/membership',
  'Join the Mission': '/membership',
  'Need Help': '/need-help',
  'Need Help?': '/need-help',
  Submit: '/raise-complaint',
  'Support This Mission': '/csr-partner',
  'Start Fundraising': '/start-fundraiser',
  Share: null,
}
function buttons(n) {
  return line(n)
    .split('✅')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((label) => {
      if (label === 'Share') return { label, share: true }
      if (!(label in HREFS)) throw new Error('no page mapped for button: ' + label)
      return { label, href: HREFS[label] }
    })
}

/* title, tagline, the landing blurb and every block of the details page */
const MAP = [
  {
    slug: 'sanskriti-jagran',
    img: '/img/yogi-flag.jpg',
    title: 1, heading: 11, tagline: 20, lead: 13, sub: 14, card: 15,
    paras: [21, 22],
    topicsTitle: 23,
    topics: [[24, 25], [26, 27], [28, 29]],
    supportTitle: 30, support: [31, 32, 33],
    sections: [
      { title: 34, paras: [35, 36] },
      { title: 37, quote: 38, paras: [39] },
    ],
    closing: 40, buttons: 42,
  },
  {
    slug: 'mahila-suraksha',
    img: '/img/act-women.jpg',
    title: 2, heading: 44, tagline: 45, lead: 47, card: 48,
    paras: [52, 53, 54],
    supportTitle: 55, support: [56, 57, 58],
    closing: 59, buttons: 62,
  },
  {
    slug: 'anna-seva',
    img: '/img/act-child.jpg',
    title: 3, heading: 82, tagline: 83, lead: 86, card: 87,
    paras: [91, 92, 93],
    supportTitle: 94, support: [95, 96, 97],
    closing: 98, buttons: 101,
  },
  {
    slug: 'shiksha-sanskar',
    img: '/img/campaign-gurukul.jpg',
    title: 4, heading: 116, tagline: 117, lead: 120, card: 121,
    paras: [125, 126, 127],
    buttons: 129,
  },
  {
    slug: 'dhokhadhadi-jagrukta',
    img: '/img/future-help.jpeg',
    title: 5, heading: 152, tagline: 153, lead: 155, card: 156,
    paras: [160, 161, 177],
    /* the brief prints the complaint form here; the working form is
       /raise-complaint, so the page lists what to have ready and sends
       Submit there rather than carrying a second copy of the fields */
    checklistTitle: 162, checklist: [163, 164, 165, 166, 167, 168, 169, 170, 171],
    categoryTitle: 172, categories: 173,
    supportTitle: 178, support: [179, 180, 181],
    closing: 182, buttons: 185,
  },
  {
    slug: 'gau-seva',
    img: '/img/campaign-gaushala.jpg',
    title: 6, heading: 187, tagline: 188, lead: 191, card: 192,
    paras: [196, 197, 198],
    supportTitle: 199, support: [200, 201, 202],
    closing: 203, buttons: 206,
  },
  {
    slug: 'paryavaran-sanrakshan',
    img: '/img/campaign-tree.jpg',
    title: 7, heading: 208, tagline: 209, lead: 212, card: 213,
    paras: [217, 218, 219],
    supportTitle: 220, support: [221, 222, 223],
    closing: 224, buttons: 227,
  },
  {
    slug: 'aapda-rahat',
    img: '/img/campaign-disaster.jpg',
    title: 8, heading: 229, tagline: 230, lead: 233, card: 234,
    paras: [239, 240, 241],
    supportTitle: 242, support: [243, 244, 245],
    closing: 246, buttons: 249,
  },
  {
    slug: 'film-sangeet',
    img: '/img/megaphone.jpeg',
    title: 9, heading: 251, tagline: 252, lead: 254, card: 255,
    paras: [259, 260, 261],
    supportTitle: 262, support: [263, 264, 265],
    closing: 266, buttons: 269,
  },
]

const campaigns = MAP.map((m) => {
  const c = {
    slug: m.slug,
    title: line(m.title),
    heading: line(m.heading),
    tagline: line(m.tagline),
    img: m.img,
    lead: line(m.lead),
    cardText: line(m.card),
    paras: m.paras.map(line),
  }
  if (m.sub) c.sub = line(m.sub)
  if (m.topics) {
    c.topicsTitle = line(m.topicsTitle)
    c.topics = m.topics.map(([t, b]) => ({
      title: line(t).replace(/^\d+\.\s*/, ''),
      text: line(b),
    }))
  }
  if (m.checklist) {
    c.checklistTitle = line(m.checklistTitle)
    c.checklist = m.checklist.map(line)
    c.categoryTitle = line(m.categoryTitle)
    c.categories = line(m.categories).split('☐').map((s) => s.trim()).filter(Boolean)
  }
  if (m.support) {
    c.supportTitle = line(m.supportTitle)
    c.support = m.support.map(item)
  }
  if (m.sections) {
    c.sections = m.sections.map((s) => {
      const out = { title: line(s.title) }
      if (s.quote) out.quote = line(s.quote)
      if (s.paras) out.paras = s.paras.map(line)
      return out
    })
  }
  if (m.closing) c.closing = line(m.closing)
  c.buttons = buttons(m.buttons)
  return c
})

/* --- report --- */
for (const c of campaigns) {
  console.log(`  ${c.slug.padEnd(24)} ${c.title}`)
  console.log(
    `    ${c.paras.length} paras` +
      (c.topics ? `, ${c.topics.length} topics` : '') +
      (c.support ? `, ${c.support.length} support items` : '') +
      (c.sections ? `, ${c.sections.length} sections` : '') +
      (c.checklist ? `, ${c.checklist.length} checklist` : '') +
      `, buttons: ${c.buttons.map((b) => b.label).join(' / ')}`
  )
  const empty = [c.title, c.tagline, c.cardText, ...c.paras].filter((s) => !s || s.length < 3)
  if (empty.length) console.log('    ! empty fields — check the line map')
}

const banner = `/* The nine Our Missions campaigns, transcribed from the client's brief
   "सनातन संस्कृति संरक्षण एवं जनजागरण अभियान.docx".

   Generated by legacy/tools/build-campaigns.js -- edit the document and
   re-run rather than editing this file, so the two cannot drift apart. */

export type CampaignButton = { label: string; href?: string; share?: boolean }
export type CampaignTopic = { title: string; text: string }
export type CampaignSupport = { label: string; text: string }
export type CampaignSection = { title: string; quote?: string; paras?: string[] }

export type Campaign = {
  slug: string
  title: string
  /* the document repeats the name as a section heading, sometimes shortened */
  heading: string
  tagline: string
  img: string
  /* the card on the homepage */
  lead: string
  sub?: string
  cardText: string
  /* the page behind Details */
  paras: string[]
  topicsTitle?: string
  topics?: CampaignTopic[]
  checklistTitle?: string
  checklist?: string[]
  categoryTitle?: string
  categories?: string[]
  supportTitle?: string
  support?: CampaignSupport[]
  sections?: CampaignSection[]
  closing?: string
  buttons: CampaignButton[]
}

export const CAMPAIGNS: Campaign[] = `

const body = JSON.stringify(campaigns, null, 2)
  .replace(/"([a-zA-Z]+)":/g, '$1:')
  .replace(/"/g, "'")

const out = banner + body + '\n\nexport const campaignBySlug = (slug: string) =>\n  CAMPAIGNS.find((c) => c.slug === slug)\n'

if (WRITE) {
  fs.writeFileSync(path.join(ROOT, 'lib', 'campaigns.ts'), out, 'utf8')
  console.log('\nwrote lib/campaigns.ts')
} else {
  console.log('\n(dry run — pass --write)')
}
