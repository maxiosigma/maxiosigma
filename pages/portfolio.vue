<template>
   <LayoutPage :title="title" :description="description">
      <div></div>
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
   //async asyncData({ store }) {
   //   const developerWorksFirst = store.state.developerWorks.filter((it, i) => i <= 5);
   //   const developerWorksSecond = store.state.developerWorks.filter((it, i) => i > 5);
   //   const designerWorksFirst = store.state.designerWorks.filter((it, i) => i <= 5);
   //   const designerWorksSecond = store.state.designerWorks.filter((it, i) => i > 5);

   //   return { developerWorksFirst, developerWorksSecond, designerWorksFirst, designerWorksSecond };
   //},
   data() {
      return {
         title: "Портфолио",
         description: "Работы Макса, посмотрите обязательно !!!",
         developer: {},
         designer: {},
      };
   },
   //mounted() {},
   //methods: {},
};
</script>

<style lang="scss">
.portfolio {
   @apply bg-light-900;

   &-block {
      &-container {
         @apply rounded-md cursor-pointer flex-center flex-grow font-vetka font-black bg-orange-600 bg-hero-bank-note-white-20 bg-3r text-white min-h-1/3 max-w-4 px-[6vmin] py-[4vmin] transform transition-all text-[2.5vmin] duration-900 break-all uppercase elevation-10;
         @apply hover:(elevation-15 rotate-y-0 scale-100 filter hue-rotate-270) #{!important};

         &.block {
            &-1 {
               @apply ml-auto leading-[1.7] rotate-y-30 bg-purple-600;
               box-shadow: 5px 0 15px rgba(255, 255, 255, 0.15);
            }
            &-2 {
               @apply mx-auto leading-[1.5] scale-95 bg-orange-600;
               box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
            }

            &-3 {
               @apply mr-auto leading-[2.3] -rotate-y-30 bg-green-600;
               box-shadow: -5px 0 15px rgba(255, 255, 255, 0.15);
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
