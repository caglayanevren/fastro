import { getPermalink } from "~utils/permalinks";

export const headerData = {
	sections: [
		{
			text: "ANASAYFA",
			href: "/",
			homeicon: true,
		},
		{
			text: "FİNAR",
			finarlinks: [
				{
					text: "BİZ KİMİZ?",
					href: getPermalink("/biz-kimiz/"),
				},
				{
					text: "FİNARSAL GÖSTERGELER",
					href: getPermalink("/finarsal-gostergeler/"),
				},
				{
					text: "AİLEMİZ",
					href: getPermalink("/ailemiz/"),
				},
				{
					text: "MÜŞTERİLERİMİZ KONUŞUYOR",
					href: getPermalink("/musterilerimiz-konusuyor/"),
				},
				{
					text: "V-LOG",
					href: getPermalink("/vlog/"),
				},
				{
					text: "KURUMSAL SOSYAL SORUMLULUK",
					href: getPermalink("/kss/"),
				},
			],
		},
		{
			text: "HİZMETLER",
			hizmetlerlinks: [
				{
					altsectionhead: "RAPORLAMA",
					altsectionitems: [
						{
							text: "Faaliyet Raporu",
							href: getPermalink("/faaliyet-raporu/"),
						},
						{
							text: "Entegre Faaliyet Raporu",
							href: getPermalink("/entegre-faaliyet-raporu/"),
						},
						{
							text: "Online Faaliyet Raporu",
							href: getPermalink("/online-faaliyet-raporu/"),
						},
						{
							text: "Sürdürülebilirlik Raporu",
							href: getPermalink("/surdurulebilirlik-raporu/"),
						},
						{
							text: "Türkiye Sürdürülebilirlik<br class='hidden lg:block' /> Raporlama Standartları (TSRS)",
							href: getPermalink("/turkiye-surdurulebilirlik-raporlama-standartlari/"),
						},
						{
							text: "GRI Raporu",
							href: getPermalink("/gri-raporu/"),
						},
						{
							text: "CDP Raporu",
							href: getPermalink("/cdp-raporu/"),
						},
					],
				},
				{
					altsectionhead: "SÜRDÜRÜLEBİLİRLİK",
					altsectionitems: [
						{
							text: "Sürdürülebilirlik Danışmanlığı",
							href: getPermalink("/surdurulebilirlik-danismanligi/"),
						},
						{
							text: "Çifte Önemlilik ile Paydaş Analizi",
							href: getPermalink("/cifte-onemlilik-ile-paydas-analizi/"),
						},
						{
							text: "Sürdürülebilirlik Eğitimleri",
							href: getPermalink("/surdurulebilirlik-egitimleri/"),
						},
						{
							text: "Sürdürülebilirlik Stratejisi ve ESG Yol Haritası",
							href: getPermalink("/surdurulebilirlik-stratejisi-ve-esg-yol-haritasi/"),
						},
						{
							text: "BIST Sürdürülebilirlik Endeksi LSEG Danışmanlığı",
							href: getPermalink("/bist-surdurulebilirlik-endeksi-lseg-danismanligi/"),
						},
						{
							text: "EcoVadis Danışmanlığı",
							href: getPermalink("/eco-vadis-danismanligi/"),
						},
						{
							text: "Çevresel Ayak İzi Ölçümü ve Doğrulama Hizmeti",
							href: getPermalink("/cevresel-ayak-izi-olcumu-ve-dogrulama-hizmeti/"),
						},
					],
				},
				{
					altsectionhead: "YATIRIMCI İLETİŞİMİ",
					altsectionitems: [
						{
							text: "Değer Odaklı Yatırımcı İletişimi",
							href: getPermalink("/deger-odakli-yatirimci-iletisimi/"),
						},
						{
							text: "Halka Arz Reklam Kampanyaları",
							href: getPermalink("/halka-arz-reklam-kampanyalari/"),
						},
						{
							text: "Yatırımcı İlişkileri Web Sitesi",
							href: getPermalink("/yatirimci-iliskileri-web-sitesi/"),
						},
						{
							text: "Yatırımcı Sunumları",
							href: getPermalink("/yatirimci-sunumlari/"),
						},
					],
				},
				{
					altsectionhead: "KURUMSAL İLETİŞİM",
					altsectionitems: [
						{
							text: "Kurumsal Kimlik",
							href: getPermalink("/kurumsal-kimlik/"),
						},
						{
							text: "Kurumsal Web Siteleri",
							href: getPermalink("/kurumsal-web-siteleri/"),
						},
						{
							text: "B2B Reklam",
							href: getPermalink("/b2b-reklam/"),
						},
					],
				},
			],
		},
		{
			text: "ÖDÜLLER",
			href: getPermalink("/oduller/"),
		},
		{
			text: "REFERANSLAR",
			href: getPermalink("/referanslar/"),
		},
		{
			text: "İLETİŞİM",
			href: getPermalink("/iletisim/"),
		},
	],
};

export const raporlamaAltMenuData = {
	sideinfo: "Diğer raporlama hizmetlerimiz için:",
	menuItems: [
		{
			text: "Faaliyet Raporu",
			href: "/faaliyet-raporu/",
		},
		{
			text: "Entegre Faaliyet Raporu",
			href: "/entegre-faaliyet-raporu/",
		},
		{
			text: "Online Faaliyet Raporu",
			href: "/online-faaliyet-raporu/",
		},
		{
			text: "Sürdürülebilirlik Raporu",
			href: "/surdurulebilirlik-raporu/",
		},
		{
			text: "Türkiye Sürdürülebilirlik<br class='inline-block sm:hidden lg:block' /> Raporlama Standartları (TSRS)",
			href: "/turkiye-surdurulebilirlik-raporlama-standartlari/",
		},
		{
			text: "GRI Raporu",
			href: "/gri-raporu/",
		},
		{
			text: "CDP Raporu",
			href: "/cdp-raporu/",
		},
	],
};

export const surdurulebilirlikAltMenuData = {
	sideinfo: "Diğer danışmanlık hizmetlerimiz için:",
	menuItems: [
		{
			text: "Çifte Önemlilik ile<br class='inline-block sm:hidden lg:block' /> Paydaş Analizi",
			href: "/cifte-onemlilik-ile-paydas-analizi/",
		},
		{
			text: "Sürdürülebilirlik Eğitimleri",
			href: "/surdurulebilirlik-egitimleri/",
		},
		{
			text: "Sürdürülebilirlik Stratejisi ve<br class='inline-block sm:hidden lg:block' /> ESG Yol Haritası",
			href: "/surdurulebilirlik-stratejisi-ve-esg-yol-haritasi/",
		},
		{
			text: "BIST Sürdürülebilirlik Endeksi<br class='inline-block sm:hidden lg:block' /> LSEG Danışmanlığı",
			href: "/bist-surdurulebilirlik-endeksi-lseg-danismanligi/",
		},
		{
			text: "EcoVadis Danışmanlığı",
			href: "/eco-vadis-danismanligi/",
		},
		{
			text: "Çevresel Ayak İzi Ölçümü ve<br class='inline-block sm:hidden lg:block' /> Doğrulama Hizmeti",
			href: "/cevresel-ayak-izi-olcumu-ve-dogrulama-hizmeti/",
		},
	],
};
