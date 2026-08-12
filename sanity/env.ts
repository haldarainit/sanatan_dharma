/* projectId and dataset are public values -- they ship in the browser bundle
   either way -- so they default here rather than failing the build when the
   host has no environment variables configured. Set the env vars to point a
   deployment at a different project or dataset. */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-10-01'
