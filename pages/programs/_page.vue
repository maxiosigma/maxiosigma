<template>
  <LayoutPage>
    <!--@touchstart="touchStart"
      @touchEndMethod="touchEnd"-->
    <div class="programs-container">
      <ItemLink
        self
        @click.native.prevent="handleOpen(it.short)"
        :href="'/about'"
        class="programs-link group"
        v-for="(it, i) in links"
        :key="i"
        v-tooltip="{
          disabled: isMobile(),
          content: `<div class='text-center'>${it.description}</div>`,
          html: true,
          distance: 20,
          delay: {
            show: 200,
            hide: 150,
          },
        }"
      >
        <div class="programs-link-title">{{ it.title }}</div>

        <div
          :class="[
            isMobile() ? 'programs-link-description' : 'sm:hidden <sm:programs-link-description',
          ]"
        >
          {{ it.description }}
        </div>
      </ItemLink>
    </div>

    <div v-if="countPages !== 1" :class="['programs-pagination']">
      <div @click="toPrev()" class="cursor-pointer mb-1 prev hover:(text-orange-500)">«</div>
      <div class="flex-center mx-4 mb-0.5 pointer-events-none count">
        <div class="text-orange-300">{{ page }}</div>
        <div class="mx-1 mb-0.5">|</div>
        <div class="text-cyan-300">{{ countPages }}</div>
      </div>
      <div @click="toNext()" class="cursor-pointer mb-1 next hover:(text-orange-500)">»</div>
    </div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Программы",
    }
  },
  asyncData({ store, app, params }) {
    const page = params.page
    const paginaton = app.router.app.isLight() ? 5 : 12

    const reffers = store.state.links

    const countLinks = reffers.length
    const countPages = Math.ceil(countLinks / paginaton)

    const from = page === 1 ? 0 : (page - 1) * paginaton
    const to = page === countPages ? countLinks : page * paginaton - 1

    const links = reffers.filter((it, i) => i >= from && i <= to)

    return { links, countPages, page }
  },
  mounted() {
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
    // place-content-start min-h-200vh
    @apply container my-auto mx-auto grid p-5 text-light-200 gap-5 grid-cols-1 justify-between place-content-center place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6;
  }

  &-pagination {
    @apply rounded-t-md flex-center font-black font-vetka bg-cyan-700 text-white text-xl tracking-wide w-full py-1 px-4 bottom-0;
  }

  &-link {
    // sm: max-w-1/3 md:max-w-1/4 lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10
    @apply rounded-md flex-center flex-col h-auto bg-cyan-700 bg-opacity-80 bg-hero-rain-white-30 bg-0.25r min-h-20 py-4 px-6 transition duration-700 overflow-hidden md:hover:(bg-orange-700);

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