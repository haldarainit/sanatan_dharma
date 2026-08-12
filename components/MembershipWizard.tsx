'use client'

import { useEffect, useRef, useState } from 'react'
import {
  BASIC, CATEGORIES, NETWORK_RULE, NOTICE, PLEDGE, TIME_OPTIONS,
  type Category,
} from '@/lib/membership'
import { checkRequired } from '@/components/portals/fields'

const STEPS = ['श्रेणी चयन', 'विवरण', 'पंजीकरण', 'भुगतान']
const LEVELS = ['Local', 'District', 'State', 'National'] as const

function money(n: number) {
  return '₹' + n.toLocaleString('en-IN')
}

/* SDMKF-<STATE2>-<6 digits> */
function applicationId(state: string) {
  const code = (state || 'IN').replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase() || 'IN'
  return 'SDMKF-' + code + '-' + String(Math.floor(Math.random() * 900000) + 100000)
}

export default function MembershipWizard() {
  const [step, setStep] = useState(1)
  const [cat, setCat] = useState<Category | null>(null)
  const [level, setLevel] = useState<string>('')
  const [amount, setAmount] = useState<number | null>(null)
  const [values, setValues] = useState<Record<string, string>>({})
  const [interests, setInterests] = useState<string[]>([])
  const [skills, setSkills] = useState<string[]>([])
  const [time, setTime] = useState('')
  const [decl, setDecl] = useState(false)
  const [pledge, setPledge] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formErr, setFormErr] = useState('')
  const [appId, setAppId] = useState('')

  /* the first paint must not drag the visitor past the page intro */
  const mounted = useRef(false)
  const topRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (mounted.current) topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mounted.current = true
  }, [step])

  const set = (k: string) => (v: string) => setValues((p) => ({ ...p, [k]: v }))
  const toggle = (list: string[], setList: (v: string[]) => void, v: string) =>
    setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v])

  return (
    <div className="sd-mem" ref={topRef}>
      <div className="sd-mem-steps">
        {STEPS.map((label, i) => {
          const n = i + 1
          return (
            <div
              key={label}
              className={'sd-mem-step' + (n === step ? ' is-active' : n < step ? ' is-done' : '')}
            >
              <span className="sd-mem-step-dot">{n}</span>
              <span className="sd-mem-step-label deva">
                {n}. {label}
              </span>
            </div>
          )
        })}
      </div>

      {/* ---------- 1. choose a category ---------- */}
      {step === 1 && (
        <div>
          <div className="sd-mem-notice deva">{NOTICE}</div>
          <div className="sd-mem-grid">
            {CATEGORIES.map((c) => (
              <article className="sd-mem-card" key={c.id}>
                <div className="sd-mem-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.hi} />
                </div>
                <span className="sd-mem-badge">{c.badge}</span>
                <h3 className="sd-mem-card-en">{c.en}</h3>
                <p className="sd-mem-card-hi deva">{c.hi}</p>
                <p className="sd-mem-card-text deva">{c.card}</p>
                <button
                  type="button"
                  className="sd-mem-cta sd-mem-cta--wide"
                  onClick={() => {
                    setCat(c)
                    setStep(2)
                  }}
                >
                  View Details
                </button>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* ---------- 2. category detail ---------- */}
      {step === 2 && cat && (
        <div className="sd-mem-panel">
          <span className="sd-mem-badge">{cat.badge}</span>
          <h3 className="sd-mem-title">{cat.en}</h3>
          <p className="sd-mem-sub deva">{cat.hi}</p>

          {cat.about && (
            <>
              <h4 className="sd-mem-h deva">{cat.aboutTitle || 'परिचय'}</h4>
              <p className="sd-mem-p deva">{cat.about}</p>
            </>
          )}

          {cat.roles.length > 0 && (
            <>
              <h4 className="sd-mem-h deva">भूमिका एवं दायित्व</h4>
              <ul className="sd-mem-list deva">
                {cat.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </>
          )}

          {cat.networkRule && <div className="sd-mem-notice deva">{NETWORK_RULE}</div>}

          <div className="sd-mem-actions">
            <button type="button" className="sd-mem-cta sd-mem-back sd-mem-back--btn" onClick={() => setStep(1)}>
              ← श्रेणी बदलें
            </button>
            <button type="button" className="sd-mem-cta sd-mem-cta--wide" onClick={() => setStep(3)}>
              पंजीकरण करें | Register
            </button>
          </div>
        </div>
      )}

      {/* ---------- 3. registration form ---------- */}
      {step === 3 && cat && (
        <div className="sd-mem-panel">
          <h3 className="sd-mem-title deva">{cat.formTitle}</h3>

          <div className="sd-mem-form">
            {BASIC.map((f) => (
              <div className={'sd-mem-field' + (errors[f.id] ? ' has-error' : '')} key={f.id}>
                <label htmlFor={'mem-' + f.id}>
                  {f.label}
                  {f.req ? ' *' : ''}
                  {f.en && <em>{f.en}</em>}
                </label>
                <input
                  id={'mem-' + f.id}
                  type={f.type || 'text'}
                  value={values[f.id] || ''}
                  onChange={(e) => set(f.id)(e.target.value)}
                />
                <p className="sd-mem-err">{errors[f.id] || ''}</p>
              </div>
            ))}
          </div>

          <h4 className="sd-mem-h deva">सेवा रुचि</h4>
          <div className="sd-mem-checks">
            {cat.interests.map((i) => (
              <label key={i} className={'sd-mem-check sd-mem-check--box' + (interests.includes(i) ? ' is-on' : '')}>
                <input
                  type="checkbox"
                  checked={interests.includes(i)}
                  onChange={() => toggle(interests, setInterests, i)}
                />
                <span className="deva">{i}</span>
              </label>
            ))}
          </div>

          <h4 className="sd-mem-h deva">कौशल</h4>
          <div className="sd-mem-checks">
            {cat.skills.map((s) => (
              <label key={s} className={'sd-mem-check sd-mem-check--box' + (skills.includes(s) ? ' is-on' : '')}>
                <input
                  type="checkbox"
                  checked={skills.includes(s)}
                  onChange={() => toggle(skills, setSkills, s)}
                />
                <span className="deva">{s}</span>
              </label>
            ))}
          </div>

          <div className="sd-mem-field">
            <label htmlFor="mem-time">उपलब्ध समय<em>Available Time</em></label>
            <select id="mem-time" value={time} onChange={(e) => setTime(e.target.value)}>
              <option value="">चयन करें</option>
              {TIME_OPTIONS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <h4 className="sd-mem-h deva">सेवा स्तर एवं सहयोग राशि</h4>
          <div className="sd-mem-checks">
            {LEVELS.map((lv) => (
              <div key={lv} className={'' + (level === lv ? ' is-on' : '')}>
                <p className="sd-mem-h">{lv}</p>
                <div className="sd-mem-fees">
                  {cat.fees[lv].map((a) => (
                    <button
                      type="button"
                      key={a}
                      className={'sd-mem-fee' + (level === lv && amount === a ? ' is-on' : '')}
                      onClick={() => {
                        setLevel(lv)
                        setAmount(a)
                      }}
                    >
                      {money(a)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <label className="sd-mem-check sd-mem-check--decl">
            <input type="checkbox" checked={decl} onChange={(e) => setDecl(e.target.checked)} />
            <span className="deva">{cat.declaration}</span>
          </label>

          {cat.pledge && (
            <label className="sd-mem-check sd-mem-check--decl">
              <input type="checkbox" checked={pledge} onChange={(e) => setPledge(e.target.checked)} />
              <span className="deva">{PLEDGE}</span>
            </label>
          )}

          {formErr && <p className="sd-mem-err sd-mem-err--block">{formErr}</p>}

          <div className="sd-mem-actions">
            <button type="button" className="sd-mem-cta sd-mem-back sd-mem-back--btn" onClick={() => setStep(2)}>
              ← पीछे
            </button>
            <button
              type="button"
              className="sd-mem-cta sd-mem-cta--wide"
              onClick={() => {
                const e = checkRequired(
                  BASIC.map((f) => ({
                    key: f.id,
                    value: values[f.id] || '',
                    type: f.type,
                    required: f.req,
                  }))
                )
                setErrors(e)
                if (Object.keys(e).length) {
                  setFormErr('कृपया आवश्यक जानकारी पूरी करें।')
                  return
                }
                if (!amount) {
                  setFormErr('कृपया सेवा स्तर एवं सहयोग राशि चुनें।')
                  return
                }
                if (!decl || (cat.pledge && !pledge)) {
                  setFormErr('कृपया घोषणा स्वीकार करें।')
                  return
                }
                setFormErr('')
                setStep(4)
              }}
            >
              आगे बढ़ें | Continue
            </button>
          </div>
        </div>
      )}

      {/* ---------- 4. payment ---------- */}
      {step === 4 && cat && !appId && (
        <div className="sd-mem-panel">
          <h3 className="sd-mem-title deva">भुगतान | Contribution</h3>
          <ul className="sd-mem-list">
            <li>
              <span>श्रेणी</span>
              <strong>{cat.en}</strong>
            </li>
            <li>
              <span>नाम</span>
              <strong>{values.name}</strong>
            </li>
            <li>
              <span>सेवा स्तर</span>
              <strong>{level}</strong>
            </li>
            <li>
              <span>सहयोग राशि</span>
              <strong>{amount ? money(amount) : '—'}</strong>
            </li>
          </ul>

          <div className="sd-mem-notice deva">
            भुगतान गेटवे अभी सक्रिय नहीं है। नीचे &ldquo;पंजीकरण पूर्ण करें&rdquo; दबाने पर आपका
            आवेदन क्रमांक बन जाएगा, किंतु राशि अभी नहीं ली जाएगी।
          </div>

          <div className="sd-mem-actions">
            <button type="button" className="sd-mem-cta sd-mem-back sd-mem-back--btn" onClick={() => setStep(3)}>
              ← पीछे
            </button>
            <button
              type="button"
              className="sd-mem-cta sd-mem-cta--wide"
              onClick={() => setAppId(applicationId(values.state || ''))}
            >
              पंजीकरण पूर्ण करें
            </button>
          </div>
        </div>
      )}

      {/* ---------- done ---------- */}
      {appId && cat && (
        <div className="sd-mem-panel sd-mem-success">
          <div className="sd-mem-tick">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="sd-mem-title deva">आपका आवेदन दर्ज हो गया</h3>
          <div className="sd-fx-ref">{appId}</div>
          <p className="sd-mem-sub deva">
            कृपया यह आवेदन क्रमांक सुरक्षित रखें। सत्यापन के पश्चात आपसे संपर्क किया जाएगा।
          </p>
        </div>
      )}
    </div>
  )
}
