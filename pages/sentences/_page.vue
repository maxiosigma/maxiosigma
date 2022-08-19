<template>
   <LayoutPage :title="title" :description="description">
      <!--@touchstart="touchStart"
      @touchEndMethod="touchEnd"-->
      <div class="sentences-container" itemscope>
         <!-- v-gsap.fromTo="[
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.75, delay: 1.5 + 0.1 * intRandom(1, i) + i * 0.05 },
        ]" -->
         <ItemLink
            self
            nolang
            blank
            @click.native.prevent="handleOpen(it.short)"
            :href="'?' + it.short"
            :class="[
               'sentences-link group',
               stringRandom([
                  'rounded-tl-lg rounded-br-lg',
                  'rounded-br-lg rounded-tl-lg',
                  'rounded-r-lg',
                  'rounded-l-lg',
                  'rounded-t-lg',
                  'rounded-b-lg',
                  'rounded-lg',
               ]),
            ]"
            v-for="(it, i) in links"
            :key="i"
            v-anime="animateAnimeBlock({ dl: 1.5 + 0.1 * intRandom(1, i) + i * 0.05, dr: 1.75 })"
         >
            <div class="sentences-image-container relative">
               <!-- transition-all duration-300 group-hover:opacity-25 -->
               <div v-if="it.images.length > 0" class="relative">
                  <div v-for="(img, j) in it.images" :key="j">
                     <LazyItemImgStrapiBg
                        :src="img.url"
                        class="sentences-image group-image smoothly-300 group-hover:opacity-85"
                        v-anime.set="it.images.length === 1 ? {} : { scale: 2, opacity: 0 }"
                        v-anime="
                           it.images.length === 1
                              ? {}
                              : {
                                   loop: 2,
                                   scale: 1.05,
                                   opacity: 2,
                                   duration: (j + 1) * 3000 + i * 400,
                                   delay: (j + 1) * 3100 + i * 400,
                                }
                        "
                     />
                  </div>
               </div>

               <LazyItemImgStrapiBg
                  v-else
                  class="sentences-image smoothly-300 group-hover:opacity-85"
                  :src="`https://picsum.photos/300/200?random=${i}`"
               ></LazyItemImgStrapiBg>

               <div class="sentences-tags">
                  <div class="sentences-tags-field">
                     <div
                        class="flex-col sentences-tags-container group"
                        v-for="(tag, j) in it.tags"
                        :key="j"
                        v-anime="{
                           loop: false,
                           translateX: [500, 0],
                           scale: [0, 1],
                           duration: 500,
                           delay: (it.tags.length - (j + 1)) * 150 + (i + 1) * 500 + 1500,
                        }"
                     >
                        <div
                           v-if="it.top && j == 0"
                           v-anime="{
                              loop: false,
                              scale: [0, 1],
                              duration: 1000,
                              delay: it.tags.length * 150 + (i + 1) * 1000 + 2500,
                           }"
                           :class="[
                              'sentences-top !absolute font-ft ft-fire  text-xl bottom-[135%]',
                              'text-stroke-indigo-700 text-yellow-400 text-stroke-1',
                              'sm:(transition-all opacity-25 duration-300 group-hover:opacity-100)',
                           ]"
                        ></div>

                        <div class="sentences-tags-titile">{{ tag }}</div>
                     </div>
                  </div>

                  <!--<div class="bg-opacity-100 py-0.5 px-1 -bottom-3.5 sentences-tags-container absolute">
              <div
                class="text-5px sentences-tags-titile"
                v-text="it.images.length > 0 ? 'Оригинал' : 'Случайное'"
              ></div>
            </div>-->
               </div>
            </div>

            <!-- group-hover:bg-indigo-600 -->
            <div
               class="sentences-content smoothly-300"
               v-tooltip="
                  isMobile()
                     ? {}
                     : {
                          //disabled: isMobile(),
                          content: `<div class='text-center'>${it.description}</div>`,
                          html: true,
                          distance: 20,
                          delay: {
                             show: 200,
                             hide: 150,
                          },
                       }
               "
            >
               <div class="sentences-link-title">{{ it.title }}</div>

               <div :class="[isMobile() ? 'sentences-link-description' : 'sm:hidden <sm:sentences-link-description']">
                  {{ it.description }}
               </div>
            </div>

            <div class="sentences-button">Подробнее</div>
         </ItemLink>
      </div>

      <div v-if="countPages !== 1" :class="['sentences-pagination']">
         <div :class="['sentences-pagination-container']">
            <div @click="toPrev()" :class="['cursor-pointer mb-1 prev hover:(text-orange-500)', { hidden: page == 1 }]">«</div>
            <div class="flex-center mx-5 mb-0.5 pointer-events-none count">
               <div class="text-orange-300">{{ page }}</div>
               <div class="mx-2 mb-0.5">|</div>
               <div class="text-cyan-300">{{ countPages }}</div>
            </div>
            <div @click="toNext()" :class="['cursor-pointer mb-1 next hover:(text-orange-500)', { hidden: page == countPages }]">»</div>
         </div>
      </div>
   </LayoutPage>
</template>

<script>
export default {
   head() {
      return {
         title: this.title,
         description: this.description,
      };
   },

   asyncData({ store, app, params }) {
      const page = params.page;
      const paginaton = app.router.app.isLight() ? 5 : 12;

      const reffers = store.state.links;

      const countLinks = reffers.length;
      const countPages = Math.ceil(countLinks / paginaton);

      const from = page === 1 ? 0 : (page - 1) * paginaton;
      const to = page === countPages ? countLinks : page * paginaton - 1;

      const links = reffers
         .filter((it, i) => i >= from && i <= to)
         .map((value) => ({ ...value, sorter: Math.random() }))
         .sort((a, b) => a.sorter - b.sorter);

      const title = "Предложения : " + page;
      const description =
         links
            .map((it) => it?.description.slice(0, 15))
            .join(", ")
            .slice(0, 157) + "...";

      return { links, countPages, page, title, description };
   },
   mounted() {
      if (this.page > this.countPages || this.page == 0) this.routeLight("sentences/1");
   },
   methods: {
      handleOpen(short) {
         window.open("/?" + short, "_blank");
      },
      toNext() {
         const nxt = this.page - 1 + 2;
         if (nxt !== this.countPages + 1) this.routeLight(`sentences/${nxt}`);
         else alert("Вы на последней странице");
      },
      toPrev() {
         const prv = this.page - 2 + 1;
         if (prv !== 0) this.routeLight(`sentences/${prv}`);
         else alert("Вы на первой странице");
      },
   },
};
</script>

<style lang="scss">
.sentences {
   &-container {
      // place-content-start min-h-200vh h-200vh
      @apply container mx-auto mt-auto grid p-5 text-light-200 gap-5 grid-cols-1 relative justify-between place-content-center place-items-stretch sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6;
   }

   &-tags {
      //justify-items-end items-end justify-end place-items-end
      @apply bg-transparent font-black text-white text-right tracking-widest grid pl-2 right-1 bottom-1 text-8px z-50 gap-1 justify-end uppercase absolute;

      &-field {
         //justify-items-end justify-end place-items-end items-end grid-flow-row-dense grid-cols-5 grid-rows-2
         @apply grid gap-1 place-items-end;
         // grid-flow-col-dense place-items-center
         //grid-flow-col grid-flow-col-dense

         //grid-template-columns: repeat(1, minmax(0, 1fr));
         //grid-template-columns: repeat(5, 1fr);
      }

      &-container {
         @apply rounded-md flex-center bg-opacity-85 bg-indigo-700 border-indigo-600 border-1 border-opacity-50 py-1 px-2 transition duration-300 elevation-1;
      }

      &-titile {
         @apply rounded-md text-shadow-xl text-center opacity-95 uppercase;
      }
   }

   &-image {
      @apply bg-cover bg-top bg-cyan-800 w-full min-h-60 md:min-h-40;

      &.group-image {
         @apply inset-0 absolute;
      }

      &-container {
         @apply bg-cyan-800 w-full min-h-60 overflow-hidden md:min-h-40;
      }
   }

   &-pagination {
      @apply mx-auto mb-auto mt-4;

      &-container {
         @apply bg-self-main rounded-md flex-center font-black font-vetka text-white text-xl mb-8 tracking-wide px-4 pt-1 pb-2;
      }
   }

   &-content {
      @apply bg-self-main flex-grow flex-center flex-col m-auto bg-hero-bank-note-white-5 bg-opacity-50 bg-3r text-center w-full py-4 px-4 sm:(group-hover:(transition duration-700 bg-green-700 bg-opacity-85));
   }

   &-button {
      @apply bg-self-main font-bold bg-opacity-25 bg-hero-bank-note-white-5 bg-3r mt-1 text-xs text-center tracking-widest w-full py-2 uppercase sm:(duration-700 transition group-hover:(bg-orange-700 bg-opacity-85));
   }

   &-link {
      // sm: max-w-1/3 md:max-w-1/4 lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10
      @apply flex flex-col h-auto items-center justify-start overflow-hidden;
      // md:hover:(bg-orange-700 bg-opacity-100)

      &-title {
         //<sm:uppercase md:(text-base max-w-1/4 py-4 absolute) lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10 pb-2 px-10  text-[2vmin]
         @apply flex-center font-semibold h-auto text-center text-base tracking-widest opacity-100 transition-all duration-500 delay-200 overflow-hidden relative <sm:(uppercase text-base mb-2);
         // @apply lg:group-hover:(h-0 opacity-0) ;
      }

      &-description {
         //text-[1.5vmin]
         @apply flex-center mt-3 text-center text-sm <sm:(text-xs mt-1 text-center);
         // md:(h-0 opacity-0 text-[1.5vmin] text-left transition-all duration-500 delay-300 overflow-hidden)
         //@apply lg:group-hover:(h-auto opacity-100) ;
      }
   }
}

//.v-popper,
//.v-popper__inner,
//.v-popper__popper--shown ,
.v-popper {
   &__popper {
      //bg-white text-black
      @apply rounded-lg max-w-1/3 #{!important};
   }
   &__inner {
      @apply bg-white rounded-lg border-5 border-cyan-700 text-black #{!important};
   }
   &__arrow {
      &-container {
         //@apply border-white #{!important};
         //@apply scale-500 filter;
      }
      &-outer {
         @apply border-cyan-700 #{!important};
      }
      &-inner {
         //@apply border-white #{!important};
      }
   }
}
</style>
