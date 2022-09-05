import Vue from "vue";
import VueSplide from "@splidejs/vue-splide";
import { Video } from "@splidejs/splide-extension-video";

//import "@splidejs/splide/dist/css/splide.min.css";
//import "@splidejs/splide/dist/css/themes/splide-default.min.css";
//import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";

Vue.use(VueSplide, {
   extensions: { Video },
});
