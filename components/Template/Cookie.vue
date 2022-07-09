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
    deleteConsent() {
      this.$cookies.set({ name: "cookie_control_consent", value: false })
      window.location.reload()
    },
  },
}
</script>

<style lang="scss">
</style>