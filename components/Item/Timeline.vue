<template>
  <div class="timeline">
    <div :class="['my-5']" v-for="(it, i) in content" :key="i">
      <!--<div class="">{{ it }}</div>-->
      <!--<div class="" v-if="isVideo(it.media.data[0].attributes.ext)"></div>
      <ItemImgStrapiBg
        class="bg-contain bg-transparent !h-40 !w-40"
        :src="it.media.data[0].attributes.url"
        v-else
      >
      </ItemImgStrapiBg>-->
      <!--{{ it.media.data[0].attributes }}-->
    </div>
  </div>
</template>

<script>
export default {
  props: ["content"],
}
</script>

<style lang="scss">
</style>