<template>
  <Layout>
    <nuxt-link
      class="hidden"
      :to="`/${$i18n.locale}/query/${it}`"
      v-for="(it, i) in publics"
      :key="i"
    ></nuxt-link>
  </Layout>
</template>

<script>
export default {
  head() {
    return {
      title: "Запросы",
    }
  },
  async asyncData({ store, app }) {
    const publics = store.state.publics.filter((it) => it.slug).map((it) => it.slug)
    //console.log(publics)
    return { publics }
  },
  mounted() {
    this.routeLight("")
  },
}
</script>