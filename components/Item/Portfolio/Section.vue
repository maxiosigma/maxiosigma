<template>
   <div class="portfolio-block" :class="[`block-${section}`, black ? 'bg-black text-light-200' : 'bg-light-900 text-indigo-900']">
      <div class="grid container mx-auto grid-cols-12 grid-rows-1">
         <div class="p-4 col-span-6" :class="[reverse ? 'order-2' : 'order-1']">
            <VueSlickCarousel class="pointer-events-none" v-bind="{ ...slider.common, ...slider.top }">
               <div class="flex rounded-xl overflow-hidden" v-for="(it, i) in data.first" :key="i">
                  <!--{{ it.media }}-->
                  <LazyItemImgStrapiBg
                     class="bg-contain flex-grow bg-center rounded-xl min-h-60 bg-transparent w-full h-full"
                     :src="it.media[0].url"
                  />
               </div>
            </VueSlickCarousel>

            <VueSlickCarousel class="mt-5 max-w-80 pointer-events-none mx-auto group" v-bind="{ ...slider.common, ...slider.bootom }">
               <div class="flex-center" v-for="(it, i) in data.first" :key="i">
                  <div
                     class="text-lg tracking-widest inline-flex items-center uppercase"
                     :class="[black ? 'text-shadow-custom-black-5px' : 'text-shadow-custom-black-1px']"
                  >
                     <span>{{ it.title }}</span>

                     <span
                        v-if="it.link"
                        class="font-mw mw-info transition duration-300 text-cyan-400 text-shadow-custom-green-10px text-2xl ml-1 mb-1 group-hover:(text-orange-400)"
                        :class="[it.link ? 'cursor-pointer pointer-events-auto' : '']"
                        @click="it.link ? handleClickLink(it.link) : false"
                     ></span>
                  </div>

                  <div class="text-lg font-medium tracking-wider font-vetka">{{ it.description }}</div>
               </div>
            </VueSlickCarousel>
         </div>

         <div class="grid gap-6 col-span-6 place-items-start place-content-start px-4 py-6" :class="[reverse ? 'order-1' : 'order-2']">
            <!-- LazyItemRundomString -->
            <div
               class="text-5xl pb-4 px-2 uppercase tracking-[5px]"
               :class="[
                  black
                     ? 'text-shadow-custom-green-5px border-b-6 border-orange-500'
                     : 'text-shadow-custom-blue-2px border-b-6 border-orange-500',
               ]"
            >
               <slot name="title"></slot>
            </div>

            <div class="text-base grid gap-4"><slot name="description"></slot></div>

            <div
               class="uppercase text-xs text-white px-4 py-2 transition duration-700 rounded-md cursor-pointer"
               :class="[
                  black
                     ? 'bg-green-500 shadow-custom-green-20px hover:(bg-orange-500 shadow-custom-orange-10px text-white)'
                     : 'bg-indigo-500 shadow-custom-blue-10px hover:(bg-orange-500 shadow-custom-orange-20px text-white)',
               ]"
            >
               Все проекты
            </div>
         </div>
      </div>

      <!--<div class="my-5">{{ data.first }}</div>-->
      <!--<div>{{ data.second }}</div>-->

      <!-- Все работы -->

      <div class="absolute -top-[80px] h-40px overflow-hidden"><div class="absolute transform rotate-12 bottom-0 w-[150%]"></div></div>
      <div class="absolute -top-[80px] h-40px overflow-hidden"><div class="absolute transform rotate-12 bottom-0 w-[150%]"></div></div>
   </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

//import ParticleEffectButton from "vue-particle-effect-buttons";

export default {
   props: ["black", "reverse", "data"],
   data() {
      return {
         section: Math.random(),
         slider: {
            common: {
               accessibility: false,
               autoplay: true,
               centerMode: true,
               centerPadding: "0px",
               dots: false,
               arrows: false,
               infinite: true,
               slidesToShow: 1,
               slidesToScroll: 1,
               swipeToSlide: false,
               pauseOnDotsHover: false,
               pauseOnFocus: false,
               pauseOnHover: false,
               swipe: false,
               touchMove: false,
               speed: 3500,
            },
            top: {
               vertical: true,
               verticalSwiping: false,
            },
            bootom: {
               fade: true,
            },
         },
      };
   },
   methods: {
      clickAllProjects() {},
      handleClickLink(url) {
         window.open(url);
      },
   },
   components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.portfolio {
   &-block {
      //my-10
      @apply px-4 py-4 min-h-32 bg-opacity-85 relative;
   }
}
</style>
