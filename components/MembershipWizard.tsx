'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BASIC_FIELDS, CATEGORIES, PAYMENT_NOTE, PAYMENT_OPTIONS, PLEDGE,
  SERVICE_LEVELS, TERMS, THANK_YOU, TIME_OPTIONS,
  gendered, inr, memberId, type Category,
} from '@/lib/membership'

type Gender = 'male' | 'female' | ''
type Screen = 'cards' | 'form' | 'service' | 'payment' | 'success'

const OTHER = 'अन्य'

export default function MembershipWizard({ categories = CATEGORIES }: { categories?: Category[] }) {
  const [screen, setScreen] = useState<Screen>('cards')
  const [cat, setCat] = useState<Category | null>(null)
  const [gender, setGender] = useState<Gender>('')
  const [basic, setBasic] = useState<Record<string, string>>({})
  const [interests, setInterests] = useState<string[]>([])
  const [interestOther, setInterestOther] = useState('')
  const [time, setTime] = useState<string[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [skillOther, setSkillOther] = useState('')
  const [declared, setDeclared] = useState(false)

  const [level, setLevel] = useState('')
  const [wantsIdCard, setWantsIdCard] = useState(false)
  const [photo, setPhoto] = useState('')
  const [idProof, setIdProof] = useState('')
  const [reason, setReason] = useState('')
  const [pledged, setPledged] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [err, setErr] = useState('')
  const [appNo, setAppNo] = useState('')

  const topRef = useRef<HTMLDivElement>(null)
  const mounted = useRef(false)
  useEffect(() => {
    if (mounted.current) topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mounted.current = true
  }, [screen])

  const g = (t: string) => gendered(t, gender)
  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v])

  const fee = cat?.fees.find((f) => f.level === level)
  const amount = fee ? (wantsIdCard ? fee.withId : fee.base) : null

  function openCategory(c: Category) {
    setCat(c)
    setGender('')
    setBasic({})
    setInterests([])
    setInterestOther('')
    setTime([])
    setSkills([])
    setSkillOther('')
    setDeclared(false)
    setLevel('')
    setWantsIdCard(false)
    setPhoto('')
    setIdProof('')
    setReason('')
    setPledged(false)
    setAgreed(false)
    setErr('')
    setAppNo('')
    setScreen('form')
  }

  function next() {
    const missing = BASIC_FIELDS.filter(
      (f) => f !== 'ईमेल (वैकल्पिक)' && !(basic[f] || '').trim()
    )
    if (!gender) return setErr('कृपया पुरुष / महिला चुनें।')
    if (missing.length) return setErr('कृपया मूल जानकारी पूरी भरें — ' + missing[0])
    if (!declared) return setErr('कृपया घोषणा स्वीकार करें।')
    setErr('')
    setScreen('service')
  }

  function payNow() {
    if (!level) return setErr('कृपया सेवा स्तर चुनें।')
    if (cat?.pledge && !pledged) return setErr('कृपया संकल्प स्वीकार करें।')
    if (!agreed) return setErr('कृपया Terms & Conditions स्वीकार करें।')
    setErr('')
    setScreen('payment')
  }

  return (
    <div className="sd-jm" ref={topRef}>
      {/* ---------------- category cards ---------------- */}
      {screen === 'cards' && (
        <>
          <div className="sd-jm-grid">
            {categories.map((c, i) => (
              <article className="sd-jm-card" key={c.id}>
                <div className="sd-jm-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.cardTitle} />
                  <span className="sd-jm-num">{i + 1}</span>
                </div>
                <h3 className="sd-jm-card-title">{c.cardTitle}</h3>
                <p className="sd-jm-card-text deva">{c.cardText}</p>
                <button type="button" className="sd-jm-btn" onClick={() => openCategory(c)}>
                  View Details
                </button>
              </article>
            ))}
          </div>
        </>
      )}

      {/* ---------------- step 1: registration form ---------------- */}
      {screen === 'form' && cat && (
        <div className="sd-jm-panel">
          {/* "Category-wise Details" — the brief puts all of this ahead of the
              registration form, and repeats the category name above the form */}
          {cat.about && cat.about.length > 0 && (
            <section className="sd-jm-details">
              <p className="sd-jm-caps">{cat.headingEn}</p>
              <p className="sd-jm-caps-hi deva">{cat.headingHi}</p>

              <h4 className="sd-jm-h">{cat.aboutTitle}</h4>
              {cat.about.map((para) => (
                <p className="sd-jm-p deva" key={para.slice(0, 40)}>
                  {para}
                </p>
              ))}

              {cat.objectives && cat.objectives.length > 0 && (
                <>
                  <p className="sd-jm-sub deva">मुख्य उद्देश्य</p>
                  <ul className="sd-jm-list deva">
                    {cat.objectives.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </>
              )}

              <p className="sd-jm-sub deva">संभावित भूमिका एवं दायित्व</p>
              <ul className="sd-jm-list deva">
                {cat.roles?.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              {cat.sankalpText && (
                <div className="sd-jm-sankalp">
                  <p className="sd-jm-sankalp-h">{cat.sankalpTitle}</p>
                  <p className="sd-jm-sankalp-tag deva">{cat.sankalpTagline}</p>
                  <p className="sd-jm-p deva">{cat.sankalpText}</p>
                </div>
              )}
            </section>
          )}

          <h3 className="sd-jm-formtitle deva">{cat.formTitle}</h3>

          <div className="sd-jm-notice">
            <strong>महत्वपूर्ण सूचना</strong>
            <p className="deva">{cat.notice}</p>
          </div>

          {/* category name in caps; gender sits top-right per the brief */}
          <div className="sd-jm-formtop">
            <div>
              <p className="sd-jm-caps">{cat.headingEn}</p>
              <p className="sd-jm-caps-hi deva">{cat.headingHi}</p>
            </div>
            <div className="sd-jm-gender">
              <label>
                <input
                  type="radio"
                  name="gender"
                  checked={gender === 'male'}
                  onChange={() => setGender('male')}
                />
                <span className="deva">पुरुष (Male)</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  checked={gender === 'female'}
                  onChange={() => setGender('female')}
                />
                <span className="deva">महिला (Female)</span>
              </label>
            </div>
          </div>

          <h4 className="sd-jm-h">Basic Information | मूल जानकारी</h4>
          <div className="sd-jm-fields">
            {BASIC_FIELDS.map((f) => (
              <div className="sd-jm-field" key={f}>
                <label htmlFor={'jm-' + f}>{f}</label>
                <input
                  id={'jm-' + f}
                  type={f === 'जन्मतिथि' ? 'date' : f.includes('ईमेल') ? 'email' : 'text'}
                  value={basic[f] || ''}
                  onChange={(e) => setBasic((p) => ({ ...p, [f]: e.target.value }))}
                />
              </div>
            ))}
          </div>

          <h4 className="sd-jm-h">Service Interest | सेवा रुचि</h4>
          <p className="sd-jm-sub deva">
            आप किस प्रकार की सेवा में सहयोग देना चाहते हैं? (एक या अधिक चुनें)
          </p>
          <div className="sd-jm-checks">
            {cat.interests.map((i) => (
              <label className="sd-jm-check" key={i}>
                <input
                  type="checkbox"
                  checked={interests.includes(i)}
                  onChange={() => toggle(interests, setInterests, i)}
                />
                <span className="deva">{i}</span>
              </label>
            ))}
            <label className="sd-jm-check sd-jm-check--other">
              <input
                type="checkbox"
                checked={interests.includes(OTHER)}
                onChange={() => toggle(interests, setInterests, OTHER)}
              />
              <span className="deva">{OTHER}</span>
              <input
                type="text"
                className="sd-jm-otherinput"
                value={interestOther}
                onChange={(e) => setInterestOther(e.target.value)}
                disabled={!interests.includes(OTHER)}
              />
            </label>
          </div>

          <h4 className="sd-jm-h deva">उपलब्ध समय</h4>
          <div className="sd-jm-checks">
            {TIME_OPTIONS.map((t) => (
              <label className="sd-jm-check" key={t}>
                <input
                  type="checkbox"
                  checked={time.includes(t)}
                  onChange={() => toggle(time, setTime, t)}
                />
                <span className="deva">{t}</span>
              </label>
            ))}
          </div>

          <h4 className="sd-jm-h deva">विशेष कौशल / अनुभव (यदि कोई हो)</h4>
          <div className="sd-jm-checks">
            {cat.skills.map((s) => (
              <label className="sd-jm-check" key={s}>
                <input
                  type="checkbox"
                  checked={skills.includes(s)}
                  onChange={() => toggle(skills, setSkills, s)}
                />
                <span className="deva">{s}</span>
              </label>
            ))}
            <label className="sd-jm-check sd-jm-check--other">
              <input
                type="checkbox"
                checked={skills.includes(OTHER)}
                onChange={() => toggle(skills, setSkills, OTHER)}
              />
              <span className="deva">{OTHER}</span>
              <input
                type="text"
                className="sd-jm-otherinput"
                value={skillOther}
                onChange={(e) => setSkillOther(e.target.value)}
                disabled={!skills.includes(OTHER)}
              />
            </label>
          </div>

          <h4 className="sd-jm-h">Declaration | घोषणा</h4>
          <label className="sd-jm-check sd-jm-check--decl">
            <input
              type="checkbox"
              checked={declared}
              onChange={(e) => setDeclared(e.target.checked)}
            />
            <span className="deva">{g(cat.declaration)}</span>
          </label>

          {err && <p className="sd-jm-err deva">{err}</p>}

          <div className="sd-jm-actions">
            <button type="button" className="sd-jm-back" onClick={() => setScreen('cards')}>
              ← श्रेणी बदलें
            </button>
            <button type="button" className="sd-jm-btn sd-jm-btn--wide" onClick={next}>
              Next | आगे बढ़ें
            </button>
          </div>
        </div>
      )}

      {/* ---------------- step 2: service selection ---------------- */}
      {screen === 'service' && cat && (
        <div className="sd-jm-panel">
          <h3 className="sd-jm-formtitle deva">Step 2 — Service Selection | सेवा चयन</h3>

          <div className="sd-jm-field">
            <label htmlFor="jm-level" className="deva">सेवा स्तर चुनें</label>
            <select id="jm-level" value={level} onChange={(e) => setLevel(e.target.value)}>
              <option value="">— चयन करें —</option>
              {SERVICE_LEVELS.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </select>
          </div>
          {cat.levelNote && <p className="sd-jm-note deva">{cat.levelNote}</p>}

          <h4 className="sd-jm-h deva">पहचान पत्र (ID Card)</h4>
          <label className="sd-jm-check">
            <input
              type="checkbox"
              checked={wantsIdCard}
              onChange={(e) => setWantsIdCard(e.target.checked)}
            />
            <span className="deva">मुझे संगठन का पहचान पत्र (ID Card) चाहिए।</span>
          </label>
          {cat.idCardNote && <p className="sd-jm-note deva">{cat.idCardNote}</p>}

          <div className="sd-jm-fields">
            <div className="sd-jm-field">
              <label htmlFor="jm-photo">Upload Photo</label>
              <input
                id="jm-photo"
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files?.[0]?.name || '')}
              />
              {photo && <p className="sd-jm-note">{photo}</p>}
            </div>
            <div className="sd-jm-field">
              <label htmlFor="jm-idproof">Upload ID Proof</label>
              <input
                id="jm-idproof"
                type="file"
                accept="image/*,.pdf"
                onChange={(e) => setIdProof(e.target.files?.[0]?.name || '')}
              />
              {idProof && <p className="sd-jm-note">{idProof}</p>}
            </div>
          </div>

          <div className="sd-jm-field">
            <label htmlFor="jm-reason">Message / Reason for Joining</label>
            <textarea
              id="jm-reason"
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <h4 className="sd-jm-h">Service Contribution | सेवा सहयोग राशि</h4>
          <p className="sd-jm-amount">{amount === null ? '₹ XXXX' : inr(amount)}</p>

          {/* the brief lists every level and what it costs, so show the whole
              table and mark the one the applicant has selected */}
          <ul className="sd-jm-fees">
            {cat.fees.map((f) => (
              <li
                key={f.level}
                className={'sd-jm-fee' + (f.level === level ? ' is-active' : '')}
              >
                <span className="sd-jm-fee-name">{f.label}</span>
                <span className="sd-jm-fee-amt">
                  {inr(f.base)}
                  <span className="sd-jm-fee-id"> · with ID Card {inr(f.withId)}</span>
                </span>
                {f.minMembers && (
                  <span className="sd-jm-fee-min deva">
                    न्यूनतम सक्रिय सदस्य नेटवर्क: ({f.minMembers} Member)
                  </span>
                )}
              </li>
            ))}
          </ul>

          {cat.autoUpdateNote && (
            <p className="sd-jm-note deva">
              (यह राशि चयनित सेवा स्तर एवं ID Card विकल्प के अनुसार स्वतः बदलती रहेगी।)
            </p>
          )}

          {cat.pledge && (
            <label className="sd-jm-check sd-jm-check--decl">
              <input
                type="checkbox"
                checked={pledged}
                onChange={(e) => setPledged(e.target.checked)}
              />
              <span className="deva">{g(PLEDGE)}</span>
            </label>
          )}

          <label className="sd-jm-check sd-jm-check--decl">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <span>{TERMS}</span>
          </label>

          {err && <p className="sd-jm-err deva">{err}</p>}

          <div className="sd-jm-actions">
            <button type="button" className="sd-jm-back" onClick={() => setScreen('form')}>
              ← पीछे
            </button>
            <button type="button" className="sd-jm-btn sd-jm-btn--wide" onClick={payNow}>
              Pay Now
            </button>
          </div>
        </div>
      )}

      {/* ---------------- payment ---------------- */}
      {screen === 'payment' && cat && (
        <div className="sd-jm-panel">
          <h3 className="sd-jm-formtitle">Payment</h3>
          <p className="sd-jm-amount">{amount === null ? '₹ XXXX' : inr(amount)}</p>

          <div className="sd-jm-pay">
            {PAYMENT_OPTIONS.map((o) => (
              <button
                type="button"
                key={o}
                className="sd-jm-payopt"
                onClick={() => {
                  setAppNo(memberId(basic['राज्य'] || ''))
                  setScreen('success')
                }}
              >
                {o}
              </button>
            ))}
          </div>

          <div className="sd-jm-notice">
            <strong>Payment Note</strong>
            <p className="deva">{PAYMENT_NOTE}</p>
          </div>

          <p className="sd-jm-note deva">
            भुगतान गेटवे अभी जुड़ा नहीं है — कोई राशि नहीं ली जाएगी। ऊपर कोई विकल्प चुनने पर आवेदन
            संख्या बन जाएगी।
          </p>

          <div className="sd-jm-actions">
            <button type="button" className="sd-jm-back" onClick={() => setScreen('service')}>
              ← पीछे
            </button>
          </div>
        </div>
      )}

      {/* ---------------- payment success ---------------- */}
      {screen === 'success' && cat && (
        <div className="sd-jm-panel sd-jm-success">
          <h3 className="sd-jm-formtitle deva">आवेदन सफल हुआ</h3>

          <p className="sd-jm-sub deva">आवेदन संख्या</p>
          <p className="sd-jm-appno">{appNo}</p>

          <div className="sd-jm-actions sd-jm-actions--center">
            <button type="button" className="sd-jm-btn" onClick={() => window.print()}>
              डाउनलोड रसीद
            </button>
          </div>

          <h4 className="sd-jm-h">{THANK_YOU.title}</h4>
          {THANK_YOU.lines.map((l) => (
            <p className="sd-jm-p deva" key={l}>
              {l}
            </p>
          ))}

          <p className="sd-jm-note deva">
            आगे की सूचना SMS / Email / WhatsApp द्वारा भेजी जाएगी।
          </p>

          <div className="sd-jm-actions sd-jm-actions--center">
            <button type="button" className="sd-jm-back" onClick={() => setScreen('cards')}>
              ← Join The Mission
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
