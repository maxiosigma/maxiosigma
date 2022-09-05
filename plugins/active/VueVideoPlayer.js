//import Vue from "vue";
//import VueVideoPlayer from "@videojs-player/vue";
//import "video.js/dist/video-js.css";

//Vue.use(VueVideoPlayer);

import { createApp } from "vue";
import VueVideoPlayer from "@videojs-player/vue";
import "video.js/dist/video-js.css";

const app = createApp();

app.use(VueVideoPlayer);
