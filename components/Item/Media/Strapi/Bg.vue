<template>
   <div v-if="src" :class="[id, 'img-bg-mod']" :title="title" :alt="alt" itemprop="image">
      <!--  lazy-background="" -->
      <slot>
         <ItemMediaStrapi class="hidden" :src="src"></ItemMediaStrapi>
      </slot>

      <!--{{ $payloadURL(src) }}-->
   </div>

   <div v-else>Изображение не найдено</div>
</template>

<script>
export default {
   props: ["src", "alt", "title", "type"],
   //async fetch() {
   //   const res = await this.$axios.get("");
   //   //console.log(res);
   //},
   data() {
      return {
         id:
            "img_" +
            String(Math.random() * ((Math.random() * 10000000) / 1.0))
               .split(".")
               .join("_"),
      };
   },
   // computed: {
   //    _srcset() {
   //       return this.$img.getSizes(`http://localhost:1337${this.src}`, {
   //          sizes: "xs:100vw sm:100vw md:100vw lg:100vw xl:100vw",
   //          modifiers: {
   //             format: "webp",
   //             quality: 70,
   //             height: 500,
   //          },
   //          provider: "strapi",
   //       });
   //    },
   // },
   mounted() {
      if (!this.isLinkSite(this.src)) {
         //?format=webp
         //console.log(this.src);
         //console.log(this.$img(this.src, { format: "webp", quality: 75 }, { provider: "strapi" }));

         // const url = require(`../../../../../strapi/public/uploads/${this.src.replace("/uploads/", "")}`);
         const url = !this.$config.isDev ? `/public/images/uploads-${this.src.replace("/uploads/", "")}` : `http://localhost:1337${this.src}`;
         //console.log(url);
         this.loadStyleImg(url);
      } else this.loadStyleImg(this.src);
   },
   methods: {
      loadStyleImg(img) {
         document.body.insertAdjacentHTML(
            "beforeend",
            `<style type='text/css' async='true'>.${this.id} { background-image: url('${img}'); }</style>`
         );
      },
   },
};
</script>

<style lang="scss">
.img {
   &-bg {
      &-mod {
         @apply bg-no-repeat w-full;
      }
   }
}
</style>
