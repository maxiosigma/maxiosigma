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
  async mounted() {
    if (!this.isLinkSite(this.src))
      import(`../../../../../strapi/public/uploads/${this.src.replace("/uploads/", "")}`).then(
        (it) => {
          this.loadStyleImg(it.default)
        }
      )
    else this.loadStyleImg(this.src)
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