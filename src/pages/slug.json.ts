import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
	// prettier-ignore
	const allCollections = await Promise.all([
		getCollection("FRCollection"),
		getCollection("OFRCollection"),
		getCollection("EFRCollection"),
		getCollection("SRDCollection"),
		getCollection("HARKCollection"),
		getCollection("KSSCollection"),
		getCollection("OdulCollection"),
		getCollection("vlogCollection"),
		getCollection("B2BRCollection"),
		getCollection("YSCollection"),
		getCollection("YIWSCollection"),
		getCollection("KWCollection"),
		getCollection("KKCollection"),
	]);

	// prettier-ignore
	const paths = [
		"/faaliyet-raporu/",
		"/online-faaliyet-raporu/",
		"/entegre-faaliyet-raporu/",
		"/surdurulebilirlik-raporu/",
		"/halka-arz-reklam-kampanyalari/",
		"/kss/",
		"/oduller/",
		"/vlog/",
		"/b2b-reklam/",
		"/yatirimci-sunumlari/",
		"/yatirimci-iliskileri-web-sitesi/",
		"/kurumsal-web-siteleri/",
		"/kurumsal-kimlik/",
		"/",
		"/biz-kimiz/",
		"/finarsal-gostergeler/",
		"/ailemiz/",
		"/musterilerimiz-konusuyor/",
		"/bir-bakista-finar/",
		"/turkiye-surdurulebilirlik-raporlama-standartlari/",
		"/gri-raporu/",
		"/cdp-raporu/",
		"/surdurulebilirlik-danismanligi/",
		"/cifte-onemlilik-ile-paydas-analizi/",
		"/surdurulebilirlik-egitimleri/",
		"/surdurulebilirlik-stratejisi-ve-esg-yol-haritasi/",
		"/bist-surdurulebilirlik-endeksi-lseg-danismanligi/",
		"/eco-vadis-danismanligi/",
		"/cevresel-ayak-izi-olcumu-ve-dogrulama-hizmeti/",
		"/deger-odakli-yatirimci-iletisimi/",
		"/oduller/arc-awards/",
		"/oduller/galaxy-awards/",
		"/oduller/lacp-vision/",
		"/oduller/lacp-spotlight/",
		"/oduller/creativity-awards/",
		"/referanslar/",
		"/iletisim/",
		"/hr-form/"
	];

	// Tüm slug'ları birleştir
	const allCollectionSlugs = allCollections.flatMap((collection) =>
		collection.map((entry) => {
			const path = entry.id
				.split("/")
				.filter((p) => p !== "index.mdx")
				.filter((p) => p !== "index.md")
				.join("/");

			return `/${entry.collection}/${path}/`;
		})
	);

	const allslugs = [...paths, ...allCollectionSlugs].sort();

	return new Response(
		JSON.stringify({
			slugs: [...allslugs],
		})
	);
};
