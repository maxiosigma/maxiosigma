<template>
   <div></div>
   <!--<div v-if="src" :class="[id, 'img-bg-mod']" :title="title" :alt="alt" itemprop="image">
      <slot>
         <ItemMediaStrapi v-if="src" class="hidden" :src="src"></ItemMediaStrapi>
      </slot>
   </div>-->

   <!--  size="720" crossorigin playsinline :data-poster="poster"  -->
   <!--<vue-plyr v-if="src" :ref="id" :options="options">
      <video controls crossorigin playsinline>
         <source :src="src" type="video/mp4" :autoplay="true" />
      </video>
   </vue-plyr>-->

   <!-- style="max-height: 200px; height: 100vh" -->
   <!--<video-background class="flex-grow" :src="src" overlay="linear-gradient(45deg,#2a4ae430,#fb949e6b)">-->
   <!--<h1 style="color: white">Hallo welcome!</h1>-->
   <!--</video-background>-->

   <!--<div v-else>Видео не найдено</div>-->

   <!--<slot>
         <ItemMediaStrapi v-if="src" class="hidden" :src="src"></ItemMediaStrapi>
         <ItemMediaStrapi v-if="poster" class="hidden" :src="poster"></ItemMediaStrapi>
      </slot>-->
</template>

<script>
export default {
   props: ["src", "alt", "title", "type", "poster"],
   data() {
      return {
         id:
            "video_" +
            String(Math.random() * ((Math.random() * 10000000) / 1.0))
               .split(".")
               .join("_"),
         options: {
            title: this.title,
            enabled: true,
            autoplay: true,
            autopause: false,
         },
      };
   },
   mounted() {
      console.log(this.$refs);

      //  this.$refs?.[this.id]?.player.play();
      //
      //  const refer = this.$refs?.[this.id]?.player;
      //  player.volume = 0.5;
      //  console.log(player);
      //  player.play();
      //  refer.on("ready", (event) => {
      //     const player = event.detail.plyr;
      //     // instance.fullscreen.active;
      //     player?.fullscreen.active;
      //     console.log(player);
      //  });
      //  console.log(this.$refs?.[this.id]?.player);
   },
   methods: {},
};
</script>

<style lang="scss"></style>
