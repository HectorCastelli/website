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
    // Resume-related
    'resume-experience': defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            company: z.string(),
            startDate: z.date(),
            endDate: z.date().optional(),
        })
    }),
    'resume-education': defineCollection({
        type: 'data',
        schema: z.object({
            degree: z.string(),
            institution: z.string(),
            startDate: z.date(),
            endDate: z.date().optional(),
        })
    }),
    'resume-awards': defineCollection({
        type: 'data',
        schema: z.object({
            award: z.string(),
            date: z.date(),
        })
    }),
    'resume-skills': defineCollection({
        type: 'data',
        schema: z.object({
            skill: z.string(),
            category: z.enum(["technology", "practice", "language"]),
            rating: z.number().int().positive().lte(5)
        })
    }),
};