import { defineArrayMember, defineField, defineType } from 'sanity'

/* One document per route. Every piece of text and every image on that route
   is a keyed block, so an editor can change anything without a developer.
   The key is generated from the component tree and must stay stable -- the
   site looks content up by key and falls back to the built-in text when a
   block is missing, so an empty dataset still renders the current site. */
export const textBlock = defineType({
  name: 'textBlock',
  title: 'Text',
  type: 'object',
  fields: [
    defineField({ name: 'key', title: 'Key', type: 'string', readOnly: true }),
    defineField({ name: 'section', title: 'Section', type: 'string', readOnly: true }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 3,
      description: 'Shown on the page exactly as written here.',
    }),
  ],
  preview: {
    select: { text: 'text', section: 'section', key: 'key' },
    prepare({ text, section, key }) {
      return {
        title: (text || '(empty)').slice(0, 70),
        subtitle: section ? `${section} · ${key}` : key,
      }
    },
  },
})

export const imageBlock = defineType({
  name: 'imageBlock',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({ name: 'key', title: 'Key', type: 'string', readOnly: true }),
    defineField({ name: 'section', title: 'Section', type: 'string', readOnly: true }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Leave empty to keep the image the site already ships.',
    }),
    defineField({ name: 'alt', title: 'Alt text', type: 'string' }),
    defineField({
      name: 'currentSrc',
      title: 'Current file',
      type: 'string',
      readOnly: true,
      description: 'The image used when none is uploaded above.',
    }),
  ],
  preview: {
    select: { media: 'image', alt: 'alt', key: 'key', src: 'currentSrc' },
    prepare({ media, alt, key, src }) {
      return { title: alt || key, subtitle: src, media }
    },
  },
})

export const page = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'path',
      title: 'Path',
      type: 'string',
      description: 'The route this content belongs to, e.g. /about',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Where this section sits on the page. Only matters when a route is split into sections.',
    }),
    defineField({
      name: 'seoTitle',
      title: 'Browser tab title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Search description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'blocks',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({ type: 'textBlock' }), defineArrayMember({ type: 'imageBlock' })],
      description:
        'Every text and image on this page. Edit the value; leave the key alone.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'path' },
  },
})
