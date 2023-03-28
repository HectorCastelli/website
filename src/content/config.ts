// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
    'tag': defineCollection({
        schema: z.object({
            name: z.string(),
        })
    }),
    'blog': defineCollection({
        schema: z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string().optional(),
            tags: z.array(z.string()),
        }),
    }),
};