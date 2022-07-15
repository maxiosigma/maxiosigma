<template>
  <footer>
    <slot>
      <div class="footer-container">
        <!--<ItemLogo></ItemLogo>-->

        <div class="footer-menu">
          <!-- .filter((it) => !it.parent) -->
          <div class="footer-menu-cont">
            <!-- .filter((it) => !it.parent) -->
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

              <!-- .filter((sit) => sit.parent.title === it.title) -->
              <div
                class="footer-menu-subitem"
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
              <!--  ? link.parent.title == link.title : false -->
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
    &-item {
      @apply grid gap-1;
    }
    &-subitem {
      @apply grid gap-1;
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