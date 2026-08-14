import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '@/sanity/env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  /* The pages are revalidated by Next (every 60s, or instantly on the
     publish webhook), so reads should not sit behind Sanity's cache as
     well -- that would stack a second delay on top. */
  useCdn: false,
  perspective: 'published',
})
