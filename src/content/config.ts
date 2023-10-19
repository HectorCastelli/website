import { z, reference, defineCollection } from 'astro:content';

const institution = z.object({
    name: z.string(),
    url: z.string().url().optional(),
})

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
    'resume-institution': defineCollection({
        type: 'data',
        schema: z.object({
            name: z.string(),
            url: z.string().url().optional(),
        })
    }),
    'resume-experience': defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            position: z.enum(["intern", "volunteer", "contract", "full-time"]),
            company: reference('resume-institution'),
            targetCompany: reference('resume-institution').optional(),
            startDate: z.date(),
            endDate: z.date().optional(),
        })
    }),
    'resume-education': defineCollection({
        type: 'data',
        schema: z.object({
            discipline: z.string(),
            degree: z.string(),
            institution: reference('resume-institution'),
            startDate: z.date(),
            endDate: z.date().optional(),
        })
    }),
    'resume-award': defineCollection({
        type: 'data',
        schema: z.object({
            award: z.string(),
            grantedBy: reference('resume-institution'),
            year: z.number().gte(1996).lte(new Date().getFullYear()),
        })
    }),
    'resume-skill': defineCollection({
        type: 'data',
        schema: z.object({
            skill: z.string(),
            category: z.enum(["technologies", "tooling", "architectures", "practices", "languages"]),
            rating: z.number().int().positive().lte(5)
        })
    }),
    'resume': defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            experience: z.array(reference('resume-experience')).optional(),
            education: z.array(reference('resume-education')).optional(),
            awards: z.array(reference('resume-award')).optional(),
            skills: z.array(reference('resume-skill')).optional(),
        })
    }),
};