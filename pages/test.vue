<template>
   <LayoutPage :title="title" :description="description">
      <div></div>
   </LayoutPage>
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
         title: "Тест",
         description: "",
      };
   },
};
</script>

<style></style>
