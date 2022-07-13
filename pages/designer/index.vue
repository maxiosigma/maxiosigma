<template>
  <LayoutPage>
    <div class="text-white py-15 designer">
      <div
        class="font-vetka font-black text-shadow-lg text-center text-5xl tracking-[5px] uppercase"
      >
        Дизайнерские работы
      </div>

      <div class="mt-15 designer-content">
        <ItemTimeline :content="content"></ItemTimeline>
        <!--<div class="" v-for="(it, i) in content" :key="i">
        </div>-->
      </div>

      <!--<div></div>-->
    </div>
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
    const gql = store.state.gql.designerWorks
    const content = (await $strapi.graphql({ query: gql })).designerWorks?.data?.map(
      (it) => it.attributes
    )

    console.log(content)

    // it.title
    // it.media.data[0].attributes.url
    // it.assets
    // it.assets.technologies
    // it.assets.models.data.attributes

    return { content }
  },
}
</script>

<style lang="scss">
</style>