import type { StructureResolver } from 'sanity/structure'

/* Group the desk by what an editor is actually looking for, rather than by
   document type. "Pages" is where the per-page text and images live. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Sanatan Dharm Manav Kalyan Foundation')
    .items([
      S.listItem()
        .title('Site settings')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),

      S.divider(),

      S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages').defaultOrdering([{ field: 'path', direction: 'asc' }])),

      S.divider(),

      S.listItem()
        .title('Home hero slides')
        .schemaType('heroSlide')
        .child(S.documentTypeList('heroSlide').title('Home hero slides').defaultOrdering([{ field: 'order', direction: 'asc' }])),

      S.listItem()
        .title('Mission campaigns')
        .schemaType('campaign')
        .child(
          S.documentTypeList('campaign')
            .title('Mission campaigns')
            .defaultOrdering([{ field: 'order', direction: 'asc' }])
        ),

      S.listItem()
        .title('Upcoming missions')
        .schemaType('mission')
        .child(S.documentTypeList('mission').title('Upcoming missions').defaultOrdering([{ field: 'order', direction: 'asc' }])),

      S.listItem()
        .title('Inspiration figures')
        .schemaType('person')
        .child(S.documentTypeList('person').title('Inspiration figures').defaultOrdering([{ field: 'order', direction: 'asc' }])),

      S.divider(),

      S.listItem()
        .title('Membership categories')
        .schemaType('membershipCategory')
        .child(S.documentTypeList('membershipCategory').title('Membership categories').defaultOrdering([{ field: 'order', direction: 'asc' }])),

      S.listItem()
        .title('Donation amounts')
        .schemaType('donationTier')
        .child(S.documentTypeList('donationTier').title('Donation amounts').defaultOrdering([{ field: 'order', direction: 'asc' }])),

      S.divider(),

      S.listItem()
        .title('FAQs')
        .schemaType('faqItem')
        .child(S.documentTypeList('faqItem').title('FAQs').defaultOrdering([{ field: 'order', direction: 'asc' }])),

      S.listItem()
        .title('Status rows')
        .schemaType('statusRow')
        .child(S.documentTypeList('statusRow').title('Status rows').defaultOrdering([{ field: 'order', direction: 'asc' }])),
    ])
