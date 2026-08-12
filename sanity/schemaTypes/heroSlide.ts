import { defineField, defineType } from 'sanity'

/* The rotating slides at the top of the homepage. */
export const heroSlide = defineType({
  name: 'heroSlide',
  title: 'Home hero slide',
  type: 'document',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number', validation: (r) => r.required() }),
    defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'imageMobile', title: 'Image (mobile)', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
    defineField({ name: 'line1', title: 'First line', type: 'string' }),
    defineField({ name: 'line2', title: 'Second line', type: 'string' }),
    defineField({ name: 'ctaLabel', title: 'Button label', type: 'string' }),
    defineField({ name: 'ctaHref', title: 'Button link', type: 'string' }),
    defineField({
      name: 'noOverlay',
      title: 'Image only (no text)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({ name: 'currentSrc', title: 'Current file', type: 'string', readOnly: true }),
  ],
  orderings: [{ name: 'order', title: 'Order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: {
    select: { title: 'line2', subtitle: 'line1', media: 'image' },
  },
})
