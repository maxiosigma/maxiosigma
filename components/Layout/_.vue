<template>
   <div :class="['wrapper', $config.isDev ? 'debug-screens' : '']">
      <slot name="head">
         <TemplateHead :title="title" :description="description" />
      </slot>

      <slot name="wrapper-before"> </slot>

      <slot name="nav"></slot>
      <slot name="navbar"></slot>
      <slot name="header"></slot>

      <TemplateMain :class="['main', preload ? 'preload-hide' : active ? '' : 'preload-show']">
         <slot></slot>
      </TemplateMain>

      <slot name="footer"></slot>
      <slot name="wrapper-after"></slot>

      <TemplatePreload :class="[preload ? 'preload-show' : 'preload-hide']" :isnt="preload" :redirect="preload_redirect" />
   </div>
</template>

<script>
export default {
   props: {
      bodyStyle: {
         type: String,
         required: false,
         default: "body-bg",
      },
      title: {
         type: String,
         required: false,
         default: undefined,
      },
      description: {
         type: String,
         required: false,
         default: undefined,
      },
   },
   head() {
      return {
         htmlAttrs: {
            class: this?.$style?.html || "html",
            lang: this.lang,
            prefix: "og: https://ogp.me/ns#",
            ...(this.isMobile() && { amp: "true" }),
         },
         headAttrs: {
            class: this?.$style?.head ?? "head",
         },
         bodyAttrs: {
            class: [this?.$style?.body ?? "body", ...(this.bodyStyle ? [this.bodyStyle] : [])],
            ...(!this.$config.app.isDev && { oncontextmenu: "return!0" }),
         },
      };
   },
   data() {
      return {
         preload: true,
         active: false,
         redirect: false,
         preload_redirect: false,
         lang: this.isLangGlobal(),
      };
   },
   //watch: {
   //   "$route.path"() {
   //      console.log("Совершён переход по ссылке");
   //      location.href = "/";
   //   },
   //},
   beforeMount() {
      //console.log(this.routeReffer(), this.$route.path);

      this.routeReffer() !== this.$route.path ? this.LCS("page_visit_prev", this.routeReffer()) : null;

      this.LCS("page_visit", this.$route.path);

      //this.$route.path !== this.LCG("page_visit") ? this.LCS("page_visit", this.$route.path) : null;
      //this.LCG("page_visit_prev") !== this.LCG("page_visit") ? null : this.LCS("page_visit_prev", this.LCG("page_visit") ?? "/");
      //console.log(this.LCG("page_visit_prev"), this.LCG("page_visit"));

      this.redirect = true;

      if (!this.lightRedirect()) {
         this.redirect = false;
         this.preload_redirect = true;
      }
   },
   mounted() {
      if (!this.redirect)
         setTimeout(() => {
            this.preload = false;
            this.$emit("preload", this.preload);

            setTimeout(() => {
               this.active = true;
               this.$emit("active", this.active);
            }, 1500);
         }, 950);
      //}, 100000000)

      //console.log(document.cookie);
   },
};
</script>

<style lang="scss">
#app {
   height: 100%;

   & > div {
      min-height: 100%;
      overflow: auto;
   }
}

.html {
   @apply h-auto max-w-screen bg-dark-900 relative;
}

.head {
   @apply hidden;
}

.body {
   -webkit-font-smoothing: antialiased;
   -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
   @apply font-roboto h-auto max-w-screen relative;

   &-bg {
      @apply bg-indigo-900 bg-opacity-50 bg-2r bg-hero-hexagons-water-5;
   }
}

.wrapper {
   @apply flex flex-col h-auto min-h-screen max-w-screen relative justify-between overflow-hidden;
}

.main {
   @apply flex flex-col flex-grow;
}

.debug__screens {
   @apply before: (bg-black shadow-xl text-sm text-white px-2.5 rounded-tl-md opacity-70 py-1 bottom-0 right-0 z-9999 fixed) <sm:before:content-["screen-none"] @sm: before:content-["screen-sm"] @md: before:content-["screen-md"] @lg: before:content-["screen-lg"] @xl: before:content-['screen-xl'] @2xl: before:content-["screen-2xl"];
}

.sp-link-wrapper {
   @apply bottom-full h-0 opacity-0 w-0 absolute overflow-hidden #{!important};

   .sp-link > span {
      @apply opacity-0 #{!important};
   }
}

.sp-link > span {
   @apply opacity-0 #{!important};
}

.sp-link-wrapper .sp-link > span {
   @apply opacity-0 #{!important};
}

.sp-link span {
   @apply opacity-0 #{!important};
}

.toast {
   &-cookie {
      //flex items-center
      @apply rounded-sm font-light bg-cyan-900 bg-hero-wiggle-white-5 bg-opacity-100 bg-2r border-cyan-700 text-justify text-xs tracking-wider py-1 px-2 text-white/85 pointer-events-none break-all #{!important};

      &-action {
         &-close {
            //@apply icon-sm #{!important};
         }
      }
   }
}

//.preload {
//  &-show {
//    @apply max-h-none opacity-100 transition-all duration-250 delay-250;
//  }

//  &-hide {
//    @apply max-h-screen opacity-0 transition-all duration-250 delay-0 overflow-hidden pointer-events-none;
//  }
//}
</style>
