<template>
   <div :class="['portfolio-block', toogleBlack(black)]">
      <div
         class="portfolio-block-container"
         v-observe-visibility="{
            volume: 0,
            once: false,
            preload: 'none',
            callback: visibilityChanged,
            throttle: 250,
            throttleOptions: {
               leading: 'visible',
            },
            intersection: {
               root: null,
               rootMargin: '0px',
               threshold: 1.0,
            },
         }"
      >
         <div class="portfolio-block-side one" :class="[reverse ? 'right' : 'left']">
            <slot name="left"></slot>
         </div>

         <div class="portfolio-block-side two" :class="[reverse ? 'left' : 'right']">
            <slot name="right"></slot>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["black", "reverse", "id"],
   data() {
      return {
         //id: this.intRandom(0, 1000000000000),
         isVisible: false,
      };
   },
   methods: {
      visibilityChanged(isVisible, entry) {
         this.isVisible = isVisible;
         //console.log(isVisible, this.id);
         this.$emit("visible", this.id);
      },
   },
};
</script>

<style lang="scss">
.portfolio {
   &-block {
      // px-4 py-10
      @apply transition-all py-8 duration-500 min-h-32 max-w-screen break-words bg-opacity-85 relative;

      &-container {
         @apply grid container items-center mx-auto grid-rows-1 gap-5 sm:grid-cols-12;
      }

      &-side {
         //p-4
         @apply sm:col-span-6;

         &.left {
            @apply sm:order-1;
         }
         &.right {
            @apply sm:order-2;
         }

         &.one {
            @apply;
         }

         &.two {
            @apply grid gap-2 mx-auto max-w-80;
         }
      }
   }
}
</style>
