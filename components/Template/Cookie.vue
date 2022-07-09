<template>
  <CookieControl :locale="lang"></CookieControl>
</template>

<script>
export default {
  data() {
    return {
      lang: this.isLangGlobal(),
    }
  },
  mounted() {
    //console.log(this.$cookies, this.$cookies)
  },
  methods: {
    //deleteConsent() {
    //  this.$cookies.set({ name: "cookie_control_consent", value: false })
    //  window.location.reload()
    //},
  },
}
</script>

<style lang="scss">
.cookieControl {
  @apply flex-center;

  &__Bar {
    @apply bg-cyan-700 bg-opacity-95;
  }
  &__BarContainer {
    @apply flex-center;

    & > div {
      @apply text-justify break-words md:pr-8;
    }
  }
  &__BarButtons {
    @apply grid gap-2 justify-center items-center;

    & > button {
      @apply border-transparent bg-cyan-600 bg-opacity-95 border-2 w-full transition duration-300 hover:(bg-cyan-500 border-cyan-600) ;
      @apply ml-0 #{!important};
    }
  }
  &__ControlButton {
    @apply md:(h-8 w-8) ;
    @apply flex-center h-4 m-0 min-h-0 min-w-0 py-2 px-2 inset-0 w-4 relative #{!important};

    & svg,
    & > svg {
      @apply md:(h-5 w-5) hover:text-cyan-300 ;
      @apply h-5 min-h-0 min-w-0 w-5 absolute #{!important};
    }
  }
}
</style>