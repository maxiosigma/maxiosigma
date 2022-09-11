<template>
   <!-- vjs-default-skin <slot>
         <ItemMediaStrapi class="hidden" :src="src"></ItemMediaStrapi>
      </slot> -->

   <video ref="videoPlayer" class="video-js vjs-big-play-centered"></video>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
   props: ["src", "alt", "title", "type", "poster", "active"],
   async fetch() {
      const isGet = (await this.$axios?.get("http://localhost:1337/admin"))?.status === 200;

      if (process.server && isGet && !this.$config.isDev && !this.isLinkSite(this.src)) {
         console.log(process.server, isGet, !this.isLinkSite(this.src));

         const { DownloaderHelper } = require("node-downloader-helper");
         new DownloaderHelper(`http://localhost:1337${this.src}`, "./media/cdn", {
            resumeIfFileExists: true,
            override: "skip",
         }).start();
      }
   },
   data() {
      return {
         id:
            "video_" +
            String(Math.random() * ((Math.random() * 10000000) / 1.0))
               .split(".")
               .join("_"),
         options: {
            loop: true,
            fill: true,
            fluid: true,
            playing: true,
            techOrder: ["html5"],
            html5: { hls: { withCredentials: false } },
            aspectRatio: "16:9",
            isFullscreen: true,
            playsinline: true,
            controls: true,
         },
      };
   },

   mounted() {
      try {
         this.player = videojs(
            this.$refs.videoPlayer,
            {
               autoplay: false,
               ...this.options,
               sources: [
                  {
                     src: !this.$config.isDev ? require(`~/media/cdn/${this.src.replace("/uploads/", "")}`) : `http://localhost:1337${this.src}`,
                     type: "video/mp4",
                  },
               ],
            },
            () => {}
         );
      } catch (error) {}
   },
   beforeDestroy() {
      if (this.player) this.player.dispose();
   },
   methods: {},
   components: {},
};

//loop: this.active ? true : false,
//preload: false,
//waiting: false,
//isLive: true,
//paused: false,
//ended: false,
//played: [0, 100],

//console.log(this.player);

//VideoPlayer,
//H5Video,

//watch: {
//   active: function (value) {
//      if (this.active) {
//         //console.log(this.id, this.active, value);
//         //console.log(this.player);
//         //this.player.playing = true;
//         //this.player.autoplay = true;
//         //this.player.trigger("play");
//         //console.log(this.player);
//         //console.log(this.$refs.videoPlayer);
//         //videojs(this.$refs.videoPlayer, { autoplay: true });
//      }

//      //this.player = videojs(
//      //   this.$refs.videoPlayer,
//      //   {
//      //      autoplay: false,
//      //      ...this.options,
//      //   },
//      //   () => {
//      //      //this.player.log("onPlayerReady", this);
//      //      //this.player.playing();
//      //      //console.log("init", this.player);
//      //      //console.log("init", this.active);
//      //   }
//      //);
//   },
//},
//computed: {
//   player: {
//      get() {
//         return videojs(
//            this.$refs.videoPlayer,
//            {
//               autoplay: false,
//               ...this.options,
//            },
//            () => {
//               //this.player.log("onPlayerReady", this);
//               //this.player.playing();
//               console.log("init", this.player);
//               console.log("init", this.active);
//            }
//         );
//      },
//      set(value) {
//         // this.active ? "muted" :

//         console.log(this.$refs.videoPlayer);
//         console.log(this.active);
//         console.log(value);

//         //return "The shop number is " + this.shopNumber;

//         //return videojs(
//         //   this.$refs.videoPlayer,
//         //   {
//         //      autoplay: false,
//         //      //...this.options,
//         //   },
//         //   () => {
//         //      //this.player.log("onPlayerReady", this);
//         //      //this.player.playing();
//         //      console.log("load", this.player);
//         //      console.log("load", this.active);
//         //   }
//         //);
//      },
//   },
//},
</script>

<style lang="scss"></style>
