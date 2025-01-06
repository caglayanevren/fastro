import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import type { SwiperOptions, Swiper as aSwiper } from "swiper/types";

const swiperParams: SwiperOptions = {
	modules: [Navigation, Autoplay],
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	navigation: {
		enabled: false,
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		768: {
			slidesPerView: 4,
			navigation: {
				enabled: false,
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		},
	},
};

export const relatedItemsSwiper: aSwiper = new Swiper(".relatedItemsSwiper", swiperParams);
