<template>
   <div @click="handleClick()">
      <slot></slot>
   </div>
</template>

<script>
export default {
   methods: {
      handleClick() {
         // location.href = this.LCG("page_visit_prev");
         location.href = "/";
      },
   },
};
</script>
