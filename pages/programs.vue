<template>
  <LayoutPage>
    <div class="programms-container">
      <ItemLink
        self
        @click.native.prevent="handleOpen(it.short)"
        :href="'/about'"
        class="programms-link group"
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
        <div class="programms-link-title">{{ it.title }}</div>

        <div
          :class="[
            isMobile() ? 'programms-link-description' : 'sm:hidden <sm:programms-link-description',
          ]"
        >
          {{ it.description }}
        </div>
      </ItemLink>
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
  data() {
    return {
      links: this.$store.state.reffers
        .reduce((sum, it) => {
          if (!!it?.partnership && !!it?.title && !!it?.description && !!it?.short)
            sum.push({ title: it.title, description: it.description, short: it.short, top: it.top })
          return sum
        }, [])
        .sort((a, b) => (a.top < b.top ? 1 : -1)),
    }
  },
  mounted() {
    //console.log(this.links);
    //console.log(this.isMobile())
  },
  methods: {
    handleOpen(short) {
      window.open("/#" + short, "_blank")
    },
  },
}
</script>


<style lang="scss">
.programms {
  &-container {
    // place-content-start min-h-200vh
    @apply container my-auto mx-auto grid p-5 text-light-200 gap-5 grid-cols-1 justify-between place-content-center place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6;
  }

  &-link {
    // sm: max-w-1/3 md:max-w-1/4 lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10
    @apply rounded-md flex-center flex-col h-auto bg-cyan-700 bg-opacity-80 bg-hero-rain-white-30 bg-0.25r min-h-20 py-4 px-6 transition duration-700 overflow-hidden md:hover:(bg-orange-700);

    &-title {
      //<sm:uppercase md:(text-base max-w-1/4 py-4 absolute) lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10 pb-2 px-10
      @apply flex-center font-semibold h-auto text-center tracking-widest opacity-100 transition-all text-[2vmin] duration-500 delay-200 overflow-hidden relative <sm:(uppercase text-sm mb-2) ;
      // @apply lg:group-hover:(h-0 opacity-0) ;
    }

    &-description {
      @apply flex-center mt-3 text-center text-[1.5vmin] <sm:(text-xs text-center) ;
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