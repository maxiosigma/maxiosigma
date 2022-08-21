import Vue from "vue";
//import "swiper/swiper-bundle.css";
import { Swiper as SwiperClass, Pagination, Navigation, EffectFade, EffectFlip } from "swiper/vue";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

SwiperClass.use([Pagination, Navigation, EffectFade, EffectFlip]); //  Mousewheel, Autoplay

Vue.use(getAwesomeSwiper(SwiperClass), {
   longSwipesMs: 700,
   spaceBetween: 200,
});

// loop: true,
// effect: "flip",
// slidesPerView: 1,
// autoplay: {
// 	delay: 4500,
// },
// flipEffect: {
// 	slideShadows: false,
// },
// navigation: {
// 	nextEl: ".swiper-button-next",
// 	prevEl: ".swiper-button-prev",
// },
// pagination: {
// 	el: ".swiper-pagination",
// 	type: "bullets",
// 	clickable: true,
// 	bulletClass: "w-2 h-2 bg-white box-border border-2 cursor-pointer border-self-purpure rounded-full mx-1",
// 	bulletActiveClass: "border-5 p-1",
// },
