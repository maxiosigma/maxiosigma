<template>
  <!--  :bodyStyle="'index'" -->
  <Layout>
    <template v-slot:head>
      <TemplateHead />
    </template>

    <TemplateCookie />

    <div class="opacity-0">
      <h1>{{ link.title }}</h1>
      <h2>{{ link.description }}</h2>
      <p>{{ link.description }}</p>
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
              //{ "http-equiv": "refresh", content: "0.01;URL=" + this.link?.href },
              //{ "http-equiv": "refresh", content: "3;URL=" + this.link?.alt },
            ]
          : false,
    }
  },
  data() {
    return {
      link: undefined,
      query: undefined,
    }
  },
  //async beforeMount() {
  //  //await this.vkPixel()

  //  //console.log(this.$cookies.consent)
  //},
  mounted() {
    this.query = Object.keys(this.$route?.query)?.[0] || this.$route?.hash?.replace("#", "")

    //const query = Object.keys(this.$route?.query)?.[0] || this.$route?.hash?.replace("#", "")
    //console.log(document.location)
    //document.domain

    //console.log(this.lang)

    if (!this.query && this.$cookies?.consent) {
      if (!this.LCG("about")) this.routeLight("about")
      else this.routeLight("sentences/1")
      //console.log(document.cookie)
      //console.log(window.localStorage.getItem("about"), localStorage.getItem("about"))
      //console.log(!!this.LCG("about"))
      //!localStorage.getItem('about') || localStorage.getItem('about') === 0 ? this.routeLight('about') : this.routeLight('about')
      //: !localStorage.getItem('business') || localStorage.getItem('business') === 0
      //? this.routeLight('business')
    } else if (this.query) {
      this.link = this.$store.state?.reffers?.filter(
        (ln) => ln?.attributes?.short == this.query
      )?.[0]?.attributes

      console.log(this.link)

      //if (this.link?.href) setTimeout(() => (location.href = this.link?.href), 1500)
      //if (this.link?.alt) setTimeout(() => (location.href = this.link?.alt), 3000)

      //if (!this.link) {
      //  setTimeout(() => window.open("#mw"), 1500)
      //  setTimeout(() => (location.href = "/about"), 3000)
      //}
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

    //setTimeout(() => this.routeLight("about"), 4500)
  },
  //http://localhost:3000/ru-ru#mw
  //async asyncData({ $strapi, store }) {
  //	try {
  //		const links = (await $strapi.graphql({ query: store.state.gql.links })).links?.data?.map((it) => it.attributes)
  //		return { links }
  //	} catch (error) {
  //		return {}
  //	}
  //},
}
</script>

<style lang="scss">
.index {
  @apply bg-black flex-grow inset-0 fixed;
}
</style>