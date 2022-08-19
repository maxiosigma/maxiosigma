<template>
   <LayoutPage :title="title" :description="description">
      <div class="portfolio">
         <ItemLink
            :href="'/' + it.l"
            @click.native.prevent="handleClick('/' + it.l)"
            :class="['portfolio-block-container', `block-${i + 1}`, { 'block-effect': active }]"
            v-for="(it, i) in items"
            :key="i"
         >
            <div>{{ it.s1 }}{{ it.s2 }}{{ it.s3 }}</div>
         </ItemLink>
      </div>
   </LayoutPage>
</template>

<script>
export default {
   head() {
      return {
         title: this.title,
         description: this.description,
      };
   },
   data() {
      return {
         title: "Портфолио",
         description: "Работы Макса, посмотрите обязательно !!!",
         items: [
            { s1: "Р", s2: "азра", s3: "ботчик", l: "developer" },
            { s1: "П", s2: "редпри", s3: "ниматель", l: "entrepreneur" },
            { s1: "Д", s2: "иза", s3: "йнер", l: "designer" },
         ],
         properties: {
            developer: 0,
            designer: 0,
            entrepreneur: 0,
         },
         active: false,
      };
   },
   //async asyncData({ $strapi, store }) {
   //   const portfolio = store.state.gql.portfolio;
   //   const data = (
   //      await $strapi.graphql({
   //         query: portfolio,
   //      })
   //   )?.page?.data?.attributes;

   //   return {
   //      data,
   //   };
   //},
   mounted() {
      //this.canvasList();
   },
   methods: {
      handleClick(url) {
         this.active = true;

         setTimeout(() => {
            location.href = url;
         }, 2500);
      },
      //canvasList() {
      //   //const obj = this.$refs.canvasList
      //   const arr = document.querySelectorAll(".canvas-list");
      //   //console.log(arr.forEach((it) => it))
      //   arr?.forEach((obj, i) => {
      //      const ctx = obj?.getContext("2d");

      //      ctx.beginPath();

      //      ctx.moveTo(0, 25);
      //      ctx.bezierCurveTo(0, 25, 150, 0, 300, 25);
      //      ctx.moveTo(0, 25);
      //      ctx.bezierCurveTo(0, 25, 150, 50, 300, 25);

      //      ctx.fillStyle = "#0e9090";
      //      ctx.fill();
      //   });
      //},
   },
};
</script>

<style lang="scss">
.portfolio {
   @apply flex-center flex-grow text-center;

   &-block {
      &-container {
         // transform absolute w-full h-full
         @apply rounded-md cursor-pointer flex-center flex-grow font-vetka font-black bg-orange-600 bg-hero-bank-note-white-20 bg-3r text-white min-h-1/3 max-w-4 px-[6vmin] py-[4vmin] transform transition-all text-[2.5vmin] duration-900 break-all uppercase elevation-10;
         @apply hover:(elevation-15 rotate-y-0 scale-100 filter hue-rotate-270) #{!important};

         &.block {
            &-1 {
               @apply ml-auto leading-[1.7] rotate-y-30 bg-purple-600;
               box-shadow: 5px 0 15px rgba(255, 255, 255, 0.15);
               //@apply -translate-x-[0vmin] translate-y-[27vmin];
            }
            &-2 {
               @apply mx-auto leading-[1.5] scale-95 bg-orange-600;
               box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
               //@apply -rotate-30 translate-x-[33vmin] -translate-y-[27vmin];
            }

            &-3 {
               @apply mr-auto leading-[2.3] -rotate-y-30 bg-green-600;
               box-shadow: -5px 0 15px rgba(255, 255, 255, 0.15);
               //@apply rotate-30 -translate-x-[33vmin] -translate-y-[27vmin];
            }

            &-effect {
               @apply duration-2500 pointer-events-none filter hue-rotate-[5.0turn] #{!important};
            }
         }
      }
   }
}

.canvas {
   &-container {
      @apply h-0 mr-[10vmin] mb-[15vmin] w-0 absolute drop-shadow-2xl;
   }

   &-list {
      @apply max-w-screen text-current transform origin-left text-hex-0e9090 w-[25vmin] absolute filter;
      @apply text-shadow-custom-orange-15px;

      &.list {
         &-1 {
            @apply -rotate-30 translate-x-[8vmin] translate-y-[2vmin];
         }

         &-2 {
            @apply rotate-90;
         }

         &-3 {
            @apply rotate-210 translate-x-[4vmin] -translate-y-[5.5vmin];
         }
      }
   }
}

// blob:https://dasreda.ru/fa761a60-210b-4753-a5ca-f1393c0f5cbe
//<a href="blob:https://dasreda.ru/fa761a60-210b-4753-a5ca-f1393c0f5cbe" download="filename">Скачать</a>
//https://cdn.dasreda.ru/video-data/.213cc2e0-50e1-4bf4-b215-72c5d8580a43/video_640x360.mp4/index-v1-a1.m3u8
// ffmpeg -i "https://cdn.dasreda.ru/video-data/.213cc2e0-50e1-4bf4-b215-72c5d8580a43/video_640x360.mp4/index-v1-a1.m3u8" -c copy -bsf:a aac_adtstoasc "output.mp4"
</style>
