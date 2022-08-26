<template>
   <VScrollin :misses="no ? 1 : 15" :speed="no ? 0.001 : 15">
      <slot></slot>
   </VScrollin>
</template>

<script>
import VScrollin from "vue-scrollin";

export default {
   props: ["no"],
   components: { VScrollin },
};
</script>
