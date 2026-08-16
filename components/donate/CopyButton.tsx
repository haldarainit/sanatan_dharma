'use client'

import { useState } from 'react'

/* Bank details copy-to-clipboard, one button per row. */
export default function CopyButton({ value, label }: { value: string; label?: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      className={'sd-bank-copy' + (done ? ' is-done' : '')}
      /* the label names the field, not the digits -- a screen reader
         announcing "Copy 8302858027" reads the account number aloud */
      aria-label={done ? `Copied ${label ?? value}` : `Copy ${label ?? value}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
        } catch {
          /* clipboard blocked (insecure origin or denied permission) --
             fall back to a selection the visitor can copy by hand */
          const ta = document.createElement('textarea')
          ta.value = value
          document.body.appendChild(ta)
          ta.select()
          document.execCommand('copy')
          ta.remove()
        }
        setDone(true)
        window.setTimeout(() => setDone(false), 1600)
      }}
    >
      {done ? 'Copied' : 'Copy'}
    </button>
  )
}
