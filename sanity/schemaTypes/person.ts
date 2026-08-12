import { defineField, defineType } from 'sanity'

/* The inspiration figures on the About page. */
export const person = defineType({
  name: 'person',
  title: 'Inspiration figure',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'title', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Description', type: 'text', rows: 3 }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'संत एवं धर्माचार्य', value: 'saints' },
          { title: 'न्याय एवं वैचारिक नेतृत्व', value: 'justice' },
          { title: 'राष्ट्र एवं जननेतृत्व', value: 'nation' },
        ],
      },
    }),
    defineField({ name: 'image', title: 'Photo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'currentSrc', title: 'Current file', type: 'string', readOnly: true }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'image' } },
})
