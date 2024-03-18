import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
    const mainswiper = new Swiper(".mainswiper", {
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
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    return mainswiper;
});
