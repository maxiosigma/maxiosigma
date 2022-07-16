<template>
  <footer>
    <slot>
      <div class="footer-cont">
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

              <!--<div class="footer-menu-subcont">
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
                    <div v-if="!sit.icon">{{ sit.title }}</div>
                    <span
                      v-if="sit.icon"
                      :class="[
                        sit.icon,
                        'm-auto transition border-light-200 border-5 bg-light-200 h-8 w-8 rounded-full',
                      ]"
                    ></span>
                  </div>
                </div>
              </div>-->
            </div>
          </div>

          <TemplateCookie></TemplateCookie>
        </div>

        <div class="grid grid-flow-col-dense gap-2 justify-self-center items-center footer-social">
          <div class="flex-center" :key="i" v-for="(it, i) in social.filter((it) => it.icon)">
            <span :class="[it.icon, 'transform scale-100']"></span>
          </div>

          <!--<div class="flex-center" :key="i" v-for="(it, i) in social.filter((it) => !it.icon)">
              <div :class="it.class">{{ it.title }}</div>
            </div>-->
        </div>
      </div>
    </slot>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: this.$store.state.footbar,
      social: this.$store.state.social,
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

  @apply bg-self-main bg-hero-circuit-board-white-10 bg-5r w-full py-5 px-4;
  // elevation-5

  &-cont {
    //sm:justify-between
    @apply container mx-auto w-full grid text-light-400 gap-2 items-center;
  }

  &-menu {
    @apply flex text-sm justify-end items-center;

    &-cont {
      @apply grid grid-flow-col gap-4 justify-end;
    }
    &-subcont {
      @apply grid grid-flow-col gap-4;
    }
    &-item {
      @apply grid gap-1  place-items-center;
    }
    &-subitem {
      @apply flex-center;
    }
    &-link {
      @apply cursor-pointer flex-center tracking-wider transition-all duration-200 uppercase hover:(tracking-widest text-yellow-500) ;
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