'use client'

import { useId, useState } from 'react'

export type FieldError = string | undefined

type Common = {
  label: string
  en?: string
  required?: boolean
  error?: FieldError
  hint?: string
}

function Label({ id, label, en, required }: { id: string } & Omit<Common, 'error' | 'hint'>) {
  return (
    <label htmlFor={id}>
      {label}
      {required ? ' *' : ''}
      {en ? <em>{en}</em> : null}
    </label>
  )
}

export function TextField({
  label, en, required, error, hint, value, onChange, type = 'text', placeholder, id: fixedId,
}: Common & {
  value: string
  onChange: (v: string) => void
  type?: string
  placeholder?: string
  id?: string
}) {
  const auto = useId()
  const id = fixedId ?? auto
  return (
    <div className={'sd-mem-field' + (error ? ' has-error' : '')}>
      <Label id={id} label={label} en={en} required={required} />
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {hint ? <p className="sd-mem-hint deva">{hint}</p> : null}
      <p className="sd-mem-err">{error ?? ''}</p>
    </div>
  )
}

export function SelectField({
  label, en, required, error, value, onChange, options, placeholder,
}: Common & {
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
}) {
  const id = useId()
  return (
    <div className={'sd-mem-field' + (error ? ' has-error' : '')}>
      <Label id={id} label={label} en={en} required={required} />
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <p className="sd-mem-err">{error ?? ''}</p>
    </div>
  )
}

export function TextAreaField({
  label, en, required, error, value, onChange, rows = 4,
}: Common & { value: string; onChange: (v: string) => void; rows?: number }) {
  const id = useId()
  return (
    <div className={'sd-mem-field' + (error ? ' has-error' : '')}>
      <Label id={id} label={label} en={en} required={required} />
      <textarea id={id} rows={rows} value={value} onChange={(e) => onChange(e.target.value)} />
      <p className="sd-mem-err">{error ?? ''}</p>
    </div>
  )
}

/* OTP is a stub until a gateway exists; it says so rather than pretending. */
export function OtpField({
  label, en, required, error, value, onChange, type = 'tel',
}: Common & { value: string; onChange: (v: string) => void; type?: string }) {
  const [sent, setSent] = useState(false)
  const [note, setNote] = useState('')

  const valid =
    type === 'tel' ? /^[0-9+\-\s]{10,15}$/.test(value.trim()) : /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.trim())

  return (
    <div className="sd-fx-otp">
      <TextField
        label={label}
        en={en}
        required={required}
        error={error}
        value={value}
        onChange={onChange}
        type={type}
      />
      <button
        type="button"
        className="sd-fx-otpbtn"
        disabled={sent}
        onClick={() => {
          if (!valid) {
            setNote(type === 'tel' ? 'पहले सही मोबाइल नंबर दर्ज करें' : 'पहले सही ईमेल दर्ज करें')
            return
          }
          setSent(true)
          setNote('OTP सेवा अभी सक्रिय नहीं है — सत्यापन चालू होने पर यहाँ कोड भेजा जाएगा।')
          window.setTimeout(() => setSent(false), 4000)
        }}
      >
        {sent ? 'OTP Sent' : 'Send OTP'}
      </button>
      {note ? <p className="sd-fx-otpnote">{note}</p> : null}
    </div>
  )
}

export function Declaration({
  checked, onChange, children,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  children: React.ReactNode
}) {
  return (
    <label className="sd-mem-check sd-mem-check--decl">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="deva">{children}</span>
    </label>
  )
}

export const DemoNotice = () => (
  <p className="sd-fx-demo deva">
    <strong>सूचना:</strong> यह फ़ॉर्म अभी किसी सर्वर से नहीं जुड़ा है — जमा करने पर संदर्भ संख्या
    दिखाई देगी, किंतु जानकारी अभी संग्रहित नहीं होती। बैकएंड जुड़ते ही यह सक्रिय हो जाएगा।
  </p>
)

/* validation shared by every portal form */
export function checkRequired(
  fields: { key: string; value: string; type?: string; required?: boolean }[]
): Record<string, string> {
  const errors: Record<string, string> = {}
  for (const f of fields) {
    const v = f.value.trim()
    if (f.required && !v) {
      errors[f.key] = 'यह जानकारी आवश्यक है / Required'
      continue
    }
    if (!v) continue
    if (f.type === 'tel' && !/^[0-9+\-\s]{10,15}$/.test(v)) errors[f.key] = 'सही मोबाइल नंबर दर्ज करें'
    if (f.type === 'email' && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v)) errors[f.key] = 'सही ईमेल दर्ज करें'
  }
  return errors
}

export function makeRef(prefix: string) {
  return `${prefix}-${new Date().getFullYear()}-${Math.floor(Math.random() * 90000 + 10000)}`
}
