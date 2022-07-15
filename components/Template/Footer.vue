<template>
  <footer>
    <slot>
      <div class="footer-container">
        <!--<ItemLogo></ItemLogo>-->

        <div class="footer-menu">
          <div class="footer-menu-cont">
            <div
              class="footer-menu-item"
              :key="i"
              v-for="(it, i) in links.filter((it) => !it.parent)"
            >
              <div
                class="footer-menu-link"
                @click="handleClickNext({ target: it.target, url: it.url })"
              >
                {{ it.title }}
              </div>

              <div class="footer-menu-subcont">
                <div
                  :class="['footer-menu-subitem']"
                  :key="j"
                  v-for="(sit, j) in links.filter((sit) =>
                    sit.parent ? sit.parent.title === it.title : false
                  )"
                >
                  <div
                    class="footer-menu-link"
                    @click="handleClickNext({ target: sit.target, url: sit.url })"
                  >
                    {{ sit.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <TemplateCookie class=""></TemplateCookie>
      </div>
    </slot>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: this.$store.state.footbar.filter((it) => !it.hidden),
    }
  },
  mounted() {
    //console.log(this.links)
  },
  methods: {
    handleClickNext({ url = undefined, target = undefined }) {
      url
        ? target === "blank"
          ? window.open(url)
          : (location.href = "/" + this.$i18n.locale + url)
        : null
    },
  },
}
</script>

<style lang="scss">
.footer {
  //bg-cool-gray-900 bg-hero-wiggle-chocolate-30

  @apply bg-cyan-700 bg-hero-wiggle-white-10 bg-2r w-full py-4 px-4;
  // elevation-5

  &-container {
    //sm:justify-between
    @apply container flex flex-wrap mx-auto w-full text-light-400 justify-between items-center;
  }
  &-menu {
    @apply;

    &-cont {
      @apply grid grid-flow-col gap-4;
    }
    &-subcont {
      @apply grid grid-flow-col gap-4;
    }
    &-item {
      @apply grid gap-1  place-items-center;
    }
    &-subitem {
      @apply flex;
    }
    &-link {
      @apply cursor-pointer;
    }
  }
  //&-link {
  //  @apply cursor-default order-3 text-sm leading-none transition text-light-400 duration-300 inline-flex items-center sm:order-1;

  //  &-name {
  //    @apply mr-1.5 text-green-400 text-3xl;
  //  }
  //}
  //&-chat {
  //  @apply order-3 min-w-5 min-h-1 <sm:(order-2 my-1) ;
  //}
}
</style>