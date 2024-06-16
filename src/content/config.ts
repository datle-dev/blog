import { z, defineCollection } from "astro.content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    draft: z.boolean(),
    date: z.date(),
  }),
});

export const collections = {
  blog: blog,
};
