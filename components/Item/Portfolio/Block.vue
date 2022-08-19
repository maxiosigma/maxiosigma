<template>
   <div class="px-4 py-4 min-h-32 bg-opacity-85 relative my-10" :class="black ? 'bg-black text-white' : 'bg-light-900 text-indigo-900'">
      <div class="container mx-auto">222</div>

      <div class="portfolio-block-skew skew-1" :class="black ? 'border-green-500' : 'border-yellow-500'"></div>
      <div class="portfolio-block-skew skew-2" :class="black ? 'border-green-500' : 'border-yellow-500'"></div>
   </div>
</template>

<script>
export default {
   props: ["black"],
};
</script>

<style lang="scss">
.portfolio {
   &-block {
      &-skew {
         @apply absolute transform border-20 w-full -skew-x-24;

         &.skew-1 {
            @apply -left-1/10 -bottom-[40px];
         }
         &.skew-2 {
            @apply -right-1/10 -top-[40px];
         }
      }
   }
}
</style>
