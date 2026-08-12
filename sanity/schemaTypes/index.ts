import type { SchemaTypeDefinition } from 'sanity'

import { donationTier } from './donationTier'
import { faqItem } from './faqItem'
import { heroSlide } from './heroSlide'
import { membershipCategory } from './membershipCategory'
import { mission } from './mission'
import { imageBlock, page, textBlock } from './page'
import { person } from './person'
import { siteSettings } from './siteSettings'
import { statusRow } from './statusRow'

export const schemaTypes: SchemaTypeDefinition[] = [
  /* reusable objects */
  textBlock,
  imageBlock,
  /* documents */
  siteSettings,
  page,
  heroSlide,
  mission,
  person,
  membershipCategory,
  donationTier,
  faqItem,
  statusRow,
]
