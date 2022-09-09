<template>
   <section class="portfolio-section">
      <!--<ItemPortfolioBlock :black="black" :reverse="reverse">
         <template v-slot:left>
            <VueSlickCarousel v-bind="{ ...slider.common, ...slider.top }">
               <div class="portfolio-project-images" v-for="(it, i) in data.filter((it) => it.top)" :key="i">
                  <ItemMediaStrapiBg class="portfolio-project-image" :src="it.media[0].url" />
               </div>
            </VueSlickCarousel>

            <VueSlickCarousel class="portfolio-project-depiction" v-bind="{ ...slider.common, ...slider.bootom }">
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
      </ItemPortfolioBlock>-->

      <client-only>
         <!-- action === true ? '' : 'hidden', v-if="visio === $store.state.visio"  -->
         <ItemPortfolioBlock
            :black="i % 2 === 1 ? black : !black"
            :class="[]"
            :reverse="toogleIteration(i)"
            v-for="(it, i) in data.filter((it) => it.media.filter((media) => media.mime === 'video/mp4').length > 0)"
            :key="i"
            @visible="(id) => (isVisible = id)"
            :id="(i + 1) * 10"
         >
            <template v-slot:left>
               <div class="portfolio-project-media flex flex-grow">
                  <!-- :class="isVisible == (i + 1) * 10 ? 'opacity-100' : 'opacity-0'" -->
                  <div class="flex-grow w-full transition-all duration-700">
                     <Splide :options="{ rewind: true }" aria-label="Vue Splide Example">
                        <SplideSlide
                           v-for="(media, j) in it.media.filter((media) => media.mime === 'video/mp4')"
                           :key="`media-${i + 1}${j}${i}`"
                        >
                           <ItemMediaStrapiVideoPlayer
                              :title="it.title"
                              :active="isVisible === (i + 1) * 10"
                              :src="'http://localhost:1337' + media.url"
                           >
                              <div></div>
                           </ItemMediaStrapiVideoPlayer>
                        </SplideSlide>

                        <SplideSlide
                           v-for="(media, j) in it.media.filter((media) => media.mime !== 'video/mp4')"
                           :key="`media-${j}${i}${j + 1}`"
                        >
                           <ItemMediaStrapiBg class="portfolio-project-image" :src="media.url" :alt="media.alt" />
                        </SplideSlide>
                     </Splide>
                  </div>

                  <!--  :class="isVisible == (i + 1) * 10 ? 'opacity-100' : 'opacity-10'" -->
                  <!--<ItemMediaStrapiVideoPlayer
                     v-for="(media, j) in it.media.filter((media) => media.mime === 'video/mp4')"
                     :key="`media-${i}${j}`"
                     :title="it.title"
                     :active="isVisible === (i + 1) * 10"
                     :src="'http://localhost:1337' + media.url"
                  >
                     <div></div>
                  </ItemMediaStrapiVideoPlayer>-->

                  <!-- v-if="media.mime !== 'video/mp4'"
                 <ItemMediaStrapiBg
                     class="portfolio-project-image"
                     v-for="(media, j) in it.media.filter((media) => media.mime !== 'video/mp4')"
                     :key="`img-${i}${j}`"
                     :src="media.url"
                     :alt="media.alt"
                  />
                 w-100vw h-100vh max-w-full max-h-40vh -->
               </div>

               {{ isVisible }} {{ (i + 1) * 10 }}
            </template>

            <template v-slot:right>{{ it.title }} {{ it.description }}</template>
         </ItemPortfolioBlock>
      </client-only>
   </section>
</template>

<script>
//import { Splide, SplideSlide } from "@splidejs/vue-splide/src/js/index";
//import "@splidejs/vue-splide/css";
//import "@splidejs/vue-splide/css/sea-green";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
   props: ["black", "reverse", "data", "visio"],
   data() {
      return {
         isVisible: 0,
         action: false,
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

      //console.log(this.$payloadURL(this.route));

      //console.log(this.$refs);
      //console.log(this.$refs.video_50);
      //console.log("this is current videojs instance object", this.nox);
   },
   methods: {
      handleClick() {
         setTimeout(() => (this.action = !this.action), 2500);
      },
      handleClickLink(url) {
         window.open(url);
      },
      toogleIteration(i) {
         return this.reverse ? i % 2 === 0 : i % 2 === 1;
      },
      tooltipLink(url) {
         return {
            show: !isCustomMobile(),
            disabled: isCustomMobile(),
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
   components: {
      VueSlickCarousel,
      //Splide, SplideSlide
   },
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
      &-side {
         @apply max-w-full p-4;
      }

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
         @apply pointer-events-none max-w-full px-4 border-transparent border-none border-[-1px];
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
