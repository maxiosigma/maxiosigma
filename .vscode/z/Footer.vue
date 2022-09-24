<template>
   <footer class="footer">
      <div class="footer-cont">
         <!--<ItemLogo></ItemLogo>-->

         <div class="footer-lang">
            <!-- href="https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=ru" -->
            <!-- https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=ru -->
            <ItemLink @click.native.prevent="openTranslate()" class="footer-menu-link" href="?translate" nolang self blank> Translate </ItemLink>
         </div>

         <div class="footer-menu">
            <div class="footer-menu-cont">
               <div class="footer-menu-item" :key="i" v-for="(link, i) in links.filter((link) => !link.parent)">
                  <ItemLink
                     :href="link.path"
                     :nolang="link.path == '/'"
                     :class="['footer-menu-link', isActive(link.uiRouterKey) ? 'active' : '']"
                     @click="handleClickNext({ target: link.type, url: link.path })"
                  >
                     {{ link.title }}
                  </ItemLink>
               </div>

               <div class="footer-cookie">
                  <TemplateCookie></TemplateCookie>

                  <div class="footer-cookie-btn" @click="$cookies.modal = true">Cookie</div>
               </div>
            </div>
         </div>

         <div class="footer-social">
            <ItemLink
               :href="it.externalPath"
               :blank="'blank'"
               class="footer-social-item"
               :key="i"
               v-for="(it, i) in social"
               v-tooltip="{
                  show: !isCustomMobile(),
                  disabled: isCustomMobile(),
                  content: `<div class='text-center'>${it.title}</div>`,
                  html: true,
                  distance: 20,
                  delay: {
                     show: 200,
                     hide: 150,
                  },
               }"
               @click.native.prevent="handleClickNext({ url: it.externalPath, target: 'blank' })"
            >
               <i :class="['footer-social-link font-ft', `ft-${it.icon}`]"></i>
            </ItemLink>
         </div>
      </div>
   </footer>
</template>

<script>
export default {
   data() {
      return {
         active: [],
         links: this.$store.state.strapi.fotbar,
         social: this.$store.state.strapi.socbar
            .filter((it) => it.icon)
            .filter((it) => it.externalPath)
            .filter((it) => it.top),
      };
   },
   mounted() {
      this.getActive();

      //console.log({ style: this.$style });
      //console.log({ style: this.styles });
   },
   methods: {
      getActive(arg = undefined) {
         if (!arg) {
            const rt = this.isRoute()?.split("/")[0];
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
      handleClickNext({ url = undefined, target = undefined }) {
         url ? (target == "blank" ? window.open(url) : (location.href = "/" + this.$i18n.locale + url)) : null;
      },
      openTranslate() {
         window.open("https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb?hl=ru");
      },
   },
};
</script>

<style lang="scss" module>
//module="styles"
.footer {
   //bg-cool-gray-900 bg-hero-wiggle-chocolate-30

   @apply bg-self-main bg-opacity-85 bg-hero-circuit-board-white-10 bg-5r w-full py-3 px-4 sm:py-2;
   // elevation-5

   &-cont {
      //sm:justify-between
      @apply container flex mx-auto w-full text-light-400 justify-between items-center <sm:(flex-col justify-center);
   }

   &-menu {
      @apply flex justify-end items-center;

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
         //tracking-widest
         @apply cursor-pointer flex-center tracking-wider transition-all text-[10px] leading-[0.5] duration-200 uppercase hover:(text-yellow-500);

         &.active {
            @apply text-yellow-400;
         }
      }
   }

   &-cookie {
      @apply flex-center;

      &-btn {
         //tracking-widest
         @apply cursor-pointer tracking-wider transition-all text-[10px] duration-200 uppercase hover:(text-yellow-500);
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

   &-lang {
      @apply rounded-sm mb-3.5 py-2 px-3 elevation-3 sm:mb-0;
   }

   // &-{@apply;}
}
</style>
