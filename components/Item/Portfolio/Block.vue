<template>
   <div class="portfolio-block" :class="[toogleBlack(black)]">
      <div class="portfolio-block-container">
         <div class="portfolio-block-side" :class="[reverse ? 'sm:order-2' : 'sm:order-1']">
            <slot name="left"></slot>
         </div>

         <div class="portfolio-block-side" :class="[reverse ? 'sm:order-1' : 'sm:order-2']">
            <slot name="right"></slot>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["black", "reverse"],
};
</script>

<style lang="scss">
.portfolio {
   &-block {
      @apply transition-all duration-500 px-4 py-4 min-h-32 max-w-screen break-words bg-opacity-85 relative;

      &-container {
         @apply grid container mx-auto grid-rows-1 sm:grid-cols-12;
      }

      &-side {
         @apply p-4 sm:col-span-6;
      }
   }
}
</style>
