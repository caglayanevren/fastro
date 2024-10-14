const paths = {
	slugs: [
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
		"faaliyet-raporu/akbank",
		"faaliyet-raporu/akfen-gyo",
		"faaliyet-raporu/akfen",
		"faaliyet-raporu/aksa-dogalgaz",
		"faaliyet-raporu/aksa-enerji",
		"faaliyet-raporu/albarakaturk",
		"faaliyet-raporu/garanti-faktoring",
		"faaliyet-raporu/koruncuk",
		"faaliyet-raporu/tog",
		"online-faaliyet-raporu/aksigorta",
		"online-faaliyet-raporu/alternatif-bank",
		"online-faaliyet-raporu/borusan",
		"online-faaliyet-raporu/dgs-int",
		"online-faaliyet-raporu/fibabanka",
		"online-faaliyet-raporu/gfa-int",
		"online-faaliyet-raporu/gre-int",
		"online-faaliyet-raporu/halk-emeklilik",
		"online-faaliyet-raporu/kastamonu-entegre",
		"online-faaliyet-raporu/koc-int",
		"online-faaliyet-raporu/sabanci",
		"online-faaliyet-raporu/sisecam",
		"online-faaliyet-raporu/sok",
		"online-faaliyet-raporu/tav-int",
		"online-faaliyet-raporu/ulker",
		"entegre-faaliyet-raporu/erdemir",
		"entegre-faaliyet-raporu/gap",
		"entegre-faaliyet-raporu/halkbank",
		"entegre-faaliyet-raporu/nuh-cimento",
		"entegre-faaliyet-raporu/sekerbank",
		"entegre-faaliyet-raporu/tegv",
		"entegre-faaliyet-raporu/tev",
		"entegre-faaliyet-raporu/tskb",
		"entegre-faaliyet-raporu/vakifbank",
		//"surdurulebilirlik-raporu/adpskr-srd",
		"surdurulebilirlik-raporu/akbank-srd",
		"surdurulebilirlik-raporu/aksa-enerji-srd",
		"surdurulebilirlik-raporu/albarakaturk-srd",
		//"surdurulebilirlik-raporu/aselsan-srd-2022",
		"surdurulebilirlik-raporu/aselsan-srd",
		//"surdurulebilirlik-raporu/bim-srd-2022",
		"surdurulebilirlik-raporu/bim-srd",
		//"surdurulebilirlik-raporu/bizim-srd-2022",
		//"surdurulebilirlik-raporu/cargill",
		//"surdurulebilirlik-raporu/fiba",
		"surdurulebilirlik-raporu/ford-srd",
		"surdurulebilirlik-raporu/iga-srd",
		//"surdurulebilirlik-raporu/kerevitas-srd",
		"surdurulebilirlik-raporu/kuveytturk-srd",
		//"surdurulebilirlik-raporu/osd-srd",
		//"surdurulebilirlik-raporu/sabanci-srd",
		//"surdurulebilirlik-raporu/sok-srd-2022",
		"surdurulebilirlik-raporu/sok-srd",
		"surdurulebilirlik-raporu/tboh-srd",
		//"surdurulebilirlik-raporu/tbsew-srd",
		//"surdurulebilirlik-raporu/thy-srd",
		"surdurulebilirlik-raporu/vakifbank-srd",
		//"surdurulebilirlik-raporu/yildiz-srd",
		"halka-arz-reklam-kampanyalari/akfen-gyo",
		"halka-arz-reklam-kampanyalari/astor",
		"halka-arz-reklam-kampanyalari/avrupakent-gyo",
		"halka-arz-reklam-kampanyalari/cvk-madencilik",
		"halka-arz-reklam-kampanyalari/desa",
		"halka-arz-reklam-kampanyalari/ekos-electric",
		"halka-arz-reklam-kampanyalari/hedef-holding",
		"halka-arz-reklam-kampanyalari/isyatirim",
		"halka-arz-reklam-kampanyalari/kontrolmatik",
		"halka-arz-reklam-kampanyalari/koza-polyester",
		"halka-arz-reklam-kampanyalari/limak",
		"halka-arz-reklam-kampanyalari/odine",
		"halka-arz-reklam-kampanyalari/rainbow",
		"halka-arz-reklam-kampanyalari/viagyo",
		"kss/acil-ihtiyac-vakfi",
		"kss/adv-bbog",
		"kss/darussafaka",
		"kss/dilinizden-utanmayin",
		"oduller/abdden-yine-buyuk-odullerle-donuyoruz",
		"oduller/and-oscar-goes-to",
		"oduller/arc-2021",
		"oduller/arcden-buyuk-odulleri-yine-turkiyeye-getirdik",
		"oduller/biz-altin-madenini-amerikada-bulduk",
		"oduller/dunyanin-en-iyi-faaliyet-raporunu-finar-tasarladi",
		"oduller/dunyanin-en-iyi-kurumsal-tasarim-ajansi",
		"oduller/dunyanin-en-iyisi",
		"oduller/international-star-awards-for-quality",
		"oduller/lacp-2021",
		"oduller/toplam-24-odul",
		"oduller/yilin-kurumsal-iletisim-ajansi-olduk",
		"arc-awards",
		"galaxy-awards",
		"lacp-vision",
		"lacp-spotlight",
		"creativity-awards",
	],
};

const timeout = 50000;

describe("Demo", () => {
	jest.setTimeout(timeout);
	paths.slugs.forEach((path) => {
		describe(`Path: /${path}`, () => {
			beforeAll(async () => {
				await page.goto(`http://localhost:4321/${path}`);
			});

			it("Should have an og:image", async () => {
				const ogImage = await page.$eval('meta[property="og:image"]', (el) => el.getAttribute("content"));
				console.log(ogImage);
				expect(ogImage).toBeTruthy();
				expect(ogImage).toMatch(/^https?:\/\//);
			});

			//it("Should have a title", async () => {
			//	await expect(page).toHaveTitle();
			//});

			// ... diğer testler ...
		});
	});
});
