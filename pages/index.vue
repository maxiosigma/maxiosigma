<template>
  <Layout :bodyStyle="'index'">
    <template v-slot:head>
      <TemplateHead />
    </template>

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
      titleTemplate: this.headTemplate(this?.link ? "%s" : undefined),
      meta: [
        //{
        //  "http-equiv": this?.link?.href ? "refresh" : false,
        //  content: "0.01;URL=" + this?.link?.href,
        //},
        //{ "http-equiv": this?.link?.alt ? "refresh" : false, content: "3;URL=" + this?.link?.alt },
      ],
    }
  },
  data() {
    return {
      link: undefined,
      links: this.$store.state.reffers,
      title: this?.link?.title ?? "Главная",
      description: this?.link?.description,
    }
  },
  async beforeMount() {
    //await this.vkPixel()
  },
  mounted() {
    const route = this.$route
    const query = route?.hash?.replace("#", "") || Object.keys(route?.query)?.[0]
    //console.log(document.location)
    //document.domain

    if (!query) {
      console.log(window.localStorage.getItem("about"))
      console.log(this?.link?.href)

      //try {
      //  if (window.localStorage.getItem("about") ) this.routeLight("about")
      //  else this.routeLight("sentences")
      //} catch {
      //  this.routeLight("about")
      //}

      //!localStorage.getItem('about') || localStorage.getItem('about') === 0 ? this.routeLight('about') : this.routeLight('about')
      //: !localStorage.getItem('business') || localStorage.getItem('business') === 0
      //? this.routeLight('business')
    } else {
      //this.link = this?.links?.filter((ln) => ln?.short === query)[0]
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