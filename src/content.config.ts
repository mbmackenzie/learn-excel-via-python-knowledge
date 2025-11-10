import { z, defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';

const lessonSchema = z.object({
    slug: z.string(),
    hidden: z.boolean().default(false),
});

const python = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/python" }),
    schema: lessonSchema
});

const excel = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/excel" }),
    schema: lessonSchema
});

const chapterSchema = z.object({
    slug: z.string(),
    order: z.number(),
    title: z.string(),
    time_estimate: z.string().optional(),
});

const chapters = defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/chapters" }),
    schema: chapterSchema,
});

export const collections = { python, excel, chapters };
