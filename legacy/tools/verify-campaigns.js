/* Every string the brief gives a campaign must appear on that campaign's
   page. Reports anything missing rather than just a pass or fail.

   Run: node legacy/tools/verify-campaigns.js [http://localhost:3100] */
const fs = require('fs')
const path = require('path')

const ROOT = path.join(__dirname, '..', '..')
const BASE = process.argv[2] || 'http://localhost:3100'

const src = fs
  .readFileSync(path.join(ROOT, 'lib', 'campaigns.ts'), 'utf8')
  .replace(/^export type [\s\S]*?^}$/gm, '')
  .replace(/^export /gm, '')
  .replace(/: Campaign\[\]/, '')
  .replace(/^const campaignBySlug[\s\S]*$/m, '')
const CAMPAIGNS = new Function(`${src}; return CAMPAIGNS`)()

const decode = (h) =>
  h
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x2F;/g, '/')

/* every piece of text the brief gives this campaign */
function strings(c) {
  const out = [
    ['title', c.title],
    ['tagline', c.tagline],
    ['lead', c.lead],
  ]
  if (c.sub) out.push(['sub', c.sub])
  c.paras.forEach((p, i) => out.push([`para ${i + 1}`, p]))
  if (c.topicsTitle) out.push(['topicsTitle', c.topicsTitle])
  ;(c.topics || []).forEach((t, i) => {
    out.push([`topic ${i + 1} title`, t.title])
    out.push([`topic ${i + 1} text`, t.text])
  })
  if (c.checklistTitle) out.push(['checklistTitle', c.checklistTitle])
  ;(c.checklist || []).forEach((f, i) => out.push([`checklist ${i + 1}`, f]))
  if (c.categoryTitle) out.push(['categoryTitle', c.categoryTitle])
  ;(c.categories || []).forEach((f, i) => out.push([`category ${i + 1}`, f]))
  if (c.supportTitle) out.push(['supportTitle', c.supportTitle])
  ;(c.support || []).forEach((s, i) => {
    out.push([`support ${i + 1} label`, s.label])
    out.push([`support ${i + 1} text`, s.text])
  })
  ;(c.sections || []).forEach((s, i) => {
    out.push([`section ${i + 1} title`, s.title])
    if (s.quote) out.push([`section ${i + 1} quote`, s.quote])
    ;(s.paras || []).forEach((p, j) => out.push([`section ${i + 1} para ${j + 1}`, p]))
  })
  if (c.closing) out.push(['closing', c.closing])
  c.buttons.forEach((b, i) => out.push([`button ${i + 1}`, b.label]))
  return out
}

async function main() {
  let total = 0
  let found = 0
  const problems = []

  for (const c of CAMPAIGNS) {
    const url = `${BASE}/missions/${c.slug}`
    let html
    try {
      const res = await fetch(url)
      if (!res.ok) {
        console.log(`  ${c.slug.padEnd(24)} HTTP ${res.status}`)
        problems.push(`${c.slug}: HTTP ${res.status}`)
        continue
      }
      html = decode(await res.text())
    } catch (e) {
      problems.push(`${c.slug}: ${e.message}`)
      continue
    }

    const missing = []
    for (const [what, value] of strings(c)) {
      const v = (value || '').trim()
      if (v.length < 2) continue
      total++
      if (html.includes(v)) found++
      else missing.push(`${what}: ${v.slice(0, 50)}`)
    }

    /* the buttons must go somewhere real */
    const badHref = c.buttons
      .filter((b) => !b.share && !html.includes(`href="${b.href}"`))
      .map((b) => b.label)

    console.log(
      `  ${c.slug.padEnd(24)} ${String(strings(c).length - missing.length).padStart(3)}/${String(
        strings(c).length
      ).padEnd(3)} strings` +
        (missing.length || badHref.length ? '   <-- check' : '')
    )
    if (missing.length) problems.push(`${c.slug}:\n      ` + missing.join('\n      '))
    if (badHref.length) problems.push(`${c.slug}: button not linked — ${badHref.join(', ')}`)
  }

  console.log(
    `\nbrief text present on the page: ${found}/${total} (${Math.round((found / total) * 100)}%)`
  )
  if (problems.length) {
    console.log('\nmissing:\n')
    for (const p of problems) console.log('  ' + p)
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
