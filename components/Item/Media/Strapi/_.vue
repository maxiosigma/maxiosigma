<template>
   <nuxt-img
      v-if="src"
      :src="src"
      provider="strapi"
      format="webp"
      :class="[id]"
      loading="lazy"
      quality="95"
      :title="title"
      :alt="alt"
      itemprop="image"
   ></nuxt-img>

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
      };
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
