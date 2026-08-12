import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  /* published content is served from the CDN; the pages revalidate on a
     webhook from Sanity, so edits appear without a redeploy */
  useCdn: true,
  perspective: 'published',
})
