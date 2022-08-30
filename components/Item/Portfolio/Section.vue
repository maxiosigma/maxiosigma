<template>
   <section class="portfolio-section">
      <ItemPortfolioBlock :black="black" :reverse="reverse">
         <template v-slot:left>
            <VueSlickCarousel v-bind="{ ...slider.common, ...slider.top }">
               <div class="portfolio-project-images" v-for="(it, i) in data.first" :key="i">
                  <ItemMediaStrapiBg class="portfolio-project-image" :src="it.media[0].url" />
               </div>
            </VueSlickCarousel>

            <VueSlickCarousel class="portfolio-project-depiction" v-bind="{ ...slider.common, ...slider.bootom }">
               <div class="portfolio-project-depiction-container" v-for="(it, i) in data.first" :key="i">
                  <div
                     v-if="it.link"
                     :class="['portfolio-project-link', toogleBlack(black), 'font-mw mw-info']"
                     @click="it.link ? handleClickLink(it.link) : false"
                     v-tooltip="tooltipLink(it.link)"
                  ></div>

                  <div :class="['portfolio-project-title', toogleBlack(black)]">{{ it.title }}</div>
                  <div :class="['portfolio-project-description']">{{ it.description }}</div>
               </div>
            </VueSlickCarousel>
         </template>

         <template v-slot:right>
            <div class="portfolio-section-depiction">
               <ItemRundomString :class="['portfolio-section-title ', toogleBlack(black)]" :no="true">
                  <slot name="title"></slot>
               </ItemRundomString>

               <div class="text-base grid gap-4"><slot name="description"></slot></div>

               <!--  :text="['Все проекты', 'Свернуть']" -->
               <ItemPortfolioButton :black="black" />
               <!--  @click.native="$store.commit('setVisio', visio)" -->

               <!--<div
                  :class="[visio === $store.state.visio ? 'portfolio-block-no' : 'portfolio-block-btn', toogleBlack(black)]"
                  @click="$store.commit('setVisio', visio)"
               >
                  Все проекты
               </div>

               <div
                  :class="[visio === $store.state.visio ? 'portfolio-block-btn' : 'portfolio-block-no', toogleBlack(black)]"
                  @click="$store.commit('setVisio', 0)"
               >
                  Свернуть
               </div>-->
            </div>
         </template>
      </ItemPortfolioBlock>

      <client-only>
         <!-- v-if="visio === $store.state.visio" -->

         <ItemPortfolioBlock
            :class="[visio === $store.state.visio ? '' : 'hidden', i % 2 == 0 ? toogleBlack(black, true) : toogleBlack(black)]"
            v-for="(it, i) in data.second"
            :key="i"
         >
            <template v-slot:left>{{ it.title }}</template>
            <template v-slot:right>{{ it.description }}</template>
         </ItemPortfolioBlock>
      </client-only>
   </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
   props: ["black", "reverse", "data", "visio"],
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
      handleClickLink(url) {
         window.open(url);
      },
      tooltipLink(url) {
         return this.isMobile()
            ? {}
            : {
                 content: `<div class='text-center'>Посмотреть работу <br> ${url}</div>`,
                 html: true,
                 distance: 20,
                 delay: {
                    show: 200,
                    hide: 150,
                 },
              };
      },
   },
   components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.portfolio {
   &-section {
      @apply relative;

      &-depiction {
         @apply grid gap-6 sm:col-span-6 place-items-start place-content-start px-4 py-6 <sm:(place-items-center text-center);
      }

      &-title {
         @apply text-2xl sm:text-5xl pb-4 px-2 uppercase tracking-[5px];

         &.black {
            @apply text-shadow-custom-green-10px border-b-6 border-orange-500;
         }

         &.white {
            @apply text-shadow-custom-blue-2px border-b-6 border-orange-500;
         }
      }
   }

   &-project {
      &-images {
         @apply flex rounded-xl pointer-events-none overflow-hidden;
      }

      &-image {
         @apply bg-contain flex-grow bg-center rounded-xl min-h-60 bg-transparent w-full h-full;
      }

      &-depiction {
         @apply mt-5 px-5;

         &-container {
            @apply grid gap-2 text-center;
         }
      }

      &-link {
         @apply cursor-pointer m-3 text-opacity-50 transition duration-500 text-3xl;

         &.black {
            @apply text-green-500 text-shadow-custom-green-10px;
         }

         &.white {
            @apply text-indigo-600 text-shadow-custom-indigo-1px;
         }
      }

      &-title {
         @apply text-lg tracking-widest items-center uppercase pointer-events-none;

         &.black {
            @apply text-shadow-custom-black-5px;
         }

         &.white {
            @apply text-shadow-custom-black-1px;
         }
      }

      &-description {
         @apply text-lg font-medium tracking-wider font-vetka pointer-events-none;
      }
   }

   &-block {
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

      &.black {
         @apply bg-black text-light-200;
      }
      &.white {
         @apply bg-light-900 text-indigo-900;
      }
   }

   & .slick {
      &-slide {
         @apply pointer-events-none;
      }

      &-center {
         @apply pointer-events-auto;

         & .portfolio-project-link {
            @apply hover:(text-orange-400 text-shadow-custom-orange-20px) #{!important};
         }
      }
   }
}
</style>
