export const FinarExperienceYear = new Date().getFullYear() - new Date("1994").getFullYear();
export const lastYear = new Date().getFullYear() - 1;
export const SITE_TITLE = "FİNAR";
export const SITE_DESCRIPTION = `Faaliyet raporu alanında ${FinarExperienceYear} yıllık bir deneyime sahibiz. Finar olarak işinin ehli ve geniş kadromuzla ${lastYear} yılında onlarca şirkete bu alanda hizmet verdik. İşlerimizi yakından inceleyin.`;
export const SEO_IMAGE = "/og/finar-og.png";
export const AWARD_IMAGE = "~images/AWARD_WINNER.png";
export const DAHA_FAZLA_BILGI = "DAHA FAZLA BİLGİ";

export const ogpngConfig = {
	thumbnailWaH: "350px",
	titleFontSize: "72px",
	imagePadding: "16",
	imageBg: "#c5d9de",
	imageAccentBg: "#8accdd",
	finarColor: "#00b3e3",
	width: 1200,
	height: 630,
	categoryRightPad: "40px",
	categoryBottomPad: "30px",
} as const;

export const site = {
	name: "Finar Kurumsal",
	site: "https://fastro.vercel.app",
	base: "/",
	trailingSlash: true,
	googleSiteVerificationId: "",
};
