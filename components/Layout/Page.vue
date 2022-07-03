<template>
  <Layout :bodyStyle="bodyStyle" @active="(e) => (active = e)" @preload="(e) => (preload = e)">
    <!--<TemplateHead />-->

    <template v-slot:wrapper-before>
      <slot name="wrapper-before"></slot>
    </template>

    <!--<template v-slot:nav>
			<TemplateNav>
				<slot name="nav"></slot>
			</TemplateNav>
		</template>-->

    <template v-slot:navbar>
      <div class="nav-pre-bar"><div class="nav-pre-cont"></div></div>
      <TemplateNavbar
        :class="[preload ? 'preload-hide-nav-bar' : active ? '' : 'preload-show-nav-bar']"
        :items="navBarItems"
        :subitems="navBarSubItems"
      >
      </TemplateNavbar>
    </template>

    <template v-slot:header>
      <TemplateHeader class="header">
        <slot name="header"></slot>
      </TemplateHeader>
    </template>

    <slot>
      <TemplateRedirect />
    </slot>

    <template v-slot:footer>
      <TemplateFooter
        class="footer"
        :class="[preload ? 'preload-hide-nav-bar' : active ? '' : 'preload-show-nav-bar']"
      >
        <slot name="footer"></slot>
      </TemplateFooter>
    </template>

    <template v-slot:wrapper-after>
      <slot name="wrapper-after"></slot>
      <ItemNoScript v-if="!unscript && !idScript" :id="idScript || false" />
    </template>
  </Layout>
</template>

<script>
export default {
  props: ["unscript", "idScript", "navBarItems", "navBarSubItems", "bodyStyle"],
  head() {
    return {
      script: [
        {
          charset: "UTF-8",
          src: "https://web.webpushs.com/js/push/46fa602925d7fdd1dc9e5b2a55a05967_1.js",
          //async: true,
        },
      ],
    }
  },
  mounted() {
    this.notifyCookie()
  },
  data() {
    return {
      preload: true,
      active: false,
    }
  },
}
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
  @apply flex-grow-0 flex-shrink-0 z-10 relative;
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