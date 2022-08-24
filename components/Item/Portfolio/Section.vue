<template>
   <div class="portfolio-block" :class="[`block-${section}`, black ? 'bg-black text-light-200' : 'bg-light-900 text-indigo-900']">
      <div class="grid container mx-auto sm:grid-cols-12 grid-rows-1">
         <div class="p-4 sm:col-span-6" :class="[reverse ? 'sm:order-2' : 'sm:order-1']">
            <VueSlickCarousel class="pointer-events-none" v-bind="{ ...slider.common, ...slider.top }">
               <div class="flex rounded-xl overflow-hidden" v-for="(it, i) in data.first" :key="i">
                  <ItemMediaStrapiBg
                     class="bg-contain flex-grow bg-center rounded-xl min-h-60 bg-transparent w-full h-full"
                     :src="it.media[0].url"
                  />
               </div>
            </VueSlickCarousel>

            <!-- pointer-events-none  -->
            <VueSlickCarousel class="mt-5 px-5 pointer-events-none group" v-bind="{ ...slider.common, ...slider.bootom }">
               <div class="grid gap-2 text-center" v-for="(it, i) in data.first" :key="i">
                  <div
                     v-if="it.link"
                     class="font-mw mw-info m-3 text-opacity-50 transition duration-500 text-3xl"
                     :class="[
                        it.link ? 'cursor-pointer pointer-events-auto' : '',
                        black ? 'text-green-500 text-shadow-custom-green-10px' : 'text-indigo-600 text-shadow-custom-indigo-1px',
                        'group-hover:(!text-orange-400 !text-shadow-custom-orange-20px)',
                     ]"
                     @click="it.link ? handleClickLink(it.link) : false"
                     v-tooltip="
                        isMobile()
                           ? {}
                           : {
                                content: `<div class='text-center'>Посмотреть работу <br> ${it.link}</div>`,
                                html: true,
                                distance: 20,
                                delay: {
                                   show: 200,
                                   hide: 150,
                                },
                             }
                     "
                  ></div>

                  <div
                     class="text-lg tracking-widest items-center uppercase"
                     :class="[black ? 'text-shadow-custom-black-5px' : 'text-shadow-custom-black-1px']"
                  >
                     {{ it.title }}
                  </div>

                  <div class="text-lg font-medium tracking-wider font-vetka">
                     {{ it.description }}
                  </div>

                  <!--<div
                     v-if="it.link"
                     class="uppercase text-xs px-4 py-2 hover:(bg-orange-400)"
                     :class="[it.link ? 'cursor-pointer pointer-events-auto' : '', black ? 'bg-green-500' : 'bg-indigo-900 text-white']"
                     @click="it.link ? handleClickLink(it.link) : false"
                  >
                     Посмотреть
                  </div>-->
               </div>
            </VueSlickCarousel>
         </div>

         <div
            class="grid gap-6 sm:col-span-6 place-items-start place-content-start px-4 py-6 <sm:(place-items-center text-center)"
            :class="[reverse ? 'sm:order-1' : 'sm:order-2']"
         >
            <!-- LazyItemRundomString -->
            <div
               class="text-2xl sm:text-5xl pb-4 px-2 uppercase tracking-[5px]"
               :class="[
                  black
                     ? 'text-shadow-custom-green-10px border-b-6 border-orange-500'
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
               speed: 1500,
               autoplaySpeed: 7500,
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
      @apply px-4 py-4 min-h-32 max-w-screen break-world bg-opacity-85 relative;
   }
}
</style>
