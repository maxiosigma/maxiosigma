<template>
  <LayoutPage>
    <div class="text-white py-15 designer">
      <div
        class="font-vetka font-black text-shadow-lg text-center text-5xl tracking-[5px] uppercase"
      >
        Дизайнерские работы
      </div>

      <div class="mt-15 content">
        <div class="" v-for="(it, i) in content" :key="i">
          {{ it.title }}

          {{ it.media.data[0].attributes.url }}

          {{ it.assets }}

          <!--{{ it.assets.technologies }}-->

          <!--{{ it.assets.models.data.attributes }}-->

          <div class="my-2">
            {{ it }}
          </div>
        </div>
      </div>

      <div></div>
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

    return { content }
  },
}
</script>

<style lang="scss">
</style>