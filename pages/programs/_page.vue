<template>
  <LayoutPage>
    <!--@touchstart="touchStart"
      @touchEndMethod="touchEnd"-->
    <div class="programs-container">
      <ItemLink
        self
        @click.native.prevent="handleOpen(it.short)"
        :href="'/about'"
        :class="[
          'programs-link group',
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
      >
        <div class="programs-image-container">
          <div v-if="it.images.length > 0" class="relative">
            <ItemImgStrapiBg
              v-for="(img, j) in it.images"
              :src="img.url"
              class="programs-image group-image"
              :key="j"
              v-anime="{
                loop: true,
                opacity: 0,
                duration: 5000,
                delay: j * 5000,
              }"
            />
          </div>

          <ItemImgStrapiBg
            v-else
            class="programs-image"
            :src="`https://source.unsplash.com/random/300x200?sig=${i}`"
          />
        </div>

        <!--v-anime="animateBlock({ dl: 1.5 + 0.1 * intRandom(1, i) + i * 0.05, dr: 0.01 })"-->

        <div
          class="programs-content"
          v-tooltip="
            isMobile()
              ? {
                  disabled: true,
                }
              : {
                  disabled: isMobile(),
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
          <div class="programs-link-title">{{ it.title }}</div>

          <div
            :class="[
              isMobile() ? 'programs-link-description' : 'sm:hidden <sm:programs-link-description',
            ]"
          >
            {{ it.description }}
          </div>
        </div>

        <div class="programs-button">Подробнее</div>
      </ItemLink>
    </div>

    <div v-if="countPages !== 1" :class="['programs-pagination']">
      <div :class="['programs-pagination-container']">
        <div
          @click="toPrev()"
          :class="['cursor-pointer mb-1 prev hover:(text-orange-500)', { hidden: page == 1 }]"
        >
          «
        </div>
        <div class="flex-center mx-5 mb-0.5 pointer-events-none count">
          <div class="text-orange-300">{{ page }}</div>
          <div class="mx-2 mb-0.5">|</div>
          <div class="text-cyan-300">{{ countPages }}</div>
        </div>
        <div
          @click="toNext()"
          :class="[
            'cursor-pointer mb-1 next hover:(text-orange-500)',
            { hidden: page == countPages },
          ]"
        >
          »
        </div>
      </div>
    </div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Предложения",
      description: "Предложения-" + this.page,
    }
  },
  async asyncData({ store, app, params }) {
    const page = params.page
    const paginaton = app.router.app.isLight() ? 5 : 9

    const reffers = store.state.links

    const countLinks = reffers.length
    const countPages = Math.ceil(countLinks / paginaton)

    const from = page === 1 ? 0 : (page - 1) * paginaton
    const to = page === countPages ? countLinks : page * paginaton - 1

    const links = reffers.filter((it, i) => i >= from && i <= to)

    return { links, countPages, page }
  },
  mounted() {
    if (this.page > this.countPages || this.page == 0) this.routeLight("programs/1")
    //console.log(this.links, this.countPages, this.page)
  },
  methods: {
    handleOpen(short) {
      window.open("/#" + short, "_blank")
    },
    toNext() {
      const nxt = this.page - 1 + 2
      if (nxt !== this.countPages + 1) this.routeLight(`programs/${nxt}`)
      else alert("Вы на последней странице")
    },
    toPrev() {
      const prv = this.page - 2 + 1
      if (prv !== 0) this.routeLight(`programs/${prv}`)
      else alert("Вы на первой странице")
    },
    //touchStart(touchEvent) {
    //  if (touchEvent.changedTouches.length !== 1) {
    //    return
    //  }
    //  const posXStart = touchEvent.changedTouches[0].clientX
    //  addEventListener("touchend", (touchEvent) => this.touchEnd(touchEvent, posXStart), {
    //    once: true,
    //  })
    //},
    //touchEnd(touchEvent, posXStart) {
    //  if (touchEvent.changedTouches.length !== 1) {
    //    return
    //  }
    //  const posXEnd = touchEvent.changedTouches[0].clientX
    //  if (posXStart < posXEnd) {
    //    this.toPrev()
    //  } else if (posXStart > posXEnd) {
    //    this.toNext()
    //  }
    //},
  },
}
</script>


<style lang="scss">
.programs {
  &-container {
    // place-content-start min-h-200vh h-200vh
    @apply container mx-auto mt-auto grid p-5 text-light-200 gap-5 grid-cols-1 justify-between place-content-center place-items-stretch sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4;
  }

  &-image {
    @apply bg-cover bg-top bg-cyan-800 w-full min-h-60 md:min-h-40;

    &.group-image {
      @apply inset-0 absolute;
    }

    &-container {
      @apply bg-cyan-800 w-full min-h-60 md:min-h-40;
    }
  }

  &-pagination {
    @apply mx-auto mb-auto mt-4;

    &-container {
      @apply rounded-md flex-center font-black font-vetka bg-cyan-700 text-white text-xl mb-4 tracking-wide px-4 pt-1 pb-2;
    }
  }

  &-content {
    @apply flex-grow flex-center flex-col m-auto bg-cyan-700 bg-opacity-50 bg-hero-rain-white-30 bg-0.25r text-center w-full py-4 px-4  sm:(hover:(transition duration-700 bg-green-700 bg-opacity-85)) ;
  }

  &-button {
    @apply font-bold bg-cyan-700 bg-opacity-25 bg-hero-rain-white-30 bg-0.25r mt-1 text-xs text-center tracking-widest w-full py-2 uppercase sm:(duration-700  transition hover:(bg-orange-700 bg-opacity-85))  ;
  }

  &-link {
    // sm: max-w-1/3 md:max-w-1/4 lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10
    @apply flex flex-col h-auto items-center justify-start overflow-hidden;
    // md:hover:(bg-orange-700 bg-opacity-100)

    &-title {
      //<sm:uppercase md:(text-base max-w-1/4 py-4 absolute) lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10 pb-2 px-10  text-[2vmin]
      @apply flex-center font-semibold h-auto text-center text-base tracking-widest opacity-100 transition-all duration-500 delay-200 overflow-hidden relative <sm:(uppercase text-base mb-2) ;
      // @apply lg:group-hover:(h-0 opacity-0) ;
    }

    &-description {
      //text-[1.5vmin]
      @apply flex-center mt-3 text-center text-sm <sm:(text-xs mt-1 text-center) ;
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