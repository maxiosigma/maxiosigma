<template>
   <video ref="videoPlayer" class="video-js">
      <slot>
         <ItemMediaStrapi v-if="src" class="hidden" :src="src" />
      </slot>
   </video>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default {
   props: ["src", "alt", "title", "type", "poster", "active"],
   data() {
      return {
         id:
            "video_" +
            String(Math.random() * ((Math.random() * 10000000) / 1.0))
               .split(".")
               .join("_"),
         options: {
            loop: true,
            //loop: this.active ? true : false,
            fill: true,
            fluid: true,
            playing: true,
            techOrder: ["html5"],
            html5: { hls: { withCredentials: false } },
            aspectRatio: "16:9",
            //preload: false,
            //waiting: false,
            //isLive: true,
            //paused: false,
            //ended: false,
            //played: [0, 100],
            isFullscreen: true,
            playsinline: true,
            controls: true,
            sources: [{ src: this.src, type: "video/mp4" }],
         },
      };
   },
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
   mounted() {
      this.player = videojs(this.$refs.videoPlayer, { autoplay: false, ...this.options }, () => {});
   },
   beforeDestroy() {
      if (this.player) {
         console.log(this.player);
         this.player.dispose();
      }
   },
   methods: {},
   components: {
      //VideoPlayer,
      //H5Video,
   },
};
</script>

<style lang="scss"></style>
