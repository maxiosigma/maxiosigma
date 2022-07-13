<template>
  <!--  :bodyStyle="'index'" -->
  <Layout>
    <template v-slot:head>
      <TemplateHead />
    </template>

    <TemplateCookie class="flex-grow" />

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
        !!this.link && this.qhash
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
      qhash: undefined,
      title: undefined,
      description: undefined,
    }
  },
  async mounted() {
    // http://localhost:3000#mw

    this.query = Object.keys(this.$route.query)?.[0]
    this.hash = this.$route.hash?.replace("#", "")

    const anti_utm = this.query?.indexOf("utm") !== -1

    this.qhash = (this.query && !anti_utm) || this.hash

    if (!this.qhash) {
      if (!this.LCG("about")) this.routeLight("about")
      else this.routeLight("sentences/1")
    } else {
      //if (this.qhash)
      this.link = this.$store.state?.reffers?.filter(
        (ln) => ln?.attributes?.short == this.qhash
      )?.[0]?.attributes

      this.title = this.link?.title
      this.description = this.link?.description

      if (this.link?.href) setTimeout(() => (location.href = this.link?.href), 1500)
      if (this.link?.alt) setTimeout(() => (location.href = this.link?.alt), 3000)

      if (!this.link) {
        setTimeout(() => window.open("#mw"), 1500)
        setTimeout(() => (location.href = "/about"), 3000)
      }
    }
  },
}
</script>

<style lang="scss">
.index {
  @apply bg-black flex-grow inset-0 fixed;
}
</style>