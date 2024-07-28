import { defineCollection, z } from "astro:content";

const blogPostCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    draft: z.boolean().optional().default(false),
    description: z.string(),
    tags: z.array(z.string()),
    pubDate: z.date(),
    series: z.string().optional(),
  }),
});

export const collections = { blog: blogPostCollection };
