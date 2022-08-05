<template>
   <div class="timeline">
      <!--<div :class="['my-5']" v-for="(it, i) in content" :key="i">
      <div class="">{{ it }}</div>

      <div class="" v-if="isVideo(it.media.data[0].attributes.ext)"></div>
       <ItemImgStrapiBg
        class="bg-contain bg-transparent !h-40 !w-40"
        :src="it.media.data[0].attributes.url"
        v-else
      >
      </ItemImgStrapiBg>
      {{ it.media.data[0].attributes }}
     </div>-->

      <div class="timeline-container">
         <div :class="['flex flex-grow items-center min-w-80 my-5', i % 2 === 0 ? 'flex-row-reverse' : '']" v-for="(it, i) in content" :key="i">
            <div class="bg-indigo-900 rounded-md bg-hero-floating-cogs-white-5 bg-5r p-2 min-w-60">
               <div class="">{{ it.date }}</div>
               <div>{{ it.title }}</div>
               <div>{{ it.description }}</div>
            </div>

            <div class="relative p-1 flex-center !w-10 !h-10 rounded-full overflow-hidden" :class="['', i % 2 === 0 ? 'mr-4' : 'ml-4']">
               <!--<ItemImgStrapiBg
                  v-for="(media, i) in it.media"
                  :key="i"
                  class="bg-contain rounded-md bg-transparent min-w-20 min-h-20 !h-full !w-full"
                  :src="media.url"
               >
               </ItemImgStrapiBg>-->

               <!--<nuxt-img src="uploads/Avatarka_Seller_a115c2f47f_2102ded582_79cc2bfa62_98d921f3f9.png"></nuxt-img>-->

               <ItemImgStrapi v-for="(media, i) in it.media" :key="i" :src="media.url"></ItemImgStrapi>
            </div>

            <!--<div>{{ it.technologies }}</div>
            <div>{{ it.fonts }}</div>
            <div>{{ it.models }}</div>-->
         </div>
      </div>
   </div>
</template>

<script>
export default {
   props: ["content"],
};
</script>

<style lang="scss">
.timeline {
   @apply px-5;

   &-container {
      @apply container flex-center flex-col mx-auto;
   }
}
</style>
