<template>
  <!--  :bodyStyle="'index'" -->
  <Layout>
    <template v-slot:head>
      <TemplateHead />
    </template>

    <TemplateCookie />

    <div class="opacity-0">
      <h1 v-text="title"></h1>
      <h2 v-text="description"></h2>
      <p v-text="description"></p>
    </div>
  </Layout>
</template>

<script>
export default {
  nuxtI18n: false,
  head() {
    return {
      title: this.link?.title ?? "Главная",
      ...(this.link?.description && { description: this.link?.description }),
      titleTemplate: this.headTemplate(!!this.link && this.query ? "%s" : undefined),
      meta:
        !!this.link && this.query
          ? [
              { "http-equiv": "refresh", content: "0.01;URL=" + this.link?.href },
              { "http-equiv": "refresh", content: "3;URL=" + this.link?.alt },
            ]
          : false,
    }
  },
  data() {
    return {
      link: undefined,
      query: undefined,
      title: undefined,
      description: undefined,
    }
  },
  mounted() {
    // http://localhost:3000#mw

    this.query = Object.keys(this.$route.query)?.[0] || this.$route.hash?.replace("#", "")

    if (!this.query && this.$cookies?.consent) {
      if (!this.LCG("about")) this.routeLight("about")
      else this.routeLight("sentences/1")
    } else if (this.query) {
      this.link = this.$store.state?.reffers?.filter(
        (ln) => ln?.attributes?.short == this.query
      )?.[0]?.attributes

      this.title = this.link?.title
      this.description = this.link?.description

      if (this.link?.href) setTimeout(() => (location.href = this.link?.href), 1500)
      if (this.link?.alt) setTimeout(() => (location.href = this.link?.alt), 3000)

      if (!this.link) {
        setTimeout(() => window.open("#mw"), 1500)
        setTimeout(() => (location.href = "/about"), 3000)
      }
    } else {
      setTimeout(
        () =>
          this.$toast.show("Выберите и примите файлы cookie", {
            theme: "outline",
            position: "top-center",
            duration: 60000,
          }),
        1000
      )
    }
  },
}
</script>

<style lang="scss">
.index {
  @apply bg-black flex-grow inset-0 fixed;
}
</style>