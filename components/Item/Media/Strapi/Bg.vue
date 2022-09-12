<template>
   <div v-if="src" :class="[id, 'img-bg-mod']" :title="title" :alt="alt" itemprop="image"></div>
   <div v-else>Изображение не найдено</div>
</template>

<script>
export default {
   props: ["src", "alt", "title", "type"],
   async fetch() {
      try {
         const isGet = (await this.$axios?.get("http://localhost:1337/admin"))?.status === 200;

         if (process.server && isGet && !this.$config.isDev && !this.isLinkSite(this.src)) {
            const { DownloaderHelper } = require("node-downloader-helper");
            new DownloaderHelper(`http://localhost:1337${this.src}`, "./media/cdn", {
               resumeIfFileExists: true,
               override: "skip",
            }).start();
         }
      } catch (error) {}
   },
   data() {
      return {
         id:
            "img_" +
            String(Math.random() * ((Math.random() * 10000000) / 1.0))
               .split(".")
               .join("_"),
         path: null,
      };
   },
   mounted() {
      if (!this.isLinkSite(this.src)) {
         try {
            this.loadStyleImg(
               !this.$config.isDev ? require(`~/media/cdn/${this.src.replace("/uploads/", "")}`) : `http://localhost:1337${this.src}`
            );
         } catch (error) {}
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

//?format=webp
//console.log(this.src);
//console.log(this.$img(this.src, { format: "webp", quality: 75 }, { provider: "strapi" }));
// const url = require(`../../../../../strapi/public/uploads/${this.src.replace("/uploads/", "")}`);
//const url = !this.$config.isDev ? `/public/images/uploads-${this.src.replace("/uploads/", "")}` : `http://localhost:1337${this.src}`;
//const replaceImg = `${this.src.replace("/uploads/", "")}`;
////const urlImg = require(`~/media/cdn/${replaceImg}`);
//try {
//   //const urlImg = require("@/media/cdn/" + replaceImg);
//   //const urlImg = require("~/media" + "cdn" + "/202207137172755_dac643ddef.webp");
//} catch (error) {}
//console.log(import.meta.url);
//console.log(`cdn/${this.src.replace("/uploads/", "")}`);
// , {format: "webp", quality: 75}, { provider: "static" }
//const img = this.$img(`cdn/${this.src.replace("/uploads/", "")}`, {}, { provider: "media" });
//const img = this.$img(
//   `public/images/cdn/${this.src.replace("/uploads/", "")}`,
//   { format: "webp", quality: 75 },
//   { provider: "static" }
//);
//console.log(img);
//const img = this.$img(`http://localhost:1337/uploads/${this.src.replace("/uploads/", "")}`, {}, { isStatic: true });
//console.log(img);
//this.loadStyleImg(img);
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
