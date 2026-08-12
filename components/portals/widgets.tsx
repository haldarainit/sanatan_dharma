'use client'

import { useState } from 'react'
import type { FaqItem, StatusRow } from '@/lib/portal-content'

/* ---------- FAQ accordion ---------- */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="sd-fx-faq">
      {items.map((item, i) => (
        <div key={i} className={'sd-fx-faq-item' + (open === i ? ' is-open' : '')}>
          <button
            type="button"
            className="sd-fx-faq-q deva"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            {item.q}
          </button>
          <div className="sd-fx-faq-a">
            <div>
              <p className="deva">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ---------- status guide table ---------- */
export function StatusTable({ rows }: { rows: StatusRow[] }) {
  return (
    <div className="sd-fx-tablewrap">
      <table className="sd-fx-status">
        <thead>
          <tr>
            <th>स्थिति</th>
            <th>विवरण</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.status}>
              <td>{r.status}</td>
              <td className="deva">{r.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- request/complaint status lookup ---------- */
export function StatusTracker({
  idLabel, placeholder, action = 'Check Status',
}: {
  idLabel: string
  placeholder: string
  action?: string
}) {
  const [ref, setRef] = useState('')
  const [mobile, setMobile] = useState('')
  const [result, setResult] = useState<{ warn: boolean; text: string; ref?: string } | null>(null)

  return (
    <div className="sd-fx-panel">
      <div className="sd-fx-grid">
        <div className="sd-mem-field">
          <label htmlFor="trk-id">{idLabel}</label>
          <input
            id="trk-id"
            value={ref}
            placeholder={placeholder}
            onChange={(e) => setRef(e.target.value)}
          />
        </div>
        <div className="sd-mem-field">
          <label htmlFor="trk-mobile">Registered Mobile Number / पंजीकृत मोबाइल नंबर</label>
          <input
            id="trk-mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
      </div>

      <div className="sd-fx-actions">
        <button
          type="button"
          className="sd-fx-btn"
          onClick={() => {
            const id = ref.trim()
            const mob = mobile.trim()
            if (!id && !mob) {
              setResult({
                warn: true,
                text: 'कृपया Request/Complaint ID अथवा पंजीकृत मोबाइल नंबर दर्ज करें।',
              })
              return
            }
            setResult({
              warn: false,
              ref: id || mob,
              text:
                ' दर्ज है। स्थिति देखने की सुविधा जुड़ते ही यहाँ लाइव दिखाई देगी। ' +
                'तब तक हेल्पलाइन पर संपर्क करें।',
            })
          }}
        >
          {action}
        </button>
      </div>

      {result && (
        <p className={'sd-fx-trackout' + (result.warn ? ' is-warn' : '')}>
          {result.warn ? (
            result.text
          ) : (
            <>
              <strong>ट्रैकिंग सेवा शीघ्र सक्रिय होगी।</strong>
              <span>
                आपका अनुरोध {result.ref}
                {result.text}
              </span>
            </>
          )}
        </p>
      )}
    </div>
  )
}

/* ---------- submitted confirmation ---------- */
export function SubmittedPanel({
  title, message, reference,
}: {
  title: string
  message: string
  reference: string
}) {
  return (
    <div className="sd-fx-panel sd-fx-done">
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
      <h3 className="sd-mem-title deva">{title}</h3>
      <div className="sd-fx-ref">{reference}</div>
      <p className="sd-mem-sub deva">{message}</p>
    </div>
  )
}

/* ---------- step rail shared by the multi-step portals ---------- */
export function StepRail({ steps, current }: { steps: string[]; current: number }) {
  return (
    <div className="sd-fx-steps">
      {steps.map((label, i) => {
        const n = i + 1
        return (
          <div
            key={label}
            className={
              'sd-fx-step' + (n === current ? ' is-active' : n < current ? ' is-done' : '')
            }
          >
            <span className="sd-fx-step-dot">{n}</span>
            <span className="sd-fx-step-label deva">{label}</span>
          </div>
        )
      })}
    </div>
  )
}
