<template>
   <!--<LayoutPage :title="title" :description="description">
      <div>1</div>
   </LayoutPage>-->

   <!-- document.referrer -->
   <Layout :bodyStyle="'portfolio'" :title="title" :description="description">
      <!--<div class="flex-grow relative">
         <ItemBack
            class="absolute cursor-pointer opacity-25 uppercase text-sm font-medium border-b-3 transition duration-700 border-r-3 border-orange-500 rounded-xl pt-1.5 pr-2.5 pb-2 left-5 top-5 hover:(opacity-95)"
         >
            <span class="text-indigo-900"> ← </span>
            <LazyItemRundomString class="inline text-xs text-indigo-900">Обратно</LazyItemRundomString>
         </ItemBack>
      </div>-->

      <div class="flex-grow">
         <!--<div class="flex-center bg-light-900 h-96">
            <ItemMedia class="w-auto h-full object-contain object-center" :src="'portfolio/bg_4.png'" />
         </div>-->

         <!--<div class="flex-center flex-col p-5 bg-black text-white">
            <h2 class="inline-flex-center flex-col font-thin uppercase gap-2 grid-rows-1">
               <div>
                  <span>Вам нужен :</span>
                  <span>Дизайнер</span>
                  <span class="font-black mx-1 text-cyan-200">|</span>
                  <span>Разработчик</span>
                  <span class="font-black text-xl text-indigo-600"> ?</span>
               </div>

               <div>
                  <span class="font-black text-xl text-yellow-600">!</span>
                  <span class="mx-1">Тогда вы по адресу</span>
                  <span class="font-black text-xl text-yellow-600">!</span>
               </div>
            </h2>
         </div>-->

         <!-- 
         Ключевые характеристики
         — Харизматичность
         — Коммуникативность
         → В любой сети, без матов и негатива
         — Исполнительность
         → Взяв проект, делаю до конца
         — Дотошность
         → Внимание к мелочам
          -->

         <ItemPortfolioSection :black="true" :reverse="false" :data="{ first: designerWorksFirst, second: designerWorksSecond }">
            <template v-slot:title> Дизайнер </template>
            <template v-slot:description>
               <div
                  v-for="(it, i) in [
                     'Очень креативен',
                     'В основе: тренды текущего года, яркие тона, геометрия, нег. пространство',
                     'Инструменты: Figma',
                  ]"
                  :key="i"
               >
                  <div class="sm:(inline mr-1)">▬</div>
                  {{ it }}
               </div>
            </template>
         </ItemPortfolioSection>

         <ItemPortfolioSection :black="false" :reverse="true" :data="{ first: developerWorksFirst, second: designerWorksSecond }">
            <template v-slot:title> Разработчик </template>
            <template v-slot:description>
               <div
                  v-for="(it, i) in [
                     'Создаю проекты на Nuxt JS = полностью статичный сайт и Windi CSS = более быстрый и функциональный аналог tailwind',
                     'Начинал с webpack, laravel-mix и освоения разных фреймворков',
                     'Знаю, но обычно не работаю с CMS: Tilda, Wordpress, October',
                     'Знаю и обычно работаю с CMS: Strapi, Firebase, Contentfull, Prismic',
                     'Используемые хостинги: Firebase, Netlify, Vercel',
                  ]"
                  :key="i"
               >
                  <div class="sm:(inline mr-1)">▬</div>
                  {{ it }}
               </div>
            </template>
         </ItemPortfolioSection>

         <!--<ItemPortfolioBlock :black="true" :data="{ first: developerWorksFirst, second: developerWorksSecond }"></ItemPortfolioBlock>-->

         <div class="bg-indigo-900 min-h-screen"></div>

         <!--<div>1111</div>-->

         <!--<ItemPortfolioBlock></ItemPortfolioBlock>-->
      </div>
   </Layout>
</template>

<script>
export default {
   head() {
      return {
         title: this.title,
         description: this.description,
      };
   },
   async asyncData({ store }) {
      const developerWorksFirst = store.state.developerWorks.filter((it, i) => i <= 5);
      const developerWorksSecond = store.state.developerWorks.filter((it, i) => i > 5);
      const designerWorksFirst = store.state.designerWorks.filter((it, i) => i <= 5);
      const designerWorksSecond = store.state.designerWorks.filter((it, i) => i > 5);

      //console.log(developerWorksFirst, developerWorksSecond, designerWorksFirst, designerWorksSecond);

      return { developerWorksFirst, developerWorksSecond, designerWorksFirst, designerWorksSecond };
   },
   data() {
      return {
         title: "Портфолио",
         description: "Работы Макса, посмотрите обязательно !!!",
         developer: {},
         designer: {},
      };
   },
   mounted() {},
   methods: {},
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
