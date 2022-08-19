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
         <div
            :class="['flex flex-grow items-center min-w-1/2 min-h-1/3 w-1/2 my-5', i % 2 === 0 ? 'flex-row-reverse' : '']"
            v-for="(it, i) in content"
            :key="i"
         >
            <div
               :class="[
                  'bg-indigo-900 rounded-md items-center relative flex bg-hero-floating-cogs-white-5 bg-5r px-6 py-4 min-w-60',
                  i % 2 === 0 ? 'flex-row-reverse' : '',
               ]"
            >
               <div :class="['flex-grow self-start', i % 2 === 0 ? 'ml-4' : 'mr-4 text-right']">
                  <div v-if="it.title" class="text-xl">{{ it.title }}</div>
                  <div v-if="it.description" class="text-sm">{{ it.description }}</div>
               </div>

               <span class="text-xs max-w-4 break-all">
                  <span :class="[i < 1 ? 'text-orange-400' : i === 1 ? 'text-green-300' : '']" v-for="(date, i) in formatDate(it.date)" :key="i">
                     {{ date }}
                  </span>
                  <!--{{ formatDate(it.date) }}-->
               </span>
            </div>

            <div
               class="relative flex-center border-5 border-light-200/75 shadow-custom-orange-15px !min-w-30 !min-h-30 rounded-full overflow-hidden"
               :class="['', i % 2 === 0 ? 'mr-5' : 'ml-5']"
            >
               <ItemImgStrapi
                  class="max-w-none object-center absolute w-full h-full object-cover"
                  v-for="(media, i) in it.media"
                  :key="i"
                  :src="media.url"
               ></ItemImgStrapi>
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
   methods: {
      formatDate(date) {
         return date?.split("-");
      },
   },
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
