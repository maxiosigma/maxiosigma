<template>
   <!-- СДЕЛАТЬ МОКАПЫ -->

   <!--        v-observe-visibility="{
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
         }" -->
   <!-- , visible ? 'h-auto visible' : 'h-0px invisible' -->
   <div :class="['portfolio-block', toogleBlack(black)]" v-show-slide:3000:ease="visible">
      <div class="portfolio-block-container">
         <div v-if="!block" class="portfolio-block-side one" :class="[reverse ? 'right' : 'left']">
            <slot name="left"></slot>
         </div>

         <slot></slot>

         <div v-if="!block" class="portfolio-block-side two" :class="[reverse ? 'left' : 'right']">
            <slot name="right"></slot>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["black", "reverse", "visible", "id", "block"],
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
      // px-4 py-10 transition-all h-auto duration-1500 delay-200 overflow-hidden
      @apply max-w-screen break-words bg-opacity-85 relative;
      transition: height 2s ease 0s;

      &-container {
         // min-h-32 transition-all duration-2000 ease min-h-32  container mx-auto
         @apply grid h-auto container mx-auto justify-center py-8 items-center grid-rows-1 gap-5 grid-cols-2 sm:grid-cols-12;
      }

      &-side {
         //p-4 max-w-full overflow-hidden
         @apply col-span-2 sm:col-span-6;

         &.left {
            @apply sm:order-1;
         }
         &.right {
            @apply sm:order-2;
         }

         &.one {
            @apply px-4;
         }
         &.two {
            // max-w-80  mx-auto
            @apply grid gap-2 place-items-start sm:px-14;
         }
      }
   }
}
</style>
