<template>
  <LayoutPage>
    <div></div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Дизайнер",
    }
  },
  async asyncData({ store, $strapi, app }) {
    //const paginaton = app.router.app.isLight() ? 5 : 12
    //const countLinks = store.state.links.length
    //const countPages = Math.ceil(countLinks / paginaton)
    //return { countPages }

    const gql = store.state.gql.designerWorks
    const content = (await $strapi.graphql({ query: gql })).designerWorks.data

    console.log(content)

    //const content = store.state

    return { content }
  },
}
</script>

<style lang="scss">
</style>