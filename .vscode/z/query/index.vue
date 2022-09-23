<template>
   <Layout :title="title" :description="description">
      <nuxt-link class="hidden" :to="`/query/${it}`" v-for="(it, i) in publics" :key="i"></nuxt-link>
   </Layout>
</template>

<script>
export default {
   nuxtI18n: false,
   head() {
      return {
         title: this.title,
         description: this.description,
      };
   },
   data() {
      return {
         title: "Запросы",
         description: "Запросы на все тематики",
      };
   },
   async asyncData({ store, app }) {
      const publics = store.state.publics?.filter((it) => it.slug).map((it) => it.slug);
      //console.log(publics)
      return { publics };
   },
   mounted() {
      this.routeLight("");
   },
};
</script>
