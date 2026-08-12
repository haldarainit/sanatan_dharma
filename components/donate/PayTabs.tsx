'use client'

import { useState } from 'react'
import { BankPanel, OtherPanel, QrPanel } from './panels'

const TABS = [
  { id: 'qr', label: 'Scan & Pay' },
  { id: 'bank', label: 'Bank Transfer' },
  { id: 'other', label: 'Other Ways' },
] as const

export default function PayTabs() {
  const [tab, setTab] = useState<string>('qr')
  return (
    <div className="sd-pay">
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
        {tab === 'qr' && <QrPanel />}
        {tab === 'bank' && <BankPanel />}
        {tab === 'other' && <OtherPanel />}
      </div>
    </div>
  )
}
