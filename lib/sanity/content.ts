import type { Image } from 'sanity'
import { client } from './client'
import { imageUrl } from './image'
import { pageQuery } from './queries'

/* Every read goes through here so a missing dataset, a missing document or a
   network failure degrades to the content already in the codebase rather
   than to an error page. That also means the site keeps working before the
   first edit is ever made in Sanity. */
export async function safeFetch<T>(query: string, params: Record<string, unknown> = {}, fallback: T): Promise<T> {
  try {
    const data = await client.fetch<T>(query, params, {
      next: { revalidate: 60, tags: ['sanity'] },
    })
    return data ?? fallback
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[sanity] falling back to built-in content:', (err as Error).message)
    }
    return fallback
  }
}

type Block = {
  _type: 'textBlock' | 'imageBlock'
  key?: string
  section?: string
  text?: string
  alt?: string
  currentSrc?: string
  image?: Image
}

export type PageContent = {
  /* text for a key, or the built-in string when nothing is set */
  t: (key: string, fallback: string) => string
  /* image url for a key, or the file already in /public */
  img: (key: string, fallbackSrc: string) => string
  alt: (key: string, fallbackAlt: string) => string
  seoTitle?: string
  seoDescription?: string
}

const EMPTY: PageContent = {
  t: (_k, fallback) => fallback,
  img: (_k, fallbackSrc) => fallbackSrc,
  alt: (_k, fallbackAlt) => fallbackAlt,
}

export async function getPageContent(path: string): Promise<PageContent> {
  const doc = await safeFetch<{ blocks?: Block[]; seoTitle?: string; seoDescription?: string } | null>(
    pageQuery,
    { path },
    null
  )
  if (!doc?.blocks?.length) return { ...EMPTY, seoTitle: doc?.seoTitle, seoDescription: doc?.seoDescription }

  const text = new Map<string, string>()
  const images = new Map<string, { url: string | null; alt?: string }>()

  for (const b of doc.blocks) {
    if (!b.key) continue
    if (b._type === 'textBlock') {
      /* an empty string is a deliberate "hide this", but undefined is not */
      if (typeof b.text === 'string' && b.text.trim() !== '') text.set(b.key, b.text)
    } else {
      images.set(b.key, { url: imageUrl(b.image, 1600), alt: b.alt })
    }
  }

  return {
    t: (key, fallback) => text.get(key) ?? fallback,
    img: (key, fallbackSrc) => images.get(key)?.url || fallbackSrc,
    alt: (key, fallbackAlt) => images.get(key)?.alt || fallbackAlt,
    seoTitle: doc.seoTitle,
    seoDescription: doc.seoDescription,
  }
}
