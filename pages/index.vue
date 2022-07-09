<template>
  <!--  :bodyStyle="'index'" -->
  <Layout>
    <template v-slot:head>
      <TemplateHead />
    </template>

    <div class="text-white">AAAAAAAA</div>

    <div class="opacity-0">
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <p>{{ description }}</p>
    </div>
  </Layout>
</template>

<script>
export default {
  nuxtI18n: false,
  head() {
    return {
      title: this.title,
      ...(this.description && { description: this.description }),
      titleTemplate: this.headTemplate(this.link ? "%s" : undefined),
      meta: !!this.link
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
      links: this.$store.state.reffers,
      title: this.link?.title ?? "Главная",
      description: this.link?.description,
    }
  },
  async beforeMount() {
    await this.vkPixel()

    //console.log(this.$cookies)
  },
  mounted() {
    const route = this.$route
    const query = Object.keys(route?.query)?.[0] || route?.hash?.replace("#", "")
    //console.log(document.location)
    //document.domain

    //console.log(this.lang)

    if (!query) {
      //if (!this.LCG("about")) this.routeLight("about")
      //else this.routeLight("sentences")
      //console.log(document.cookie)
      //console.log(window.localStorage.getItem("about"), localStorage.getItem("about"))
      //console.log(!!this.LCG("about"))
      //!localStorage.getItem('about') || localStorage.getItem('about') === 0 ? this.routeLight('about') : this.routeLight('about')
      //: !localStorage.getItem('business') || localStorage.getItem('business') === 0
      //? this.routeLight('business')
    } else {
      //this.link = this.links?.filter((ln) => ln?.short === query)[0]
      //if (this.link?.href) setTimeout(() => (location.href = this.link?.href), 1500)
      //if (this.link?.alt) setTimeout(() => (location.href = this.link?.alt), 3000)
      //if (!this.link) {
      //  window.open("#mw")
      //  setTimeout(() => (location.href = "/about"), 1000)
      //}
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