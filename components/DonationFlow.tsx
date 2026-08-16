'use client'

import { useRef, useState } from 'react'
import { FREQUENCIES, PURPOSES, TIERS, inr, type Tier } from '@/lib/donation'
import { checkRequired } from '@/components/portals/fields'
import { GatewayOffError, startCheckout } from '@/lib/razorpay-checkout'

const DOTS = ['आपका विवरण', 'भुगतान विवरण', 'प्रमाण एवं 80G']

const ON =
  'bg-[#FF6F00] text-white border-[#FF6F00] shadow-[0_6px_18px_-6px_rgba(255,111,0,0.55)]'
const OFF = 'bg-white border-[#0D1B2A]/10 text-[#0D1B2A] hover:border-[#FF6F00]/40'

export default function DonationFlow({ tiers = TIERS }: { tiers?: Tier[] }) {
  const [step, setStep] = useState(1)
  const [amount, setAmount] = useState(501)
  const [freq, setFreq] = useState<string>('Monthly')
  const [custom, setCustom] = useState(false)
  const [customAmt, setCustomAmt] = useState('')
  const [customErr, setCustomErr] = useState('')
  const [f, setF] = useState({
    name: '', mobile: '', email: '', city: '', state: '', purpose: '', message: '', pan: '',
  })
  const [claim80g, setClaim80g] = useState(false)
  const [decl, setDecl] = useState(false)
  const [news, setNews] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formErr, setFormErr] = useState('')
  const [receipt, setReceipt] = useState('')
  const [paying, setPaying] = useState(false)
  const [payErr, setPayErr] = useState('')
  /* true once the gateway has told us it is switched off, so the panel can
     stop offering a button that cannot work and point at the QR instead */
  const [gatewayOff, setGatewayOff] = useState(false)
  const startedAt = useRef(Date.now())

  const set = (k: keyof typeof f) => (v: string) => setF((p) => ({ ...p, [k]: v }))

  async function payNow() {
    if (paying) return
    setPaying(true)
    setPayErr('')
    try {
      const result = await startCheckout({
        purpose: 'donation',
        name: f.name,
        mobile: f.mobile,
        email: f.email || undefined,
        amount,
        frequency: freq,
        cause: f.purpose,
        message: f.message || undefined,
        claim80g,
        pan: claim80g ? f.pan : undefined,
        city: f.city || undefined,
        state: f.state || undefined,
        startedAt: startedAt.current,
      })
      if (result.outcome === 'processing') setReceipt(result.reference)
      /* dismissed: the donor closed the window. Say nothing and leave the
         review step as it was, so they can simply press Pay Now again. */
    } catch (err) {
      if (err instanceof GatewayOffError) setGatewayOff(true)
      setPayErr((err as Error).message)
    } finally {
      setPaying(false)
    }
  }

  function proceed() {
    if (custom) {
      const n = Number(customAmt)
      if (!n || n < 1) {
        setCustomErr('कृपया ₹1 या अधिक राशि दर्ज करें।')
        return
      }
      setAmount(n)
      setCustomErr('')
    }
    setStep(2)
  }

  function toPayment() {
    const e = checkRequired([
      { key: 'name', value: f.name, required: true },
      { key: 'mobile', value: f.mobile, type: 'tel', required: true },
      { key: 'email', value: f.email, type: 'email' },
      { key: 'purpose', value: f.purpose, required: true },
      { key: 'pan', value: claim80g ? f.pan : '', required: claim80g },
    ])
    setErrors(e)
    if (Object.keys(e).length) {
      setFormErr('कृपया आवश्यक जानकारी पूरी करें।')
      return
    }
    if (!decl) {
      setFormErr('कृपया घोषणा स्वीकार करें।')
      return
    }
    setFormErr('')
    setStep(3)
  }

  return (
    <div className="sd-dn">
      {/* step rail */}
      <div className="sd-dn-dots">
        {DOTS.map((label, i) => {
          const n = i + 1
          return (
            <div
              key={label}
              className={'sd-dn-dot' + (n === step ? ' is-active' : n < step ? ' is-done' : '')}
            >
              <span className="sd-dn-dot-num">{n}</span>
              <span className="deva">{label}</span>
            </div>
          )
        })}
      </div>

      {/* ---------- 1. amount ---------- */}
      {step === 1 && (
        <div className="space-y-5 sd-dn-step">
          <div className="flex flex-wrap gap-2">
            {FREQUENCIES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setFreq(t)}
                className={
                  'px-4 py-2 rounded-full text-[12.5px] font-semibold border transition-all ' +
                  (freq === t ? ON : 'bg-white text-[#0D1B2A] border-[#0D1B2A]/10')
                }
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {tiers.map((t) => {
              const on = !custom && amount === t.amount
              return (
                <button
                  key={t.amount}
                  type="button"
                  onClick={() => {
                    setCustom(false)
                    setCustomErr('')
                    setAmount(t.amount)
                  }}
                  className={'relative rounded-xl border px-2 py-3 text-center transition-all ' + (on ? ON : OFF)}
                >
                  {t.tag && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0D1B2A] px-2 py-0.5 text-[9px] font-bold text-white">
                      {t.tag}
                    </span>
                  )}
                  <div className="font-bold">{inr(t.amount)}</div>
                  <div
                    className={
                      'text-[10px] mt-0.5 leading-tight deva ' +
                      (on ? 'text-white/90' : 'text-[#0D1B2A]/60')
                    }
                  >
                    {t.hi}
                  </div>
                </button>
              )
            })}
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                setCustom(true)
                setCustomErr('')
              }}
              className={
                'px-4 py-2 rounded-full text-[12.5px] font-semibold border transition-all ' +
                (custom ? ON : 'bg-white text-[#0D1B2A] border-[#0D1B2A]/10')
              }
            >
              Custom
            </button>

            {custom && (
              <div className="mt-3">
                <label htmlFor="dn-custom" className="block text-xs font-semibold mb-1">
                  अपनी राशि दर्ज करें <em className="not-italic text-[#0D1B2A]/50">Enter your amount</em>
                </label>
                <input
                  id="dn-custom"
                  type="number"
                  min={1}
                  value={customAmt}
                  onChange={(e) => setCustomAmt(e.target.value)}
                  className="w-full max-w-xs h-11 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-[#FF6F00]"
                />
                {customErr && <p className="mt-1 text-xs font-semibold text-red-600 deva">{customErr}</p>}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 pt-2">
            <p className="text-sm">
              चयनित राशि: <strong className="text-[#FF6F00]">{custom ? (customAmt ? inr(Number(customAmt)) : '—') : inr(amount)}</strong>
              <span className="text-[#0D1B2A]/50"> / {freq}</span>
            </p>
            <button type="button" onClick={proceed} className="sd-btn sd-btn--next rounded-full px-7 py-3 text-sm font-bold text-white">
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* ---------- 2. donor details ---------- */}
      {step === 2 && (
        <div className="sd-dn-step space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-orange-50 px-4 py-3">
            <span className="text-sm font-semibold">
              {inr(amount)} <span className="text-[#0D1B2A]/60">/ {freq}</span>
            </span>
            <button type="button" className="text-xs font-bold text-[#FF6F00] underline" onClick={() => setStep(1)}>
              Change
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field id="dn-name" label="पूरा नाम" en="Full Name" required value={f.name} onChange={set('name')} error={errors.name} />
            <Field id="dn-mobile" label="मोबाइल नंबर" en="Mobile Number" type="tel" required value={f.mobile} onChange={set('mobile')} error={errors.mobile} />
            <Field id="dn-email" label="ईमेल" en="Email" type="email" value={f.email} onChange={set('email')} error={errors.email} />
            <Field id="dn-city" label="शहर" en="City" value={f.city} onChange={set('city')} />
            <Field id="dn-state" label="राज्य" en="State" value={f.state} onChange={set('state')} />
            <div>
              <label htmlFor="dn-purpose" className="block text-xs font-semibold mb-1 deva">
                दान का उद्देश्य *<em className="not-italic text-[#0D1B2A]/50"> Purpose</em>
              </label>
              <select
                id="dn-purpose"
                value={f.purpose}
                onChange={(e) => set('purpose')(e.target.value)}
                className="w-full h-11 rounded-xl border border-slate-300 px-3 text-sm outline-none focus:border-[#FF6F00]"
              >
                <option value="">चयन करें</option>
                {PURPOSES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
              {errors.purpose && <p className="mt-1 text-xs font-semibold text-red-600">{errors.purpose}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="dn-message" className="block text-xs font-semibold mb-1 deva">संदेश (वैकल्पिक)</label>
            <textarea
              id="dn-message"
              rows={3}
              value={f.message}
              onChange={(e) => set('message')(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3 text-sm outline-none focus:border-[#FF6F00]"
            />
          </div>

          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" checked={claim80g} onChange={(e) => setClaim80g(e.target.checked)} className="mt-1" />
            <span className="deva">मैं 80G कर छूट प्रमाणपत्र चाहता / चाहती हूँ</span>
          </label>

          {claim80g && (
            <Field id="dn-pan" label="PAN नंबर" en="PAN Number" required value={f.pan} onChange={set('pan')} error={errors.pan} />
          )}

          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" checked={decl} onChange={(e) => setDecl(e.target.checked)} className="mt-1" />
            <span className="deva">मैं पुष्टि करता / करती हूँ कि दी गई जानकारी सत्य है।</span>
          </label>
          <label className="flex items-start gap-2 text-sm">
            <input type="checkbox" checked={news} onChange={(e) => setNews(e.target.checked)} className="mt-1" />
            <span className="deva">मुझे संस्था की गतिविधियों की जानकारी भेजें।</span>
          </label>

          {formErr && <p className="text-sm font-semibold text-red-600 deva">{formErr}</p>}

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setStep(1)} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold">
              ← Back
            </button>
            <button type="button" onClick={toPayment} className="sd-btn sd-btn--donate-now flex-1 rounded-full px-7 py-3 text-sm font-bold text-white">
              Donate {inr(amount)}
            </button>
          </div>
        </div>
      )}

      {/* ---------- 3. payment ---------- */}
      {step === 3 && !receipt && (
        <div className="sd-dn-step space-y-4">
          <ul className="divide-y rounded-xl border border-slate-200">
            <Row k="नाम" v={f.name} />
            <Row k="राशि" v={`${inr(amount)} / ${freq}`} />
            <Row k="उद्देश्य" v={f.purpose} />
            {claim80g && <Row k="80G / PAN" v={f.pan} />}
          </ul>

          {freq !== 'One Time' && (
            /* Auto-debit is a separate Razorpay product and is not wired.
               Saying "Monthly" while taking a single payment would be a
               promise the system cannot keep, so it is spelled out here. */
            <div className="rounded-xl border-l-4 border-[#FF6F00] bg-orange-50 p-4 text-[13px] leading-relaxed deva">
              <strong>सूचना:</strong> यह {freq} संकल्प है। अभी केवल एक बार{' '}
              {inr(amount)} का भुगतान लिया जाएगा — राशि स्वतः नहीं कटेगी। अगली बार हम आपको
              स्मरण पत्र भेजेंगे।
            </div>
          )}

          {gatewayOff && (
            <div className="rounded-xl border-l-4 border-[#FF6F00] bg-orange-50 p-4 text-[13px] leading-relaxed deva">
              <strong>सूचना:</strong> कार्ड भुगतान अभी उपलब्ध नहीं है। कृपया ऊपर दिए गए UPI /
              QR Code अथवा बैंक ट्रांसफर विकल्प का उपयोग करें।
            </div>
          )}

          {payErr && !gatewayOff && (
            <p className="text-sm font-semibold text-red-600 deva" role="alert">
              {payErr}
            </p>
          )}

          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => setStep(2)} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold">
              ← Back
            </button>
            <button
              type="button"
              onClick={payNow}
              disabled={paying || gatewayOff}
              aria-busy={paying}
              className="sd-btn sd-btn--donate-now flex-1 rounded-full px-7 py-3 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {paying ? 'कृपया प्रतीक्षा करें…' : `Pay ${inr(amount)}`}
            </button>
          </div>
        </div>
      )}

      {/* ---------- 4. receipt ---------- */}
      {receipt && (
        <div className="sd-dn-step text-center space-y-3 py-6">
          <div className="sd-mem-tick mx-auto">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold deva">हार्दिक धन्यवाद 🙏</h3>
          <div className="sd-fx-ref">{receipt}</div>
          <p className="text-sm text-[#0D1B2A]/70 deva">
            {f.name} — {inr(amount)} / {freq}
          </p>
          {/* Careful wording: the money is confirmed by the gateway server-to-
              server, and the 80G receipt is issued by the office afterwards.
              Promising an instant receipt here would be a promise this system
              deliberately does not keep. */}
          <p className="text-xs text-[#0D1B2A]/60 deva">
            आपका भुगतान प्राप्त हो गया है और पुष्टि की जा रही है। सत्यापन के पश्चात{' '}
            {claim80g ? '80G रसीद' : 'रसीद'} आपके ईमेल पर भेज दी जाएगी।
          </p>
          <p className="text-xs text-[#0D1B2A]/50 deva">
            कृपया यह संदर्भ संख्या सुरक्षित रखें।
          </p>
        </div>
      )}
    </div>
  )
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <li className="flex items-center justify-between px-4 py-3 text-sm">
      <span className="text-[#0D1B2A]/60 deva">{k}</span>
      <strong className="text-right">{v || '—'}</strong>
    </li>
  )
}

function Field({
  id, label, en, type = 'text', required, value, onChange, error,
}: {
  id: string
  label: string
  en?: string
  type?: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  error?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold mb-1 deva">
        {label}
        {required ? ' *' : ''}
        {en && <em className="not-italic text-[#0D1B2A]/50"> {en}</em>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-[#FF6F00]"
      />
      {error && <p className="mt-1 text-xs font-semibold text-red-600">{error}</p>}
    </div>
  )
}
