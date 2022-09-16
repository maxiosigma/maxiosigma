<template>
   <section class="portfolio-section">
      <ItemPortfolioBlock :visible="visible" :black="black" :reverse="reverse">
         <template v-slot:left>
            <VueSlickCarousel v-bind="{ ...slick.common, ...slick.top }">
               <div class="portfolio-project-images" v-for="(it, i) in data.filter((it) => it.top)" :key="i">
                  <ItemMediaStrapiBg class="portfolio-project-image" :src="it.media[0].url" />
               </div>
            </VueSlickCarousel>

            <VueSlickCarousel class="portfolio-project-depiction" v-bind="{ ...slick.common, ...slick.bootom }">
               <div class="portfolio-project-depiction-container" v-for="(it, i) in data.filter((it) => it.top)" :key="i">
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

               <ItemPortfolioButton @click.native="handleClick" :black="black" />
            </div>
         </template>
      </ItemPortfolioBlock>

      <!--   :class="[action ? '' : 'hidden']" -->
      <!--       v-show-slide:`${2000+i*2000}`="action" -->
      <!--       :class="['transition-all duration-2000 ease', action ? 'max-h-auto' : 'max-h-0']" -->

      <!-- v-show-slide:2000="action" -->
      <!-- height: 0px; visibility: hidden; overflow: hidden; transition: height 2s ease 0s; -->
      <!-- height: auto; visibility: visible; overflow: hidden; transition: height 2s ease 0s; -->
      <!--   :class="['duration-2000', action ? 'max-h-10vh visible' : 'max-h-0 invisible']" -->
      <LazyItemPortfolioBlock
         :visible="action"
         :black="i % 2 === 1 ? black : !black"
         :reverse="toogleIteration(i)"
         v-for="(it, i) in data.filter((it) => it.media)"
         :key="i"
         @visible="(id) => (isVisible = id)"
         :id="(i + 1) * 10"
      >
         <template v-slot:left>
            <ItemPortfolioMedia :reverse="toogleIteration(i)" :visible="isVisible" :data="it.media" :i="i" :options="{ slick }" />
         </template>

         <template v-slot:right>
            <ItemPortfolioContent :reverse="toogleIteration(i)" :data="it" :i="i" />
         </template>
      </LazyItemPortfolioBlock>
   </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
   props: ["black", "reverse", "data", "visio", "visible"],
   data() {
      return {
         isVisible: 0,
         action: false,
         refs: this.setRefs(),
         slick: {
            common: {
               dots: false,
               arrows: false,
               infinite: true,
               autoplay: true,
               slidesPerRow: 1,
               slidesToShow: 1,
               centerMode: true,
               slidesToScroll: 1,
               swipeToSlide: false,
               accessibility: false,
               centerPadding: "0px",
               pauseOnDotsHover: false,
               autoplaySpeed: 7500,
               pauseOnFocus: false,
               pauseOnHover: false,
               touchMove: false,
               swipe: false,
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
   mounted() {
      if (!this.visio) this.visio = 0;
   },
   methods: {
      handleClick() {
         setTimeout(() => {
            this.action = !this.action;
            this.$store.commit("setVisio", this.action ? this.visio : 0);
         }, 2500);
      },
      handleClickLink(url) {
         window.open(url);
      },
      toogleIteration(i) {
         return this.reverse ? i % 2 === 0 : i % 2 === 1;
      },
      tooltipLink(url) {
         return {
            show: !this.isCustomMobile(),
            disabled: this.isCustomMobile(),
            content: `<div class='text-center'>Посмотреть работу <br> ${url}</div>`,
            html: true,
            distance: 20,
            delay: {
               show: 200,
               hide: 150,
            },
         };
      },
      setRefs() {
         return this.data.map((it, i) => Number(`${i}${this.visio * 100}`));
      },
   },
   components: { VueSlickCarousel },
};
</script>

<style lang="scss">
.portfolio {
   &-section {
      @apply relative divide-green-500 divide-y-1;

      &-depiction {
         @apply grid gap-6 sm:col-span-6 place-items-start place-content-start px-4 py-6 <sm:(place-items-center text-center);
      }

      &-title {
         @apply text-2xl sm:text-[4.5vmin] pb-4 px-2 uppercase tracking-[5px];

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
         @apply flex pointer-events-none;
      }

      &-image {
         @apply bg-contain flex-grow bg-center min-h-60 bg-transparent w-full h-full;

         & > img {
            @apply rounded-xl overflow-hidden #{!important};
         }
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
         @apply pointer-events-none max-w-full max-h-full h-full px-4 border-transparent border-none border-[-1px];
      }

      &-center {
         @apply pointer-events-auto;

         & .portfolio-project-link {
            @apply hover:(text-orange-400 text-shadow-custom-orange-20px) #{!important};
         }
      }
   }
}

.video-js {
   @apply max-h-24 max-w-36;
}

.splide {
   @apply w-full;

   &__slide {
      @apply px-0 py-8;
   }
}
</style>
