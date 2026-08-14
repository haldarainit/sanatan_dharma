import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import ShareButton from '@/components/ShareButton'
import { getCampaigns } from '@/lib/sanity/data'
import { CAMPAIGNS } from '@/lib/campaigns'

/* One page per Our Missions card. The order of the blocks follows the
   client's brief: introduction, the campaign's own subject matter, how to
   help, the closing resolve, then the buttons it names. */

export function generateStaticParams() {
  return CAMPAIGNS.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = CAMPAIGNS.find((x) => x.slug === slug)
  if (!c) return {}
  return {
    title: `${c.title} | सनातन धर्म मानव कल्याण फाउंडेशन`,
    description: `${c.tagline} — ${c.lead}`,
  }
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const campaigns = await getCampaigns()
  const c = campaigns.find((x) => x.slug === slug)
  if (!c) notFound()

  return (
    <div className="mission-page">
      <section className="hero-section">
        <div className="hero-inner">
          <div className="breadcrumb">
            <Link href="/">होम</Link>
            <span>›</span>
            <Link href="/#our-missions">हमारे सेवा मिशन</Link>
            <span>›</span>
            <span className="deva">{c.title}</span>
          </div>
          <p className="hero-eyebrow deva">हमारे सेवा मिशन</p>
          <h1 className="hero-title deva">{c.title}</h1>
          <p className="hero-tagline deva">{c.tagline}</p>
        </div>
      </section>

      <div className="content-wrap">
        <Link href="/#our-missions" className="back-btn">
          ← सभी सेवा मिशन देखें
        </Link>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={c.img} alt={c.title} className="campaign-img" />

        <div className="desc-card">
          <div>
            <p className="section-heading deva">अभियान परिचय</p>
            <div className="divider"></div>
          </div>
          <p className="campaign-lead deva">{c.lead}</p>
          {c.sub && <p className="campaign-sub deva">{c.sub}</p>}
          {c.paras.map((p) => (
            <p
              key={p.slice(0, 40)}
              className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify"
            >
              {p}
            </p>
          ))}
        </div>

        {c.topics && c.topics.length > 0 && (
          <div className="desc-card">
            <div>
              <p className="section-heading deva">{c.topicsTitle}</p>
              <div className="divider"></div>
            </div>
            <ol className="topic-list">
              {c.topics.map((t, i) => (
                <li className="topic" key={t.title}>
                  <span className="topic-num">{i + 1}</span>
                  <div>
                    <p className="topic-title">{t.title}</p>
                    <p className="topic-text deva">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}

        {c.checklist && c.checklist.length > 0 && (
          <div className="desc-card">
            <div>
              <p className="section-heading deva">{c.checklistTitle}</p>
              <div className="divider"></div>
            </div>
            <ul className="check-list deva">
              {c.checklist.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            {c.categories && c.categories.length > 0 && (
              <>
                <p className="section-sub deva">{c.categoryTitle}</p>
                <div className="chip-row">
                  {c.categories.map((cat) => (
                    <span className="chip" key={cat}>
                      {cat}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {c.support && c.support.length > 0 && (
          <div className="desc-card">
            <div>
              <p className="section-heading deva">{c.supportTitle}</p>
              <div className="divider"></div>
            </div>
            <ul className="support-list">
              {c.support.map((s) => (
                <li className="support-item" key={s.label}>
                  <span className="support-label">{s.label}</span>
                  <span className="support-text deva">{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {c.sections?.map((s) => (
          <div className="desc-card" key={s.title}>
            <div>
              <p className="section-heading deva">{s.title}</p>
              <div className="divider"></div>
            </div>
            {s.quote && <p className="campaign-quote deva">{s.quote}</p>}
            {s.paras?.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="deva text-slate-700 text-base sm:text-[17px] leading-relaxed text-justify"
              >
                {p}
              </p>
            ))}
          </div>
        ))}

        {c.closing && <div className="sankalp-box deva">{c.closing}</div>}

        <div className="support-card">
          <h2 className="support-title deva">सहयोग एवं सहभागिता माध्यम</h2>
          <div className="action-btns">
            {c.buttons.map((b) =>
              b.share ? (
                <ShareButton key={b.label} title={c.title} text={c.lead} label={b.label} />
              ) : (
                <Link
                  key={b.label}
                  href={b.href || '/'}
                  className={b.label === 'Donate' ? 'btn-donate' : 'btn-join'}
                >
                  {b.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
