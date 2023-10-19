import { z, reference, defineCollection } from 'astro:content';

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
    'institution': defineCollection({
        type: 'data',
        schema: z.object({
            name: z.string(),
            url: z.string().url().optional(),
        })
    }),
    'experience': defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            position: z.enum(["intern", "volunteer", "contract", "full-time"]),
            company: reference('institution'),
            targetCompany: reference('institution').optional(),
            startDate: z.date(),
            endDate: z.date().optional(),
        })
    }),
    'education': defineCollection({
        type: 'data',
        schema: z.object({
            discipline: z.string(),
            degree: z.string(),
            institution: reference('institution'),
            startDate: z.date(),
            endDate: z.date().optional(),
        })
    }),
    'award': defineCollection({
        type: 'data',
        schema: z.object({
            award: z.string(),
            grantedBy: reference('institution'),
            year: z.number().gte(1996).lte(new Date().getFullYear()),
        })
    }),
    'skillCategory': defineCollection({
        type: 'data',
        schema: z.object({
            name: z.string(),
            description: z.string(),
            order: z.number().positive(),
        })
    }),
    'skill': defineCollection({
        type: 'data',
        schema: z.object({
            skill: z.string(),
            category: reference("skillCategory"),
            rating: z.number().int().positive().lte(5)
        })
    }),
    'resume': defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            experience: z.array(reference('experience')).optional(),
            education: z.array(reference('education')).optional(),
            awards: z.array(reference('award')).optional(),
            skills: z.array(reference('skill')).optional(),
        })
    }),
};