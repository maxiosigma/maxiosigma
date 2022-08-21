<template>
   <VScrollin :misses="15" :speed="15">
      <slot></slot>
   </VScrollin>
</template>

<script>
import VScrollin from "vue-scrollin";

export default {
   components: { VScrollin },
};
</script>
