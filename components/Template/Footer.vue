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
            </div>

            <div class="footer-cookie">
              <TemplateCookie></TemplateCookie>

              <div class="footer-cookie-btn" @click="$cookies.modal = true">Cookie</div>
            </div>
          </div>
        </div>

        <div class="footer-social">
          <!-- transform scale-50          
     
            cursor-pointer flex h-5 w-5
            -->
          <div
            class="footer-social-item"
            :key="i"
            v-for="(it, i) in social"
            v-tooltip="
              isMobile()
                ? {}
                : {
                    content: `<div class='text-center'>${it.title}</div>`,
                    html: true,
                    distance: 20,
                    delay: {
                      show: 200,
                      hide: 150,
                    },
                  }
            "
            @click="handleClickNext({ url: it.url, target: 'blank' })"
          >
            <!-- transform scale-100 -->
            <i :class="['footer-social-link font-ft', `ft-${it.icon}`]"></i>
          </div>
        </div>
      </div>
    </slot>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: this.$store.state?.footbar,
      social: this.$store.state?.social.filter((it) => it.icon).filter((it) => it.url),
    }
  },
  mounted() {
    //console.log(this.links)
  },
  methods: {
    handleClickNext({ url = undefined, target = undefined }) {
      url
        ? target == "blank"
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

  @apply bg-self-main bg-opacity-85 bg-hero-circuit-board-white-10 bg-5r w-full py-3 px-4 sm:py-2;
  // elevation-5

  &-cont {
    //sm:justify-between
    @apply container flex mx-auto w-full text-light-400 justify-between items-center <sm:(flex-col justify-center) ;
  }

  &-menu {
    @apply flex text-[10px] justify-end items-center;

    &-cont {
      @apply grid gap-x-4 gap-y-3 sm:(grid-flow-col);
    }
    &-subcont {
      @apply grid grid-flow-col gap-4;
    }
    &-item {
      @apply grid gap-1 place-items-center;
    }
    &-subitem {
      @apply flex-center;
    }
    &-link {
      @apply cursor-pointer flex-center tracking-wider transition-all duration-200 uppercase hover:(tracking-widest text-yellow-500) ;
    }
  }
  &-cookie {
    @apply flex-center;

    &-btn {
      @apply cursor-pointer tracking-wider transition-all duration-200 uppercase hover:(tracking-widest text-yellow-500) ;
    }
  }

  &-social {
    @apply flex flex-wrap mt-3 filter drop-shadow-sm sm:mt-0 <sm:max-w-56;

    &-item {
      @apply cursor-pointer flex-center h-8 w-8 overflow-hidden;
    }

    &-link {
      @apply flex-center transform text-light-400 scale-50;
    }
  }

  // &-{@apply;}
}
</style>