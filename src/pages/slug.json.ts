import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
	// prettier-ignore
	const allCollections = await Promise.all([
		getCollection("faaliyet-raporu"),
		getCollection("online-faaliyet-raporu"),
		getCollection("entegre-faaliyet-raporu"),
		getCollection("surdurulebilirlik-raporu"),
		getCollection("halka-arz-reklam-kampanyalari"),
		getCollection("kss"),
		getCollection("oduller"),
		//getCollection("arc-awards"),
		//getCollection("galaxy-awards"),
		//getCollection("lacp-vision"),
		//getCollection("lacp-spotlight"),
		//getCollection("creativity-awards"),
	]);

	// prettier-ignore
	const paths = [
		"",
		"ailemiz",
		"bir-bakista-finar",
		"biz-kimiz",
		"entegre-faaliyet-raporu",
		"faaliyet-raporu",
		"finarsal-gostergeler",
		"halka-arz-reklam-kampanyalari",
		"hr-form",
		"iletisim",
		"musterilerimiz-konusuyor",
		"oduller",
		"online-faaliyet-raporu",
		"referanslar",
		"surdurulebilirlik-danismanligi",
		"surdurulebilirlik-raporu",
		"turkiye-surdurulebilirlik-raporlama-standartlari",
		"yatirimci-iliskileri",
		"oduller/arc-awards",
		"oduller/galaxy-awards",
		"oduller/lacp-vision",
		"oduller/lacp-spotlight",
		"oduller/creativity-awards",
	];

	// Tüm slug'ları birleştir
	const allCollectionSlugs = allCollections.flatMap((collection) => collection.map((entry) => `${entry.collection}/${entry.slug}`));

	const allslugs = [...paths, ...allCollectionSlugs].sort();

	return new Response(
		JSON.stringify({
			slugs: [...allslugs],
		})
	);
};
