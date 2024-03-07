import { defineCollection, z } from "astro:content";

const FRCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            spot: z.string(),
            type: z.enum(["multiItem", "singleItem"]),
            category: z.string(),
            thumbnail: image(),
            awarded: z.boolean(),
            coverImage: image(),
            otherImages: z.array(image()).optional(),
        }),
});

const EFRCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            spot: z.string(),
            type: z.enum(["multiItem", "singleItem"]),
            category: z.string(),
            thumbnail: image(),
            awarded: z.boolean(),
            coverImage: image(),
            otherImages: z.array(image()).optional(),
        }),
});

export const collections = {
    "faaliyet-raporu": FRCollection,
    "entegre-faaliyet-raporu": EFRCollection,
};
