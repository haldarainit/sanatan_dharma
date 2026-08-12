import { defineCliConfig } from 'sanity/cli'

/* studioHost fixes the hosted address and appId identifies the deployed
   application, so `sanity deploy` publishes to
   https://sanatan-dharma.sanity.studio without prompting. */
export default defineCliConfig({
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'vxux2x60',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
  studioHost: 'sanatan-dharma',
  deployment: {
    appId: 'yu8xnormdg14en60o9hwjtu9',
  },
})
