<template>
  <div :class="[id, 'img-bg-mod']" :title="title" :alt="alt">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["src", "alt", "title"],
  data() {
    return {
      id:
        "img_" +
        String(Math.random() * ((Math.random() * 10000000) / 1.0))
          .split(".")
          .join("_"),
    }
  },
  mounted() {
    if (!this.isLinkSite(this.src)) {
      //import(`../../../../../strapi/public/uploads/${this.src.replace("/uploads/", "")}`).then(
      //  (it) => {
      //    this.loadStyleImg(it.default)
      //  }
      //)
      //const img = require(
      //  `../../../../../strapi/public/uploads/${this.src.replace("/uploads/", "")}`
      //)
      //console.log(preUrl)
      //const url = require.context(dir, true, /\.png$/)
      //console.log(url)
      //this.loadStyleImg(url)

      const dir = "../../../../../strapi/public/uploads"
      const preUrl = `${dir}/${this.src.replace("/uploads/", "")}`
      const url = require(`../../../../../strapi/public/uploads/${this.src.replace(
        "/uploads/",
        ""
      )}`)

      this.loadStyleImg(url)
    } else this.loadStyleImg(this.src)
  },
  methods: {
    loadStyleImg(img) {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<style type='text/css' async='true'>.${this.id} { background-image: url('${img}'); }</style>`
      )
    },
  },
}
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