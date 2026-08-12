'use client'

import { useState } from 'react'
import { PURPOSES } from '@/lib/donation'
import { checkRequired } from '@/components/portals/fields'

const DOTS = ['आपका विवरण', 'भुगतान विवरण', 'प्रमाण एवं 80G']

/* Offline payers report a transfer here: who they are, which UTR, and the
   screenshot. Nothing is transmitted yet -- the notice says so. */
export default function PaymentConfirmForm() {
  const [step, setStep] = useState(1)
  const [f, setF] = useState({
    name: '', mobile: '', email: '', amount: '',
    purpose: '', utr: '', date: '', message: '',
    pan: '', city: '', state: '',
  })
  const [file, setFile] = useState<string>('')
  const [claim80g, setClaim80g] = useState(false)
  const [news, setNews] = useState(false)
  const [decl, setDecl] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formErr, setFormErr] = useState('')
  const [ref, setRef] = useState('')

  const set = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }))

  if (ref) {
    return (
      <div className="sd-pcf sd-pcf--done">
        <div className="sd-mem-tick">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="sd-mem-title deva">भुगतान की सूचना दर्ज हो गई</h3>
        <div className="sd-fx-ref">{ref}</div>
        <p className="sd-mem-sub deva">
          सत्यापन के पश्चात रसीद{claim80g ? ' एवं 80G प्रमाणपत्र' : ''} आपके संपर्क विवरण पर भेजा जाएगा।
        </p>
      </div>
    )
  }

  function step1() {
    const e = checkRequired([
      { key: 'name', value: f.name, required: true },
      { key: 'mobile', value: f.mobile, type: 'tel', required: true },
      { key: 'email', value: f.email, type: 'email', required: true },
      { key: 'amount', value: f.amount, required: true },
    ])
    setErrors(e)
    if (!Object.keys(e).length) { setFormErr(''); setStep(2) }
  }

  function step2() {
    const e = checkRequired([
      { key: 'purpose', value: f.purpose, required: true },
      { key: 'utr', value: f.utr, required: true },
      { key: 'date', value: f.date, required: true },
    ])
    setErrors(e)
    if (!Object.keys(e).length) { setFormErr(''); setStep(3) }
  }

  function submit() {
    const e = checkRequired(
      claim80g
        ? [
            { key: 'pan', value: f.pan, required: true },
            { key: 'city', value: f.city, required: true },
            { key: 'state', value: f.state, required: true },
          ]
        : []
    )
    setErrors(e)
    if (Object.keys(e).length) { setFormErr('कृपया 80G हेतु आवश्यक जानकारी भरें।'); return }
    if (!decl) { setFormErr('कृपया घोषणा स्वीकार करें।'); return }
    setFormErr('')
    setRef('SDMKF-PC-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 90000 + 10000))
  }

  return (
    <div className="sd-donate-confirm sd-pcf">
      <div className="sd-pcf-dots">
        {DOTS.map((label, i) => {
          const n = i + 1
          return (
            <div key={label} className={'sd-pcf-dot' + (n === step ? ' is-active' : n < step ? ' is-done' : '')}>
              <span className="sd-pcf-dot-num">{n}</span>
              <span className="deva">{label}</span>
            </div>
          )
        })}
      </div>

      {step === 1 && (
        <div className="sd-pcf-pane is-active">
          <div className="sd-pcf-grid">
            <F id="pcf-name" label="Full Name" required value={f.name} onChange={set('name')} error={errors.name} />
            <F id="pcf-mobile" label="Mobile Number" type="tel" required value={f.mobile} onChange={set('mobile')} error={errors.mobile} />
            <F id="pcf-email" label="Email ID" type="email" required value={f.email} onChange={set('email')} error={errors.email} />
            <F id="pcf-amount" label="Donation Amount" type="number" required value={f.amount} onChange={set('amount')} error={errors.amount} />
          </div>
          <div className="sd-pcf-actions">
            <button type="button" className="sd-pcf-btn" onClick={step1}>Continue</button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="sd-pcf-pane is-active">
          <div className="sd-pcf-grid">
            <div className="sd-pcf-field">
              <label htmlFor="pcf-purpose">Donation For *</label>
              <select id="pcf-purpose" value={f.purpose} onChange={(e) => set('purpose')(e.target.value)}>
                <option value="">Select</option>
                {PURPOSES.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
              {errors.purpose && <p className="sd-pcf-err">{errors.purpose}</p>}
            </div>
            <F id="pcf-utr" label="Transaction / UTR Number" required value={f.utr} onChange={set('utr')} error={errors.utr} />
            <F id="pcf-date" label="Payment Date" type="date" required value={f.date} onChange={set('date')} error={errors.date} />
          </div>
          <div className="sd-pcf-field">
            <label htmlFor="pcf-message">Message</label>
            <textarea id="pcf-message" rows={3} value={f.message} onChange={(e) => set('message')(e.target.value)} />
          </div>
          <div className="sd-pcf-actions">
            <button type="button" className="sd-pcf-btn sd-pcf-btn--ghost" onClick={() => setStep(1)}>← Back</button>
            <button type="button" className="sd-pcf-btn" onClick={step2}>Continue</button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="sd-pcf-pane is-active">
          <div className="sd-pcf-field">
            <label htmlFor="pcf-file">Upload Payment Screenshot</label>
            <input
              id="pcf-file"
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => setFile(e.target.files?.[0]?.name || '')}
            />
            <p className="sd-pcf-hint">{file || 'Click to upload screenshot (PNG / JPG / PDF)'}</p>
          </div>

          <label className="sd-pcf-check">
            <input type="checkbox" checked={claim80g} onChange={(e) => setClaim80g(e.target.checked)} />
            <span>I Want To Claim 80G Tax Benefit</span>
          </label>

          {claim80g && (
            <div className="sd-pcf-grid">
              <F id="pcf-pan" label="PAN Card Number" required value={f.pan} onChange={set('pan')} error={errors.pan} />
              <F id="pcf-city" label="City" required value={f.city} onChange={set('city')} error={errors.city} />
              <F id="pcf-state" label="State" required value={f.state} onChange={set('state')} error={errors.state} />
            </div>
          )}

          <label className="sd-pcf-check">
            <input type="checkbox" checked={news} onChange={(e) => setNews(e.target.checked)} />
            <span>I Agree To Receive Updates &amp; Newsletter</span>
          </label>
          <label className="sd-pcf-check">
            <input type="checkbox" checked={decl} onChange={(e) => setDecl(e.target.checked)} />
            <span className="deva">
              Declaration: मैं घोषणा करता/करती हूँ कि उपरोक्त जानकारी सत्य एवं सही है।
            </span>
          </label>

          {formErr && <p className="sd-pcf-err sd-pcf-err--block">{formErr}</p>}

          <div className="sd-pcf-actions">
            <button type="button" className="sd-pcf-btn sd-pcf-btn--ghost" onClick={() => setStep(2)}>← Back</button>
            <button type="button" className="sd-pcf-btn" onClick={submit}>Submit</button>
          </div>
        </div>
      )}

      <p className="sd-fx-demo deva">
        <strong>सूचना:</strong> यह फ़ॉर्म अभी किसी सर्वर से नहीं जुड़ा है — जमा करने पर संदर्भ संख्या
        दिखाई देगी, किंतु जानकारी अभी संग्रहित नहीं होती।
      </p>
    </div>
  )
}

function F({
  id, label, type = 'text', required, value, onChange, error,
}: {
  id: string
  label: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  error?: string
}) {
  return (
    <div className="sd-pcf-field">
      <label htmlFor={id}>
        {label}
        {required ? ' *' : ''}
      </label>
      <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
      {error && <p className="sd-pcf-err">{error}</p>}
    </div>
  )
}
