import { defineArrayMember, defineField, defineType } from 'sanity'

/* Things that appear on every page: the logo, the header and footer, the
   helplines and the social links. */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteName', title: 'Site name', type: 'string' }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Leave empty to keep the current logo.',
    }),
    defineField({ name: 'donateLabel', title: 'Donate button label', type: 'string' }),
    defineField({
      name: 'helplines',
      title: 'Helpline numbers',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'emails',
      title: 'Email addresses',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'whatsapp', title: 'WhatsApp number', type: 'string' }),
    defineField({
      name: 'upiId',
      title: 'UPI ID for donations',
      type: 'string',
      description:
        'Changing this updates the QR codes, the pay links and the printed ID everywhere on the site.',
    }),
    defineField({
      name: 'upiName',
      title: 'Name shown in the UPI app',
      type: 'string',
      description: 'The payee name donors see when their UPI app opens.',
    }),
    defineField({ name: 'footerAbout', title: 'Footer description', type: 'text', rows: 5 }),
    defineField({ name: 'cin', title: 'CIN', type: 'string' }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'network', title: 'Network', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
          preview: { select: { title: 'network', subtitle: 'url' } },
        }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: 'Site settings' }) },
})
