//import Vue from "vue";
//import VideoPlayer from "nuxt-video-player/dist/vue-video-player.umd";
//require("nuxt-video-player/src/assets/css/main.css");
//Vue.component("video-player", VideoPlayer);

import Vue from "vue";
//import VueVideoPlayer from "vue-video-player";
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";

//Vue.use(VueVideoPlayer);

if (process.browser) {
   const VueVideoPlayer = require("vue-video-player/dist/ssr");
   Vue.use(VueVideoPlayer);
}

/* {
  options: global default options,
  events: global videojs events
} */
