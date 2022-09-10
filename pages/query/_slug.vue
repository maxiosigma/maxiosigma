<template>
   <Layout :title="title" :description="description">
      <div class="flex-grow flex-col flex-center text-white">
         <h1 class="text-xl">{{ title }}</h1>
         <p class="text-lg">{{ description }}</p>
         <blockquote class="text-xs">{{ keywords }}</blockquote>
      </div>
   </Layout>
</template>

<script>
export default {
   nuxtI18n: false,
   head() {
      return {
         title: this.title,
         titleTemplate: "%s",
         description: this.description,
         keywords: this.keywords,
      };
   },
   async asyncData({ store, params }) {
      const slug = params.slug;
      const result = store.state.publics?.filter((it) => it.slug === slug)?.[0];
      //console.log(result)
      return {
         title: result?.title,
         description: result?.description,
         keywords: result?.keywords,
      };
   },
   mounted() {
      //console.log(this.title, this.description, this.keywords)
      setTimeout(() => {
         this.routeLight("");
      }, 750);
   },
};
</script>

<style></style>
