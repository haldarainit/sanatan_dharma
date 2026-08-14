import { defineArrayMember, defineField, defineType } from 'sanity'

/* The nine Our Missions campaigns: the card on the homepage and the page
   behind its Details button. Transcribed from the client's brief. */
export const campaign = defineType({
  name: 'campaign',
  title: 'Mission campaign',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({
      name: 'slug',
      title: 'Page address',
      type: 'string',
      readOnly: true,
      description: 'The page opens at /missions/<this>. Changing it would break links.',
    }),
    defineField({ name: 'title', title: 'Campaign name', type: 'string' }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'currentSrc', title: 'Current file', type: 'string', readOnly: true }),

    defineField({
      name: 'lead',
      title: 'Opening line',
      type: 'text',
      rows: 3,
      description: 'Shown at the top of the campaign page.',
    }),
    defineField({ name: 'sub', title: 'Subject line', type: 'string' }),
    defineField({
      name: 'cardText',
      title: 'Card description',
      type: 'text',
      rows: 3,
      description: 'The short line under the card on the homepage.',
    }),
    defineField({
      name: 'paras',
      title: 'Campaign introduction',
      type: 'array',
      of: [defineArrayMember({ type: 'text', rows: 5 })],
      description: 'One entry per paragraph.',
    }),

    defineField({ name: 'topicsTitle', title: 'Subjects — heading', type: 'string' }),
    defineField({
      name: 'topics',
      title: 'Subjects',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'topic',
          fields: [
            defineField({ name: 'title', title: 'Subject', type: 'string' }),
            defineField({ name: 'text', title: 'Description', type: 'text', rows: 4 }),
          ],
          preview: { select: { title: 'title', subtitle: 'text' } },
        }),
      ],
    }),

    defineField({ name: 'checklistTitle', title: 'What to have ready — heading', type: 'string' }),
    defineField({
      name: 'checklist',
      title: 'What to have ready',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'categoryTitle', title: 'Categories — heading', type: 'string' }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),

    defineField({ name: 'supportTitle', title: 'How to help — heading', type: 'string' }),
    defineField({
      name: 'support',
      title: 'How to help',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'supportItem',
          fields: [
            defineField({ name: 'label', title: 'Way to help', type: 'string' }),
            defineField({ name: 'text', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'label', subtitle: 'text' } },
        }),
      ],
    }),

    defineField({
      name: 'sections',
      title: 'Extra sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'section',
          fields: [
            defineField({ name: 'title', title: 'Heading', type: 'string' }),
            defineField({ name: 'quote', title: 'Quote', type: 'string' }),
            defineField({
              name: 'paras',
              title: 'Paragraphs',
              type: 'array',
              of: [defineArrayMember({ type: 'text', rows: 4 })],
            }),
          ],
          preview: { select: { title: 'title', subtitle: 'quote' } },
        }),
      ],
    }),

    defineField({
      name: 'closing',
      title: 'Closing banner',
      type: 'text',
      rows: 3,
      description: 'The dark box at the foot of the page. Leave empty to hide it.',
    }),

    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'campaignButton',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({
              name: 'href',
              title: 'Opens',
              type: 'string',
              description: 'A page on the site, e.g. /donate. Leave empty for the Share button.',
            }),
            defineField({ name: 'share', title: 'Is the Share button', type: 'boolean' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        }),
      ],
    }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'tagline', media: 'image' } },
})
