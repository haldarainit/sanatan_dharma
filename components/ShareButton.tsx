'use client'

import { useState } from 'react'

/* The brief puts a Share button on every campaign. Phones get the system
   share sheet; everywhere else the link goes to the clipboard and the button
   says so, which is friendlier than an alert box. */
export default function ShareButton({
  title,
  text,
  className = 'btn-share',
  label = 'Share',
}: {
  title: string
  text?: string
  className?: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)

  async function share() {
    const url = typeof window === 'undefined' ? '' : window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url })
        return
      } catch {
        /* the visitor dismissed the sheet -- fall through to copying */
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked (an insecure origin, usually) -- do nothing loud */
    }
  }

  return (
    <button type="button" className={className} onClick={share}>
      {copied ? 'लिंक कॉपी हुआ' : label}
    </button>
  )
}
