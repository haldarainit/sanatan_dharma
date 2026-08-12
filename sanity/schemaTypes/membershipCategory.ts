import { defineArrayMember, defineField, defineType } from 'sanity'

/* Join The Mission — the five categories and everything inside their forms,
   transcribed from the client's brief. */
export const membershipCategory = defineType({
  name: 'membershipCategory',
  title: 'Membership category',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'slug', title: 'Key', type: 'string', readOnly: true }),
    defineField({ name: 'cardTitle', title: 'Card title', type: 'string' }),
    defineField({ name: 'cardText', title: 'Card description', type: 'text', rows: 3 }),
    defineField({ name: 'image', title: 'Card image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'currentSrc', title: 'Current file', type: 'string', readOnly: true }),
    defineField({ name: 'formTitle', title: 'Form title', type: 'string' }),
    defineField({ name: 'headingEn', title: 'Heading (caps)', type: 'string' }),
    defineField({ name: 'headingHi', title: 'Heading (Hindi)', type: 'string' }),
    defineField({ name: 'notice', title: 'Important notice', type: 'text', rows: 4 }),
    defineField({ name: 'aboutTitle', title: 'About heading', type: 'string' }),
    defineField({ name: 'about', title: 'About text', type: 'text', rows: 5 }),
    defineField({
      name: 'roles',
      title: 'Roles and responsibilities',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'interests',
      title: 'Service interests',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'declaration', title: 'Declaration', type: 'text', rows: 4 }),
    defineField({ name: 'feeLine', title: 'Contribution line', type: 'text', rows: 3 }),
    defineField({ name: 'levelNote', title: 'Service level note', type: 'text', rows: 3 }),
    defineField({ name: 'idCardNote', title: 'ID card note', type: 'string' }),
    defineField({ name: 'pledge', title: 'Show संकल्प checkbox', type: 'boolean' }),
    defineField({ name: 'autoUpdateNote', title: 'Show "amount updates" note', type: 'boolean' }),
    defineField({
      name: 'fees',
      title: 'Contribution amounts',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feeRow',
          fields: [
            defineField({ name: 'level', title: 'Level', type: 'string' }),
            defineField({ name: 'base', title: 'Amount', type: 'number' }),
            defineField({ name: 'withId', title: 'Amount with ID card', type: 'number' }),
          ],
          preview: {
            select: { title: 'level', base: 'base', withId: 'withId' },
            prepare: ({ title, base, withId }) => ({
              title: String(title),
              subtitle: `₹${base} / with ID ₹${withId}`,
            }),
          },
        }),
      ],
    }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'cardTitle', subtitle: 'headingHi', media: 'image' } },
})
