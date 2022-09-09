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
         Ключевые характеристики / Вам симпотизируют
         — Харизматичность
         — Коммуникативность
         → В любой сети, без матов и негатива
         — Исполнительность
         → Взяв проект, делаю до конца
         — Дотошность
         → Внимание к мелочам
          -->

         <ItemPortfolioSection
            :class="noVisio([2]) ? 'portfolio-visio-no' : 'portfolio-visio'"
            :visio="1"
            :black="true"
            :reverse="false"
            :data="design"
         >
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

         <!--<v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
               <v-btn color="primary" dark v-bind="attrs" v-on="on"> Button </v-btn>
            </template>
            <span>Tooltip</span>
         </v-tooltip>-->

         <!--<v-btn value="home"> Home </v-btn>-->

         <ItemPortfolioSection
            :class="noVisio([1]) ? 'portfolio-visio-no' : 'portfolio-visio'"
            :visio="2"
            :black="false"
            :reverse="true"
            :data="development"
         >
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

         <div class="bg-indigo-900 min-h-screen" :class="noVisio([1, 2]) ? 'portfolio-visio-no' : 'portfolio-visio'"></div>

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
      noVisio(arr) {
         return arr?.filter((it) => it === this.$store.state.visio).length > 0;
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
