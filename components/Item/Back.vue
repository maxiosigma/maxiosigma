<template>
   <!-- LazyItemRundomString -->
   <div @click="handleClick()">
      <slot></slot>
   </div>
</template>

<script>
export default {
   methods: {
      handleClick() {
         //console.log(this.LCG("page_visit_prev"));
         location.href = this.LCG("page_visit_prev") ?? "/";
      },
   },
};
</script>
