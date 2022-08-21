<template>
   <nuxt-img
      v-if="src"
      :src="src"
      provider="strapi"
      format="webp"
      :class="[id]"
      loading="lazy"
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
};
</script>

<style lang="scss"></style>
