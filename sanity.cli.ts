import { defineCliConfig } from 'sanity/cli'

/* studioHost fixes the hosted address, so  publishes to
   https://sanatan-dharma.sanity.studio without prompting. */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  studioHost: 'sanatan-dharma',
})
