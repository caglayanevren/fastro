import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const FRCollection = defineCollection({
	type: "content",
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
	type: "content",
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
	type: "content",
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
	type: "content",
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
	type: "content",
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

const RCollection = defineCollection({
	type: "content",
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
	type: "content",
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
	type: "content",
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
	type: "content",
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
	type: "content",
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
	type: "content",
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
	"b2b-reklam": RCollection,
	"yatirimci-sunumlari": YSCollection,
	"kurumsal-kimlik": KKCollection,
	"kurumsal-web-siteleri": KWCollection,
	"yatirimci-iliskileri-web-sitesi": YIWSCollection,
	"halka-arz-reklam-kampanyalari": HARKCollection,
	kss: KSSCollection,
	oduller: OdulCollection,
	"arc-awards": ARCAwardsCollection,
	"galaxy-awards": GalaxyAwardsCollection,
	"lacp-vision": LACPVisionCollection,
	"lacp-spotlight": LACPSpotlightCollection,
	"creativity-awards": CreativityAwardsCollection,
};
