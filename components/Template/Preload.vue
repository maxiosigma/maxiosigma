<template>
  <div :class="[isnt ? 'preload' : '!hidden']">
    <div :class="[isnt ? 'preload-container' : '', { '!hidden': !show }]">
      <div :class="[isnt ? 'preload-sphere' : '']">
        <div :class="[isnt ? 'preload-cicle' : '']"></div>
        <div :class="[isnt ? 'preload-cicle' : '']"></div>
        <div :class="[isnt ? 'preload-cicle' : '']"></div>
      </div>
    </div>

    <LazyItemImgBg
      :class="{ hidden: !redirect, hidden: !show }"
      class="bg-contain bg-center h-16 mr-1 w-16 absolute"
      src="/logo.svg"
    />
    <!--<ItemImg src="other/cat_m.png" :class="{ hidden: !redirect, hidden: !show }" class="rounded-full h-auto p-10 w-60 absolute elevation-24"></ItemImg>-->
  </div>
</template>

<script>
export default {
  props: ["isnt", "redirect"],
  data() {
    return {
      show: false,
    }
  },
  beforeMount() {
    setTimeout(() => (this.show = true), 250)
  },
}
</script>

<style lang="scss">
.preload {
  @apply flex-center h-full bg-indigo-900 bg-opacity-50 bg-2r bg-hero-hexagons-water-5 w-full inset-0 transition z-99999 duration-75 delay-0 fixed;

  &-container {
    @apply bg-transparent h-200px w-200px inline-block;
  }

  &-cicle {
    @apply border-solid border-5 rounded-1/2 absolute box-border elevation-24;
    animation: preload-sphere 5.88235294117647s cubic-bezier(0, 0.2, 0.8, 1) infinite;

    &:nth-child(1) {
      @apply border-cyan-400 border-opacity-25 animate-delay-0;
    }

    &:nth-child(2) {
      @apply border-fuchsia-400 border-opacity-25 animate-delay-[-2.941176470588235s];
    }

    &:nth-child(3) {
      @apply border-green-400 border-opacity-25 animate-delay-[-4.041176470588235s];
    }
  }

  &-sphere {
    @apply h-full w-full transform origin-top-left scale-100 translate-z-0 relative backface-hidden;
  }
}

@keyframes preload-sphere {
  0% {
    @apply h-0 opacity-100 top-98px left-98px w-0;
  }

  100% {
    @apply h-398px opacity-0 -top-101px -left-101px w-398px;
  }
}
</style>