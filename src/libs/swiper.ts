import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import type { SwiperOptions, Swiper as aSwiper } from "swiper/types";

const swiperParams: SwiperOptions = {
	modules: [Navigation, Pagination],
	spaceBetween: 0,
	loop: true,
	navigation: {
		enabled: false,
	},
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		768: {
			navigation: {
				enabled: true,
				nextEl: ".swiper-button-next-unique",
				prevEl: ".swiper-button-prev-unique",
			},
		},
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
};

export const mainswiper: aSwiper = new Swiper(".mainswiper", swiperParams);
