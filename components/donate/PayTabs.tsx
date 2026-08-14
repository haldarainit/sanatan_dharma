'use client'

import { useState } from 'react'
import { BankPanel, OtherPanel, QrPanel } from './panels'
import { DEFAULT_UPI, type Upi } from '@/lib/upi'

const TABS = [
  { id: 'qr', label: 'Scan & Pay' },
  { id: 'bank', label: 'Bank Transfer' },
  { id: 'other', label: 'Other Ways' },
] as const

export default function PayTabs({ upi = DEFAULT_UPI }: { upi?: Upi }) {
  const [tab, setTab] = useState<string>('qr')
  return (
    <>
      <div className="sd-pay-tabs" role="tablist">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={tab === t.id}
            className={'sd-pay-tab' + (tab === t.id ? ' is-active' : '')}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="sd-pay-panel is-active">
        {tab === 'qr' && <QrPanel upi={upi} />}
        {tab === 'bank' && <BankPanel upi={upi} />}
        {tab === 'other' && <OtherPanel upi={upi} />}
      </div>
    </>
  )
}
