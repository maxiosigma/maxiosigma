<template>
   <!--<LayoutPage :title="title" :description="description">
      <div>1</div>
   </LayoutPage>-->

   <!-- document.referrer -->
   <Layout :bodyStyle="'portfolio'" :title="title" :description="description">
      <div class="flex-grow relative" :class="noVisio([1, 2]) ? 'portfolio-visio-no' : 'portfolio-visio'">
         <ItemBack
            class="absolute cursor-pointer opacity-25 uppercase text-sm font-medium border-b-3 transition duration-700 border-r-3 border-orange-500 rounded-xl pt-1.5 pr-2.5 pb-2 left-5 top-5 hover:(opacity-95)"
         >
            <span class="text-indigo-900"> ← </span>
            <LazyItemRundomString class="inline text-xs text-indigo-900">Обратно</LazyItemRundomString>
         </ItemBack>
      </div>

      <div class="flex-grow">
         <div class="flex-center bg-light-900" v-show-slide:3000:ease="!noVisio([1, 2])">
            <ItemMedia class="w-auto h-96 max-h-96 object-contain object-center" :src="'portfolio/bg_4.webp'" />
         </div>

         <div class="flex-center flex-col bg-indigo-900 text-white" v-show-slide:3000:ease="!noVisio([1, 2])">
            <h2 class="inline-flex-center p-5 flex-col font-light text-lg tracking-wide uppercase gap-2 grid-rows-1">
               <div>
                  <span>Вам нужен</span>
                  <span class="font-black mx-1 text-blue-300">:</span>
                  <span>Дизайнер</span>
                  <span class="font-black mx-1 text-cyan-300">|</span>
                  <span>Разработчик</span>
                  <span class="font-black text-xl text-indigo-500"> ?</span>
               </div>

               <div>
                  <span class="font-black text-xl text-yellow-600">!</span>
                  <span class="mx-1">Тогда вы по адресу</span>
                  <span class="font-black text-xl text-yellow-600">!</span>
               </div>
            </h2>
         </div>

         <!-- 
         Ключевые характеристики / Вам симпотизируют
         — Харизматичность
         — Коммуникативность
         → В любой сети, без матов и негатива
         — Исполнительность
         → Взяв проект, делаю до конца
         — Дотошность
         → Внимание к мелочам
          -->

         <!--:class="['', noVisio([2]) ? 'portfolio-visio-no' : 'portfolio-visio']"-->

         <ItemPortfolioSection :visible="!noVisio([2])" :visio="1" :black="true" :reverse="false" :data="design">
            <template v-slot:title>
               Дизайнер
               <!--1-->
            </template>

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

         <!--<v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
               <v-btn color="primary" dark v-bind="attrs" v-on="on"> Button </v-btn>
            </template>
            <span>Tooltip</span>
         </v-tooltip>-->

         <!--<v-btn value="home"> Home </v-btn>-->

         <!--  :class="noVisio([1]) ? 'portfolio-visio-no' : 'portfolio-visio'" -->
         <ItemPortfolioSection :visible="!noVisio([1])" :visio="2" :black="false" :reverse="true" :data="development">
            <template v-slot:title>
               Разработчик
               <!--2-->
            </template>

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

         <!--<div class="bg-indigo-900 min-h-screen" :class="noVisio([1, 2]) ? 'portfolio-visio-no' : 'portfolio-visio'"></div>-->

         <!--<div>1111</div>-->

         <!--<ItemPortfolioBlock></ItemPortfolioBlock>-->

         <!--    scroll == 1 || scroll == 2 ? 'cont-scroll' : '',
               scroll == 2 ? 'bottom' : '', -->
         <div
            @click="up()"
            v-scroll="getScroll"
            :class="[
               'fixed right-5 bottom-5 border-3 transition-all duration-500 delay-300 p-3 rounded-full border-orange-600/25 text-indigo-600/35 cursor-pointer transform -rotate-540 hover:(border-orange-500/75 text-indigo-600/65 rotate-360)',
               scroll == 0 || scroll == 2 ? 'opacity-0 pointer-events-none' : '',
            ]"
         >
            <span class="icon-arrow-up-o icon-md text-shadow-custom-cyan-5px pointer-events-none"></span>
            <!--<span class="icon-arrows-exchange-alt-v icon-md text-shadow-custom-cyan-5px pointer-events-none"></span>-->
         </div>
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
      //const developerWorksFirst = store.state.developerWorks.filter((it, i) => i <= 5);
      //const developerWorksSecond = store.state.developerWorks.filter((it, i) => i > 5);
      //const designerWorksFirst = store.state.designerWorks.filter((it, i) => i <= 5);
      //const designerWorksSecond = store.state.designerWorks.filter((it, i) => i > 5);

      const types = store.state.works.reduce(
         (sum, it, i) => (sum.filter((type) => type === it.type)?.length > 0 ? sum : sum.push(it.type) && sum),
         []
      );

      return {
         //developerWorksFirst,
         //developerWorksSecond,
         //designerWorksFirst,
         //designerWorksSecond,

         ...types.reduce((sum, type) => {
            sum = { ...sum, [type]: store.state.works.filter((work) => work.type === type) };
            return sum;
         }, {}),
      };
   },
   data() {
      return {
         scroll: 0,
         title: "Портфолио",
         description: "Работы Макса, посмотрите обязательно !!!",
         //developer: {},
         //designer: {},
      };
   },
   mounted() {
      //console.log(this.development);
      //console.log(this.design);
      //console.log(this.developerWorksFirst, this.developerWorksSecond, this.designerWorksFirst, this.designerWorksSecond);
   },
   methods: {
      up() {
         document.body.scrollIntoView();
      },
      getScroll() {
         const dbd = document.body;
         const bodyHeight = Math.max(dbd.scrollHeight, dbd.offsetHeight, dbd.clientHeight);
         const scrollHeight = document.documentElement.clientHeight + window.scrollY;
         const position = { top: 150, bottom: 150 };

         //console.log(window.scrollY);

         if (window.scrollY < position.top) this.scroll = 0;
         if (window.scrollY >= position.top) this.scroll = 1;
         if (window.scrollY >= position.top && bodyHeight - scrollHeight <= position.bottom) this.scroll = 2;
      },
      noVisio(arr) {
         return arr?.filter((it) => it === this.$store.state.visio)?.length > 0;
      },
   },
};
</script>

<style lang="scss">
.portfolio {
   @apply bg-light-900;

   &-visio {
      @apply h-auto;

      &-no {
         @apply h-0 max-h-0 min-h-0 p-0 m-0 overflow-hidden;
      }
   }
}
</style>
