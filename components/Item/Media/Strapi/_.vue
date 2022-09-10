<template>
   <!-- format="webp" loading="lazy" quality="95" -->
   <nuxt-img v-if="url" :src="url" :provider="provider || 'strapi'" :class="[id]" :title="title" :alt="alt" itemprop="image"></nuxt-img>
   <div v-else>Изображение не найдено</div>
</template>

<script>
export default {
   props: ["src", "alt", "title", "provider"],
   data() {
      return {
         id:
            "img_" +
            String(Math.random() * ((Math.random() * 10000000) / 1.0))
               .split(".")
               .join("_"),
         //url: "",
         url: this.src.replace("http://localhost:1337", ""),
         //path: this.src.replace("http://localhost:1337", ""),
      };
   },
   async fetch() {
      //this.url = await this.$http.$get(`http://localhost:1337${this.src.replace("http://localhost:1337", "")}`);
      //console.log(this.url);
   },
   mounted() {
      //const fw = this.src.replace("uploads", "uploads/f_webp");
      //const webp = fw.split(".")?.[0] + ".webp";
      //console.log(webp);
      //+ '?format=webp'
   },
};
</script>

<style lang="scss"></style>
