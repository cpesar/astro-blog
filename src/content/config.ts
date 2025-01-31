import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(), // Changed from z.string() to z.date()
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
};

// Type safety
declare module 'astro:content' {
  interface Collections {
    blog: typeof blogCollection;
  }
}
