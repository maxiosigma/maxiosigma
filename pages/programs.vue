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
      >
        <div class="programms-link-title">
          {{ it.title }}
        </div>

        <div class="programms-link-description">
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

      //data: Object.values(this.$store.state.links.data)?.reduce((sum, it) => {
      //	if (!!it?.partnership && !!it?.title && !!it?.description && !!it?.short)
      //		sum.push({ title: it.title, description: it.description, short: it.short })

      //	return sum
      //}, []),
    }
  },
  mounted() {
    //console.log(this.links);
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
    @apply container my-auto mx-auto grid text-light-200 gap-5 grid-cols-4 justify-between place-content-center place-items-stretch;
  }

  &-link {
    // sm: max-w-1/3 md:max-w-1/4 lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10
    @apply rounded-md flex-center flex-col h-auto bg-cyan-700 bg-opacity-80 bg-hero-rain-white-30 bg-0.25r m-4 w-full min-h-20 py-4 px-5 transition duration-700 overflow-hidden lg:hover:(bg-orange-700);

    &-title {
      //<sm:uppercase md:(text-base max-w-1/4 py-4 absolute) lg:max-w-1/5 xl:max-w-1/8 2xl:max-w-1/10 pb-2 px-10
      @apply font-semibold h-auto text-center tracking-widest w-auto transition-all text-[2vmin] duration-500 delay-100 overflow-hidden relative <sm:uppercase lg:group-hover:(h-0 w-0) ;
    }

    &-description {
      @apply text-xs text-center transition-all duration-500 delay-200 overflow-hidden md:(duration-300 h-0 w-0 text-left) lg:group-hover:(h-auto w-auto) ;
    }
  }
}
</style>