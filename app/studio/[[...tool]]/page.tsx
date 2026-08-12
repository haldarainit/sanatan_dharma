/* The Studio runs inside the site at /studio, so editors have one place to
   go and no separate deploy to keep in step. */
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

/* The Studio is a large client bundle; prerendering it at build time adds
   many minutes for no benefit, so it renders on request instead. */
export const dynamic = 'force-dynamic'

export { metadata, viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
