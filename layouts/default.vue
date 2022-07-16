<template>
  <Nuxt />
</template>

<script>
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

    return {
      titleTemplate: this.headTemplate(),
      meta: [...this.headMeta(), ...i18nHead.meta],
      link: [...this.headLinks(), ...i18nHead.link],
      htmlAttrs: { ...i18nHead.htmlAttrs },
    }
  },
  beforeMount() {
    //if (!this.$config.app.isDev)
    //  window.onresize = function () {
    //    if (window.outerHeight - window.innerHeight > 100) {
    //      console.log("Вы открыли панель разработчика")
    //      setTimeout(() => {
    //        location = "/404"
    //        location.href = "/404"
    //      }, 1500)
    //    }
    //  }
  },
  mounted() {
    this.noContextMenu()
    this.ymPixel()
    this.gtm()
  },
}
</script>

<style lang="scss">
// FONT ICONS
.ft {
  &-vk {
    @apply text-4xl text-blue-500;
  }
  &-ins {
    @apply text-3xl text-yellow-500;
  }
  &-meta {
    @apply mb-0.25 text-4xl text-green-500;
  }
  &-twitter {
    @apply mt-1 ml-2 text-3xl text-blue-400;
  }
  &-telegram {
    @apply text-4xl text-indigo-500;
  }
  &-pikachu {
    @apply text-3xl text-yellow-500;
  }
  &-tiktok {
    @apply text-5xl text-gray-400;
  }
  &-ameba {
    @apply text-3xl text-green-500;
  }
  &-zyan {
    @apply mt-0.5 text-3xl text-yellow-600;
  }
  &-youtube {
    @apply mt-0.5 text-3xl text-red-600;
  }
  &-tumblr {
    @apply mr-0.5 text-2xl text-blue-500;
  }
  &-ok {
    @apply text-4xl text-yellow-500;
  }
}

//$icons: vk, ins, meta, twitter, telegram, pikachu, tiktok, ameba, zyan, youtube, tumblr, ok;

//@each $size in $icons {
//  .icon-#{$size} {
//    font-size: $size;
//    height: $size;
//    width: $size;
//  }
//}
// FONT ICONS
</style>