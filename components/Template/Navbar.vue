<template>
   <div v-scroll="getScroll" :class="['nav-bar', scroll == 1 || scroll == 2 ? '!min-h-none !h-auto' : '']">
      <div :class="['nav-bar-cont', scroll == 1 || scroll == 2 ? 'cont-scroll' : '', scroll == 2 ? 'bottom' : '']">
         <client-only>
            <vue-scroll-indicator
               :height="isMobile() ? '3px' : '5px'"
               :class="['nav-bar-indicator', scroll == 0 ? '!opacity-0' : '', scroll == 1 || scroll == 2 ? '!opacity-100' : '']"
               color="#00ffe6"
               background="#0e7490"
            />
         </client-only>

         <div class="nav-bar-cont-main justify-around sm:justify-between">
            <ItemLogo></ItemLogo>

            <div :class="['nav-bar-cont-text']">
               <div :class="['nav-bar-cont-arrow', !parent.key ? '!hidden' : '']" @click="handleClickPrev()">←</div>

               <ItemLink
                  :href="link.path"
                  :nolang="link.path === '/'"
                  :class="['nav-bar-link group', linkHidden(link) ? 'hidden' : '', link.class]"
                  :key="i"
                  v-for="(link, i) in links"
                  @click.native.prevent="
                     handleClickNext({ parent: { key: link.uiRouterKey, order: link.order }, target: link.type, url: link.path })
                  "
               >
                  <div :class="['nav-bar-link-hover', isActive(link.uiRouterKey) ? 'active' : '']">
                     {{ link.title }}
                  </div>
               </ItemLink>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["openMenu", "items", "subitems"],
   data() {
      return {
         links: this.$store.state.strapi.navbar,
         //isRoute: this.$route.fullPath?.replace(this?.localePath("/") + "/", "").replace("/" + this.loke() + "/", ""),
         parent: { key: null, order: null },
         scroll: 0,
         active: [],
      };
   },
   mounted() {
      this.getActive();
   },
   methods: {
      linkHidden(item) {
         const check1 = !item.parent?.uiRouterKey && this.parent.key;
         const check2 = item.parent?.uiRouterKey !== this.parent.key;
         const check3 = item.parent !== this.parent.key;

         return check2 ? check3 : check1;
      },
      getActive(arg = undefined) {
         if (!arg) {
            const rt = this.isRoute()?.split("/")?.[0];
            arg = this.links?.filter((it) => it.path.indexOf(rt) !== -1)[0];
            this.active.push(arg?.uiRouterKey);
         } else {
            arg = this.links?.filter((it) => it.uiRouterKey === arg)[0];
         }

         const key = arg?.parent?.uiRouterKey;

         if (key) {
            this.active.push(key);
            this.getActive(key);
         }
      },
      isActive(arg) {
         return this.active?.indexOf(arg) !== -1;
      },
      handleClickNext({ parent = undefined, url = undefined, target = undefined }) {
         url === "/" ? (this.parent = parent) : (location.href = "/" + this.$i18n.locale + "/" + url);
      },
      handleClickPrev() {
         const next = this.links?.filter((it) => it.uiRouterKey === this.parent.key)?.[0];
         const key = next.parent?.uiRouterKey ?? undefined;
         const order = next.parent?.order ?? undefined;
         this.parent = { key, order };
      },
      getScroll() {
         const dbd = document.body;
         const bodyHeight = Math.max(dbd.scrollHeight, dbd.offsetHeight, dbd.clientHeight);
         const scrollHeight = document.documentElement.clientHeight + window.scrollY;
         const position = { top: 150, bottom: 150 };

         if (window.scrollY < position.top) this.scroll = 0;
         if (window.scrollY >= position.top) this.scroll = 1;
         if (window.scrollY >= position.top && bodyHeight - scrollHeight <= position.bottom) this.scroll = 2;
      },
      isLink(url) {
         return this.isRoute() === url || this.isRoute() === url + "/" || "/" + this.isRoute() === url;
      },
   },
};
</script>

<style lang="scss">
.v-scroll--indicator-wrapper {
   @apply opacity-0 transition-opacity duration-1500 delay-50;
}

.nav {
   &-bar {
      @apply flex-center flex-col text-white w-full py-0 transition-all duration-700;

      &-cont {
         @apply bg-repeat bg-self-main flex-center bg-opacity-85 bg-hero-circuit-board-white-10 bg-5r mb-1.5 min-h-10 w-full opacity-100 px-4 transition-opacity duration-500 sm:h-12;

         &.cont-scroll {
            @apply min-h-none h-6 mb-0 opacity-85 py-2 transition-all top-0 duration-300 delay-250 sm:h-10;

            &.bottom {
               @apply h-auto min-h-7vh opacity-85 transition-all duration-300 delay-250 #{!important};
            }
         }

         &-main {
            @apply container flex items-center justify-between;
         }

         &-text {
            @apply flex max-w-full mt-0.5 ml-1 px-1 items-center <sm:(justify-end);
         }

         &-arrow {
            $forever-and-ever: -1;
            @apply cursor-pointer text-lg text-shadow-md transition-all duration-300 md:(mb-1 mr-2.5);
            @apply <md:(order-last ml-2.5 mt-0.5 transform rotate-180);
            @apply hover:(text-yellow-300 tracking-3px text-shadow-lg);
         }
      }

      &-link {
         // py-1
         @apply cursor-pointer text-shadow-md tracking-wider transition-all text-[10px] duration-300 uppercase overflow-hidden;
         @apply sm:(text-xs tracking-wide) hover:(overflow-visible);

         &-hover {
            @apply my-auto min-w-3 py-0.5 transition-all duration-500 truncate pointer-events-none;
            @apply group-hover:(text-yellow-300 max-w-none tracking-widest overflow-clip overflow-visible text-shadow-lg);

            &.active {
               @apply border-b-2 border-b-yellow-500;
            }
         }

         &:nth-of-type(n + 1) {
            @apply mr-1.5 sm: mr-2.5;
         }
      }

      &-btn {
         @apply flex-center mx-3 transition-all w-6 duration-500 pointer-events-none;
      }

      &-icon {
         &-menu {
            @apply max-w-full text-white transition-all duration-500 icon-md pointer-events-none;
         }

         &-hotdog {
            @apply max-w-0 transition-all text-yellow-200 duration-500 icon-md overflow-hidden pointer-events-none;
         }
      }
   }
}

.scroll {
   &-logo-cont {
      @apply h-6 w-6 #{!important};
   }

   &-bar-btn {
      @apply mx-1 #{!important};
   }

   &-icon {
      &-menu,
      &-hotdog {
         @apply icon-sm #{!important};
      }
   }

   &-menu-text {
      @apply text-sm;
   }
}

@keyframes OPeS {
   0% {
      opacity: 0;
   }
   100% {
      opacity: 0.85;
   }
}
</style>
