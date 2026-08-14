'use client'

import { useEffect, useRef, useState } from 'react'
import {
  DEFAULT_LANGUAGE, LANGUAGES, SOURCE_LANG, readLanguage,
} from '@/lib/languages'
import { Check, ChevronDown, Globe } from './icons'

/* Writing the cookie is fiddly because Google looks for it on more than one
   scope. Clear every scope first, or an old value on a wider domain keeps
   winning and the language appears not to change. */
function writeCookie(code: string) {
  const host = window.location.hostname
  const parent = '.' + host.split('.').slice(-2).join('.')
  const scopes = ['', `; domain=${host}`, `; domain=.${host}`, `; domain=${parent}`]

  for (const scope of scopes) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/${scope}`
  }
  if (code === SOURCE_LANG) return

  const value = `/${SOURCE_LANG}/${code}`
  for (const scope of scopes) {
    document.cookie = `googtrans=${value}; path=/${scope}`
  }
}

export default function LanguageSwitcher({ inDrawer = false }: { inDrawer?: boolean }) {
  const [open, setOpen] = useState(false)
  const [code, setCode] = useState(SOURCE_LANG)
  const boxRef = useRef<HTMLDivElement>(null)

  /* the choice lives in the cookie, so it is already correct on every page */
  useEffect(() => setCode(readLanguage(document.cookie)), [])

  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  function choose(next: string) {
    setOpen(false)
    if (next === code) return
    writeCookie(next)
    /* a reload is what applies the cookie to every element on the page, and
       it is also how the choice reaches the next page the visitor opens */
    window.location.reload()
  }

  const current = LANGUAGES.find((l) => l.code === code) ?? DEFAULT_LANGUAGE

  return (
    <div className={'relative notranslate' + (inDrawer ? '' : ' hidden sm:block')} ref={boxRef} translate="no">
      <button
        type="button"
        aria-label="Select Language"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((v) => !v)}
        className={
          inDrawer
            ? 'flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-[13.5px] font-semibold text-[#0D1B2A] hover:bg-orange-50 hover:text-[#FF6F00]'
            : 'inline-flex items-center gap-1 text-[11px] font-semibold text-[#0D1B2A]/85 hover:text-[#FF6F00] transition-colors cursor-pointer outline-none whitespace-nowrap bg-transparent border-0 px-1.5 py-2'
        }
      >
        <Globe className="h-3.5 w-3.5 text-[#FF6F00]" />
        <span>{current.name}</span>
        <ChevronDown
          className={
            'h-3 w-3 transition-transform duration-200 ' + (open ? 'rotate-180 text-[#FF6F00]' : '')
          }
        />
      </button>

      {open && (
        <div
          role="listbox"
          className={
            'absolute z-[1000] max-h-[320px] w-[200px] overflow-y-auto rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.12)] ' +
            (inDrawer ? 'left-3 bottom-full mb-1' : 'right-0 top-full mt-1')
          }
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === code}
              onClick={() => choose(l.code)}
              className={
                'flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left text-[13.5px] transition hover:bg-orange-50 hover:text-[#FF6F00] ' +
                (l.code === code ? 'font-bold text-[#FF6F00]' : 'font-medium text-[#0D1B2A]')
              }
            >
              <span>{l.name}</span>
              {l.code === code && <Check className="h-3.5 w-3.5 shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
