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
}
</style>