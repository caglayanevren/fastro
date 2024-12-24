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

const mainswiper: aSwiper = new Swiper(".mainswiper", swiperParams);
