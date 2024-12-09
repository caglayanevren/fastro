import Swiper from "swiper";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import type { SwiperOptions, Swiper as aSwiper } from "swiper/types";

const haberswiperParams: SwiperOptions = {
	modules: [Pagination, Autoplay],
	spaceBetween: 0,
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		enabled: true,
		el: ".swiper-pagination",
		clickable: true,
	},
	effect: "creative",
	creativeEffect: {
		prev: {
			translate: [0, "-100%", 0],
		},
		next: {
			translate: [0, "100%", 0],
		},
	},
};
const duyuruswiperParams: SwiperOptions = {
	modules: [Autoplay, EffectFade],
	speed: 1000,
	loop: false,
	effect: "fade",
	fadeEffect: {
		crossFade: true,
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	//breakpoints: {
	//	768: {
	//	},
	//},
};

export const haberswiper: aSwiper = new Swiper(".haberswiper", haberswiperParams);
export const duyuruswiper: aSwiper = new Swiper(".duyuruswiper", duyuruswiperParams);
