import imageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from '@/sanity/env'

const builder = imageUrlBuilder({ projectId, dataset })

/* Returns a CDN url for a Sanity image, or null when the field is empty so
   callers can fall back to the file already in /public. */
export function urlFor(source: Image | null | undefined) {
  if (!source) return null
  return builder.image(source).auto('format').fit('max')
}

export function imageUrl(source: Image | null | undefined, width?: number) {
  const b = urlFor(source)
  if (!b) return null
  return width ? b.width(width).url() : b.url()
}
