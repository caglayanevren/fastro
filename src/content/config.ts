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
			singleItemSpreadImages: z.array(image()).optional(),
		}),
});

const OFRCollection = defineCollection({
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
			singleItemSpreadImages: z.array(image()).optional(),
		}),
});

const SRDCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			spot: z.string(),
			type: z.enum(["multiItem", "singleItem", "onlyThumbnail"]),
			category: z.string(),
			thumbnail: image(),
			awarded: z.boolean(),
			coverImage: image(),
			singleItemSpreadImages: z.array(image()).optional(),
		}),
});

const KSSCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			subtitle: z.string().optional(),
			spot: z.string(),
			category: z.string().optional(),
			thumbnail: image(),
			awarded: z.boolean(),
			coverImage: image().optional(),
			sliderImages: z.array(image()).optional(),
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
			singleItemSpreadImages: z.array(image()).optional(),
		}),
});

const OdulCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			spot: z.string().optional(),
			category: z.string(),
			coverImage: image().optional(),
			year: z.string(),
		}),
});

const ARCAwardsCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const GalaxyAwardsCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const LACPVisionCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const LACPSpotlightCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const CreativityAwardsCollection = defineCollection({
	type: "content",
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

export const collections = {
	"faaliyet-raporu": FRCollection,
	"online-faaliyet-raporu": OFRCollection,
	"entegre-faaliyet-raporu": EFRCollection,
	"surdurulebilirlik-raporu": SRDCollection,
	kss: KSSCollection,
	oduller: OdulCollection,
	"arc-awards": ARCAwardsCollection,
	"galaxy-awards": GalaxyAwardsCollection,
	"lacp-vision": LACPVisionCollection,
	"lacp-spotlight": LACPSpotlightCollection,
	"creativity-awards": CreativityAwardsCollection,
};
