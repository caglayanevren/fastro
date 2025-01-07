import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const FRCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/faaliyet-raporu" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
			title: z.string(),
			spot: z.string(),
			type: z.enum(["multiItem", "singleItem"]),
			category: z.string(),
			thumbnail: image(),
			awarded: z.boolean(),
			grand: z.boolean().optional(),
			coverImage: image().optional(),
			singleItemSliderImages: z.array(image()).optional(),
			singleItemSpreadImages: z.array(image()).optional(),
			VimeoId: z.string().optional(),
			YoutubeId: z.string().optional(),
		}),
});

const YIWSCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/yatirimci-iliskileri-web-sitesi" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.string(),
			thumbnail: image(),
			coverImage: image(),
		}),
});

const YSCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/yatirimci-sunumlari" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			category: z.string(),
			thumbnail: image(),
			coverImage: image(),
			singleItemSpreadImages: z.array(image()),
		}),
});

const KKCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/kurumsal-kimlik" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
			title: z.string(),
			spot: z.string(),
			category: z.string(),
			thumbnail: image(),
			coverImage: image(),
			singleItemSpreadImages: z.array(image()),
		}),
});

const KWCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/kurumsal-web-siteleri" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
			title: z.string(),
			spot: z.string(),
			category: z.string(),
			thumbnail: image(),
			coverImage: image(),
		}),
});

const B2BRCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/b2b-reklam" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			spot: z.string(),
			category: z.string(),
			thumbnail: image(),
			year: z.string().optional(),
			coverImage: image().optional(),
			singleItemSpreadImages: z.array(image()).optional(),
		}),
});

const EFRCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/entegre-faaliyet-raporu" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
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

const OFRCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/online-faaliyet-raporu" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
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
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/surdurulebilirlik-raporu" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
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

const HARKCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/halka-arz-reklam-kampanyalari" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			spot: z.string(),
			type: z.enum(["multiItem", "singleItem", "onlyThumbnail"]),
			category: z.string(),
			thumbnail: image(),
			coverImage: image(),
			singleItemSpreadImages: z.array(image()).optional(),
		}),
});

const KSSCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/kss" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
			title: z.string(),
			subtitle: z.string().optional(),
			spot: z.string(),
			type: z.enum(["multiItem", "singleItem", "onlyThumbnail"]),
			category: z.string(),
			thumbnail: image(),
			awarded: z.boolean(),
			coverImage: image().optional(),
			sliderImages: z.array(image()).optional(),
			otherImages: z.array(image()).optional(),
		}),
});

const OdulCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/oduller" }),
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
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/arc-awards" }),
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const GalaxyAwardsCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/galaxy-awards" }),
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const LACPVisionCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/lacp-vision" }),
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const LACPSpotlightCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/lacp-spotlight" }),
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const CreativityAwardsCollection = defineCollection({
	loader: glob({ pattern: "**\/*.{md,mdx}", base: "./src/content/creativity-awards" }),
	schema: () =>
		z.object({
			title: z.string(),
		}),
});

const vlogCollection = defineCollection({
	loader: glob({ pattern: "**\/*.md", base: "./src/content/vlog" }),
	schema: ({ image }) =>
		z.object({
			sort: z.number(),
			category: z.string(),
			title: z.string(),
			guestName: z.string().optional(),
			guestTitle: z.string().optional(),
			vimeoId: z.string().optional(),
			youtubeId: z.string().optional(),
			cardImage: image().optional(),
			cardImageUrl: z.string().url().optional(),
			isContent: z.boolean().optional(),
		}),
});

const vlogCategoriesCollection = defineCollection({
	loader: glob({ pattern: "**\/category.yaml", base: "./src/content/vlog" }),
	schema: z.object({
		categorySlug: z.string(),
		categoryTitle: z.string(),
		sort: z.number(),
		description: z.string(),
	}),
});

export const collections = {
	"vlog-categories": vlogCategoriesCollection,
	vlog: vlogCollection,
	"faaliyet-raporu": FRCollection,
	"online-faaliyet-raporu": OFRCollection,
	"entegre-faaliyet-raporu": EFRCollection,
	"surdurulebilirlik-raporu": SRDCollection,
	"b2b-reklam": B2BRCollection,
	"yatirimci-sunumlari": YSCollection,
	"kurumsal-kimlik": KKCollection,
	"kurumsal-web-siteleri": KWCollection,
	"yatirimci-iliskileri-web-sitesi": YIWSCollection,
	"halka-arz-reklam-kampanyalari": HARKCollection,
	kss: KSSCollection,
	oduller: OdulCollection,
	"arc-awards": ARCAwardsCollection,
	"creativity-awards": CreativityAwardsCollection,
	"galaxy-awards": GalaxyAwardsCollection,
	"lacp-vision": LACPVisionCollection,
	"lacp-spotlights": LACPSpotlightCollection,
};
