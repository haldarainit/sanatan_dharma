import { defineArrayMember, defineField, defineType } from 'sanity'

/* Upcoming Service Missions — the slider on the homepage and the five
   detail pages behind it. */
export const mission = defineType({
  name: 'mission',
  title: 'Upcoming mission',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'tagline', title: 'Tagline', type: 'string' }),
    defineField({ name: 'note', title: 'Note', type: 'string' }),
    defineField({
      name: 'paras',
      title: 'Paragraphs',
      type: 'array',
      of: [defineArrayMember({ type: 'text' })],
    }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'currentSrc', title: 'Current file', type: 'string', readOnly: true }),
    defineField({ name: 'href', title: 'Detail page link', type: 'string' }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'tagline', media: 'image' } },
})
