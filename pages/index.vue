<template>
  <Layout>
    <!--<template v-slot:head>
      <TemplateHead />
    </template>-->

    <div class="flex-grow flex-center opacity-5">
      <h1>{{ title }}</h1>
      <h2>{{ title }}</h2>
      <h3>{{ title }}</h3>
      <h4>{{ title }}</h4>
      <h5>{{ title }}</h5>
      <h6>{{ title }}</h6>

      <p>{{ description }}</p>

      <ItemLink href="about">Автор</ItemLink>
    </div>
  </Layout>
</template>

<script>
export default {
  nuxtI18n: false,
  head() {
    return {
      title: !this.isRedirect() && !this.link?.title ? "Добро пожаловать" : this.link?.title,
      description:
        !this.isRedirect() && !this.link?.description
          ? "Общедоступная платформа Макса для предложений и всецелого получения полезностей"
          : this.link?.description,
      titleTemplate: this.headTemplate(!!this.link && this.query ? "%s" : undefined),
      meta: this.isRedirect()
        ? [
            { "http-equiv": "refresh", content: "0.5;URL=" + this.link?.href },
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
  async beforeMount() {
    await this.loadPage()
  },
  methods: {
    loadPage() {
      // https://172.27.240.1:3000?mw
      // https://172.27.240.1:3000#mw

      this.query = Object.keys(this.$route.query)?.[0]
      this.hash = this.$route.hash?.replace("#", "")
      const anti_utm = this.query?.indexOf("utm") !== -1
      this.qhash = (this.query && !anti_utm) || this.hash

      if (!this.qhash) {
        setTimeout(() => {
          if (!this.LCG("about")) this.routeLight("about")
          else this.routeLight("sentences/1")
        }, 500)
      } else {
        this.link = this.$store.state?.reffers?.filter((ln) => {
          const short = ln?.attributes?.short
          return short == this.query || short == this.hash
        })?.[0]?.attributes

        this.title = this.link?.title
        this.description = this.link?.description

        if (this.link?.href) setTimeout(() => (location.href = this.link?.href), 1500)
        if (this.link?.alt) setTimeout(() => (location.href = this.link?.alt), 3000)

        if (!this.link) {
          //setTimeout(() => window.open("#mw"), 1500)
          setTimeout(() => this.routeLight("about"), 3000)
        }
      }
    },
    isRedirect() {
      return !!this.link && this.qhash
    },
  },
}
</script>

<style lang="scss">
.index {
  @apply bg-black flex-grow inset-0 fixed;
}
</style>