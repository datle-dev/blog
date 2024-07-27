import { defineCollection, z } from "astro:content";

const blogPostCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    draft: z.boolean(),
    description: z.string(),
    tags: z.array(z.string()),
    pubDate: z.date(),
  }),
});

export const collections = { blog: blogPostCollection };
