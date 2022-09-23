<template>
   <Layout :bodyStyle="bodyStyle" :preload="preloader" @active="(e) => (active = e)" @preload="(e) => (preload = e)">
      <!--<TemplateHead />-->

      <template v-slot:head>
         <slot name="head">
            <TemplateHead :title="title" :description="description" />
         </slot>
      </template>

      <template v-slot:wrapper-before>
         <slot name="wrapper-before"></slot>
      </template>

      <template v-slot:navbar v-if="nav">
         <slot name="navbar">
            <div class="nav-pre-bar"><div class="nav-pre-cont"></div></div>
            <!-- :items="navBarItems" :subitems="navBarSubItems" -->
            <TemplateNavbar :class="[preload ? 'preload-hide-nav-bar' : active ? '' : 'preload-show-nav-bar']"> </TemplateNavbar>
         </slot>
      </template>

      <template v-slot:header v-if="header">
         <TemplateHeader :class="[preload ? 'preload-hide-nav-bar' : active ? '' : 'preload-show-nav-bar']">
            <slot name="header"></slot>
         </TemplateHeader>
      </template>

      <slot>
         <TemplateRedirect />
      </slot>

      <template v-slot:footer v-if="footer">
         <TemplateFooter :class="[preload ? 'preload-hide-nav-bar' : active ? '' : 'preload-show-nav-bar']">
            <slot name="footer"></slot>
         </TemplateFooter>
      </template>

      <template v-slot:wrapper-after>
         <slot name="wrapper-after"></slot>
      </template>
   </Layout>
</template>

<script>
export default {
   //"unscript", "idScript", "navBarItems", "navBarSubItems",
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
      nav: {
         type: Boolean,
         required: false,
         default: true,
      },
      header: {
         type: Boolean,
         required: false,
         default: true,
      },
      footer: {
         type: Boolean,
         required: false,
         default: true,
      },
      preloader: {
         type: Boolean,
         required: false,
         default: true,
      },
   },
   head() {
      return {
         script: [
            {
               //https:
               charset: "UTF-8",
               src: "//web.webpushs.com/js/push/46fa602925d7fdd1dc9e5b2a55a05967_1.js",
               async: true,
            },
         ],
      };
   },
   mounted() {
      //this.notifyCookie()
   },
   data() {
      return {
         preload: true,
         active: false,
      };
   },
};
</script>

<style lang="scss">
.header {
   //mt-22 sm:mt-26
   @apply flex-grow-0 flex-shrink-0 z-10 relative;
}
.nav {
   @apply w-full z-20 relative;

   &-bar {
      @apply min-h-8vh top-0 z-20 fixed;
   }

   &-pre {
      &-bar {
         @apply min-w-screen min-h-8vh z-0 relative;
      }
      &-cont {
         @apply min-w-screen min-h-64px z-0 relative;
      }
   }
}

.footer {
   @apply flex-grow-0 flex-shrink-0 z-20 relative;
}

.preload {
   &-show {
      @apply max-h-none opacity-100 transition-all duration-250 delay-250;

      &-nav-bar {
         @apply opacity-100 transition-all duration-1000 delay-1000;
      }
      &-header {
         @apply h-auto opacity-100 transition-opacity duration-75;
      }
   }
   &-hide {
      @apply max-h-screen opacity-0 transition-all duration-250 delay-0 overflow-hidden pointer-events-none;

      &-nav-bar {
         @apply opacity-0;
         @apply hidden #{!important};
      }
      &-header {
         @apply h-0 opacity-0 transition-opacity overflow-hidden;
      }
   }
}
</style>
