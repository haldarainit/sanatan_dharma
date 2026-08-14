'use client'

import { useEffect } from 'react'
import { SOURCE_LANG, readLanguage } from '@/lib/languages'

declare global {
  interface Window {
    googleTranslateElementInit?: () => void
    google?: { translate?: { TranslateElement?: new (opts: object, el: string) => void } }
  }
}

/* Loads Google's translator, but only for a visitor who has actually chosen
   another language. On the default Hindi site nothing third-party is fetched
   and nothing touches the DOM, which is both faster and safer -- the
   translator rewrites text nodes underneath React, and that is the one thing
   that can upset it. */
export default function GoogleTranslate() {
  useEffect(() => {
    if (readLanguage(document.cookie) === SOURCE_LANG) return
    if (document.getElementById('google-translate-script')) return

    guardReactAgainstTranslatedNodes()

    window.googleTranslateElementInit = () => {
      const Ctor = window.google?.translate?.TranslateElement
      if (Ctor) new Ctor({ pageLanguage: SOURCE_LANG, autoDisplay: false }, 'google_translate_element')
    }

    const s = document.createElement('script')
    s.id = 'google-translate-script'
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
    s.async = true
    document.body.appendChild(s)
  }, [])

  /* the widget needs a mount point even though our own switcher is the UI */
  return <div id="google_translate_element" aria-hidden="true" />
}

/* React keeps references to the text nodes it rendered. The translator
   replaces them, so a later re-render can ask a parent to remove or insert
   before a node that is no longer its child, and React throws NotFoundError
   and unmounts the page. Making those two calls no-ops instead of errors is
   the established fix; nothing else in the app removes a node it does not
   own. */
function guardReactAgainstTranslatedNodes() {
  if (typeof Node !== 'function' || !Node.prototype) return
  const proto = Node.prototype as Node & { __sdTranslateGuard?: boolean }
  if (proto.__sdTranslateGuard) return
  proto.__sdTranslateGuard = true

  const removeChild = Node.prototype.removeChild
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child
    return removeChild.call(this, child) as T
  }

  const insertBefore = Node.prototype.insertBefore
  Node.prototype.insertBefore = function <T extends Node>(
    this: Node,
    newNode: T,
    referenceNode: Node | null
  ): T {
    if (referenceNode && referenceNode.parentNode !== this) return newNode
    return insertBefore.call(this, newNode, referenceNode) as T
  }
}
