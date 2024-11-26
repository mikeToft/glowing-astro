// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    alternateText: z.string().optional(),
    relatedPosts: z.string().optional(),
    date: z.date(),
    isPublished: z.boolean(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'notes': notesCollection,
};