<template>
   <client-only>
      <particle-btn :visible.sync="options.visible" :animating.sync="options.animating" :options="options" cls="btn-cls">
         <slot></slot>
      </particle-btn>

      <h2>animating:{{ btnOps.animating }}</h2>
      <h2>visible:{{ btnOps.visible }}</h2>
      <button @click="btnOps.visible = !btnOps.visible">toggle</button>
   </client-only>
</template>

<script>
export default {
   props: ["options"],
};
</script>

<style lang="scss">
.portfolio {
   & .btn {
   }
}
</style>
