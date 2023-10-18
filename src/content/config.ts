import { z, defineCollection } from 'astro:content';
export const collections = {
    'tag': defineCollection({
        type: 'content',
        schema: z.object({
            name: z.string(),
        })
    }),
    'blog': defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            pubDate: z.date(),
            description: z.string().optional(),
            tags: z.array(z.string()),
            footNotes: z.array(z.string()).optional(),
        }),
    }),
    'project': defineCollection({
        type: 'content',
        schema: z.object({
            name: z.string(),
            url: z.string().url().optional(),
            image: z.string().optional(),
            status: z.enum(["ongoing", "completed", "abandoned"])
        })
    }),
};