import { defineField, defineType } from 'sanity'

export const faqItem = defineType({
  name: 'faqItem',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({
      name: 'page',
      title: 'Appears on',
      type: 'string',
      options: {
        list: [
          { title: 'Need Help', value: 'need-help' },
          { title: 'About', value: 'about' },
        ],
      },
    }),
    defineField({
      name: 'q',
      title: 'Question',
      type: 'text',
      rows: 2,
      validation: (r) => r.required(),
    }),
    defineField({ name: 'a', title: 'Answer', type: 'text', rows: 4 }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'q', subtitle: 'page' } },
})
