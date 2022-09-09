<template>
   <div></div>
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
