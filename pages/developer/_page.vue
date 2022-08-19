<template>
   <LayoutPage :title="title" :description="description"></LayoutPage>
</template>

<script>
export default {
   head() {
      return {
         title: this.title,
         description: this.description,
      };
   },
   data() {
      return {
         title: "Разработчик",
         description: "О разработке с Максом",
      };
   },
};
</script>

<style lang="scss"></style>
