<template>
   <div class="portfolio-section" :class="[`section-${section}`, black ? 'bg-black text-light-200' : 'bg-light-900 text-indigo-900']">
      <div class="grid container mx-auto sm:grid-cols-12 grid-rows-1">
         <div class="p-4 sm:col-span-6" :class="[reverse ? 'sm:order-2' : 'sm:order-1']">
            <VueSlickCarousel class="" v-bind="{ ...slider.common, ...slider.top }">
               <div class="flex rounded-xl pointer-events-none overflow-hidden" v-for="(it, i) in data.first" :key="i">
                  <ItemMediaStrapiBg
                     class="bg-contain flex-grow bg-center rounded-xl min-h-60 bg-transparent w-full h-full"
                     :src="it.media[0].url"
                  />
               </div>
            </VueSlickCarousel>

            <!-- pointer-events-none  -->
            <VueSlickCarousel class="mt-5 px-5" v-bind="{ ...slider.common, ...slider.bootom }">
               <div class="grid gap-2 text-center" v-for="(it, i) in data.first" :key="i">
                  <div
                     v-if="it.link"
                     class="portfolio-project-link cursor-pointer font-mw mw-info m-3 text-opacity-50 transition duration-500 text-3xl"
                     :class="[black ? 'text-green-500 text-shadow-custom-green-10px' : 'text-indigo-600 text-shadow-custom-indigo-1px']"
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
                     class="text-lg tracking-widest items-center uppercase pointer-events-none"
                     :class="[black ? 'text-shadow-custom-black-5px' : 'text-shadow-custom-black-1px']"
                  >
                     {{ it.title }}
                  </div>

                  <div class="text-lg font-medium tracking-wider font-vetka pointer-events-none">
                     {{ it.description }}
                  </div>
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
               class=""
               :class="[visio === $store.state.visio ? 'portfolio-section-no' : 'portfolio-section-btn', black ? 'black' : 'white']"
               @click="$store.commit('setVisio', visio)"
            >
               Все проекты
            </div>

            <div
               class=""
               :class="[visio === $store.state.visio ? 'portfolio-section-btn' : 'portfolio-section-no', black ? 'black' : 'white']"
               @click="$store.commit('setVisio', 0)"
            >
               Свернуть
            </div>
         </div>
      </div>

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
   props: ["black", "reverse", "data", "visio"],
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
   mounted() {
      if (!this.visio) this.visio = 0;
   },
   methods: {
      //clickAllProjects(value) {
      //   this.$store.commit("setVisio", value);
      //},
      handleClickLink(url) {
         window.open(url);
      },
   },
   components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.portfolio {
   &-section {
      @apply transition-all duration-500 px-4 py-4 min-h-32 max-w-screen break-words bg-opacity-85 relative;

      &-btn {
         @apply uppercase text-xs text-white px-4 py-2 transition duration-700 rounded-md cursor-pointer;

         &.black {
            @apply bg-green-500 shadow-custom-green-20px hover:(bg-orange-500 shadow-custom-orange-10px text-white);
         }

         &.white {
            @apply bg-indigo-500 shadow-custom-blue-10px hover:(bg-orange-500 shadow-custom-orange-20px text-white);
         }
      }

      &-no {
         @apply transition-all duration-500 h-0 max-h-0 min-h-0 overflow-hidden hidden;
      }
   }

   & .slick {
      &-slide {
         @apply pointer-events-none;
      }

      &-center {
         @apply pointer-events-auto;

         & .portfolio-project-link {
            //@apply pointer-events-auto;
            @apply hover:(text-orange-400 text-shadow-custom-orange-20px) #{!important};
         }
      }
   }
}
</style>
