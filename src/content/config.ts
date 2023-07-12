import { z, defineCollection } from 'astro:content';
import { cname } from '@config';
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
            footNotes: z.array(z.string()).optional(),
        }),
    }),
    'project': defineCollection({
        schema: z.object({
            name: z.string(),
            url: z.string().url().optional(),
            image: z.preprocess((val) => {
                let stringVal = String(val);
                if (stringVal.startsWith("/")) {
                    return String(`${cname}${stringVal}`)
                } else {
                    return stringVal
                }
            }, z.string().url()).optional(),
            status: z.enum(["ongoing", "completed", "abandoned"])
        })
    }),
};