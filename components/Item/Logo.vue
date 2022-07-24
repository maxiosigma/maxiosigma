<template>
  <div class="site-logo" itemscope>
    <div class="site-logo-cont group">
      <!-- , { 'scroll-logo-cont': scroll } -->
      <div :class="['site-logo-img-cont']">
        <ItemImgBg class="site-logo-img" src="/logo.svg" itemprop="image" />
      </div>

      <div class="site-logo-text">
        {{ $config.app.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.site {
  &-logo {
    @apply relative;

    &-cont {
      @apply flex-center transition-all duration-2000;
    }

    &-img {
      @apply bg-contain bg-center h-7 w-7 duration-3000 animate-duration-3000 group-hover:(animate-spin);

      &-cont {
        @apply rounded-full flex-center h-6 mb-0.5 transition-all w-6 duration-500 relative filter drop-shadow-md sm: h-8 sm:w-8 ;
      }
    }

    &-text {
      @apply font-black text-shadow-md text-lg text-white leading-none ml-1.5 tracking-3px pointer-events-none sm:text-xl;
    }
  }
}

.nav {
  &-bar {
    &-menu {
      // cursor-pointer
      //@apply flex flex-grow items-center justify-between;

      &-text {
        @apply font-thin mt-0.75 text-lg tracking-wide uppercase pointer-events-none;
      }
    }

    &-logo {
      // pointer-events-none
      @apply transition-all duration-2000;

      &-img {
        @apply h-full w-full;
      }
    }
  }
}
</style>