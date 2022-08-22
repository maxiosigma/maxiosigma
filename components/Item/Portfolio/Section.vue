<template>
   <div class="portfolio-block" :class="black ? 'bg-black text-white' : 'bg-light-900 text-indigo-900'">
      <div class="grid container mx-auto grid-cols-2 grid-rows-1">
         <div class="p-4">
            <!--<VueSlickCarousel class="" v-bind="{ ...slider.common, ...slider.top }">
               <div class="flex rounded-sm overflow-hidden" v-for="(it, i) in data.first" :key="i">
                  <LazyItemImgStrapiBg class="bg-contain flex-grow bg-center min-h-60 bg-transparent w-full h-full" :src="it.media[0].url" />
               </div>
            </VueSlickCarousel>

            <VueSlickCarousel class="" v-bind="{ ...slider.common, ...slider.bootom }">
               <div class="flex-center" v-for="(it, i) in data.first" :key="i">
                  {{ it.title }}
                  {{ it.description }}
               </div>
            </VueSlickCarousel>-->
         </div>

         <div class="p-4">
            <!-- LazyItemRundomString -->
            <div><slot name="title"></slot></div>
            <div><slot name="description"></slot></div>
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
   props: ["black", "data"],
   data() {
      return {
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
               speed: 1500,
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
   components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.portfolio {
   &-block {
      @apply px-4 py-4 min-h-32 bg-opacity-85 relative my-10;
   }
}
</style>
