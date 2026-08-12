import { defineField, defineType } from 'sanity'

/* The status guides on Need Help and Raise a Complaint. */
export const statusRow = defineType({
  name: 'statusRow',
  title: 'Status row',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({
      name: 'table',
      title: 'Table',
      type: 'string',
      options: {
        list: [
          { title: 'Need Help', value: 'need-help' },
          { title: 'Raise a Complaint', value: 'complaint' },
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'meaning', title: 'Meaning', type: 'text', rows: 2 }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'status', subtitle: 'meaning' } },
})
