import { getPermalink } from "~utils/permalinks";

export const headerData = {
	links: [
		{
			text: "ANASAYFA",
			href: "/",
			homeicon: true,
		},
		{
			text: "FİNAR",
			links: [
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
			],
		},
		{
			text: "HİZMETLER",
			links: [
				{
					text: "FAALİYET RAPORU",
					href: getPermalink("/faaliyet-raporu/"),
				},
				{
					text: "ENTEGRE FAALİYET RAPORU",
					href: getPermalink("/entegre-faaliyet-raporu/"),
				},
				{
					text: "ONLINE FAALİYET RAPORU",
					href: getPermalink("/online-faaliyet-raporu/"),
				},
				{
					text: "SÜRDÜRÜLEBİLİRLİK RAPORU",
					href: getPermalink("/surdurulebilirlik-raporu/"),
				},
				{
					text: "TÜRKİYE SÜRDÜRÜLEBİLİRLİK<br class='hidden lg:block' /> RAPORLAMA STANDARTLARI (TSRS)",
					href: getPermalink(
						"/turkiye-surdurulebilirlik-raporlama-standartlari/",
					),
				},
				{
					text: "SÜRDÜRÜLEBİLİRLİK DANIŞMANLIĞI",
					href: getPermalink("/surdurulebilirlik-danismanligi/"),
				},
				{
					text: "YATIRIMCI İLİŞKİLERİ",
					href: getPermalink("/yatirimci-iliskileri/"),
				},
				{
					text: "YATIRIMCI İLİŞKİLERİ MOBİL UYGULAMASI",
					href: getPermalink(
						"/yatirimci-iliskileri-mobil-uygulamasi/",
					),
				},
				{
					text: "YATIRIMCI İLİŞKİLERİ WEB SİTESİ",
					href: getPermalink("/yatirimci-iliskileri-web-sitesi/"),
				},
				{
					text: "YATIRIMCI SUNUMLARI",
					href: getPermalink("/yatirimci-sunumlari/"),
				},
				{
					text: "KURUMSAL KİMLİK",
					href: getPermalink("/kurumsal-kimlik/"),
				},
				{
					text: "KURUMSAL WEB SİTELERİ",
					href: getPermalink("/kurumsal-web-siteleri/"),
				},
				{
					text: "REKLAM",
					href: getPermalink("/reklam/"),
				},
				{
					text: "HALKA ARZ REKLAM KAMPANYALARI",
					href: getPermalink("/halka-arz-reklam-kampanyalari/"),
				},
			],
		},
		{
			text: "ÖDÜLLER",
			href: "/oduller/",
		},
		{
			text: "KSS",
			links: [
				{
					text: "TEGV",
					href: getPermalink("/faaliyet-raporu/tegv/"),
				},
				{
					text: "KORUNCUK",
					href: getPermalink("/faaliyet-raporu/koruncuk/"),
				},
				{
					text: "TOG",
					href: getPermalink("/faaliyet-raporu/tog/"),
				},
				{
					text: "ADV",
					href: getPermalink("/faaliyet-raporu/adv-bbog/"),
				},
				{
					text: "DİLİNİZDEN UTANMAYIN",
					href: getPermalink("/kss/dilinizden-utanmayin/"),
				},
				{
					text: "ACİL İHTİYAÇ VAKFI",
					href: getPermalink("/kss/acil-ihtiyac-vakfi/"),
				},
				{
					text: "DARÜŞŞAFAKA",
					href: getPermalink("/kss/darussafaka/"),
				},
			],
		},
		{
			text: "REFERANSLAR",
			href: "/referanslar/",
		},
		{
			text: "V-LOG",
			href: "/vlog/",
		},
		{
			text: "İLETİŞİM",
			href: "/iletisim/",
		},
		{
			text: "ARŞİV",
			href: "/arsiv/",
		},
	],
};
