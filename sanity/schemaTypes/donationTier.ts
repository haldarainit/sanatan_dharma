import { defineField, defineType } from 'sanity'

/* The preset amounts on the donation page. */
export const donationTier = defineType({
  name: 'donationTier',
  title: 'Donation amount',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({
      name: 'amount',
      title: 'Amount',
      type: 'number',
      validation: (r) => r.required(),
    }),
    defineField({ name: 'hi', title: 'Label', type: 'string' }),
    defineField({ name: 'tag', title: 'Badge', type: 'string' }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { amount: 'amount', hi: 'hi', tag: 'tag' },
    prepare: ({ amount, hi, tag }) => ({
      title: `₹${amount} — ${hi || ''}`,
      subtitle: tag || undefined,
    }),
  },
})
