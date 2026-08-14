import type { Image } from 'sanity'
import { client } from './client'
import { imageUrl } from './image'
import { pageQuery } from './queries'

/* Every read goes through here so a missing dataset, a missing document or a
   network failure degrades to the content already in the codebase rather
   than to an error page. That also means the site keeps working before the
   first edit is ever made in Sanity. */
export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  fallback: T
): Promise<T> {
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

/* Plain objects, not functions: these cross the server/client boundary as
   props, and functions are not serializable. */
export type TextMap = Record<string, string>
export type ImageMap = Record<string, { url: string | null; alt?: string }>

export type PageContent = {
  text: TextMap
  images: ImageMap
  seoTitle?: string
  seoDescription?: string
}

export const EMPTY_CONTENT: PageContent = { text: {}, images: {} }

/* the two lookups every converted page uses */
export function t(map: TextMap | undefined, key: string, fallback: string): string {
  const v = map?.[key]
  return typeof v === 'string' && v.trim() !== '' ? v : fallback
}

export function img(map: ImageMap | undefined, key: string, fallbackSrc: string): string {
  return map?.[key]?.url || fallbackSrc
}

export function alt(map: ImageMap | undefined, key: string, fallbackAlt: string): string {
  return map?.[key]?.alt || fallbackAlt
}

export async function getPageContent(path: string): Promise<PageContent> {
  /* One route can be several documents -- see pageQuery. Keys are unique
     across a route, so merging them is just a matter of order. */
  const docs = await safeFetch<
    {
      blocks?: Block[]
      seoTitle?: string
      seoDescription?: string
    }[]
  >(pageQuery, { path }, [])

  if (!docs.length) return EMPTY_CONTENT

  const text: TextMap = {}
  const images: ImageMap = {}

  for (const doc of docs) {
    for (const b of doc.blocks ?? []) {
      if (!b.key) continue
      if (b._type === 'textBlock') {
        if (typeof b.text === 'string' && b.text.trim() !== '') text[b.key] = b.text
      } else {
        images[b.key] = { url: imageUrl(b.image, 1600), alt: b.alt }
      }
    }
  }

  /* the SEO fields live on whichever document carries them */
  const seoTitle = docs.find((d) => d.seoTitle)?.seoTitle
  const seoDescription = docs.find((d) => d.seoDescription)?.seoDescription

  return { text, images, seoTitle, seoDescription }
}
