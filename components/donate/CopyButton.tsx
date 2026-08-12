'use client'

import { useState } from 'react'

/* Bank details copy-to-clipboard, one button per row. */
export default function CopyButton({ value }: { value: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      className={'sd-bank-copy' + (done ? ' is-done' : '')}
      aria-label={`Copy ${value}`}
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
