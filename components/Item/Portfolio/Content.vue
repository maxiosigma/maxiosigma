<template>
   <div class="portfolio-project-content">
      <div class="pb-1 border-b-2 border-orange-600">{{ data.title }}</div>
      <div class="">{{ data.description }}</div>

      <div class="inline" v-for="(ast, i) in data.assets" :key="i">
         <span v-if="ast && i === 'fonts'">Шрифты:</span>
         <span v-if="ast && i === 'models'">Контент-модели:</span>
         <span v-if="ast && i === 'technologies'">Технологии:</span>

         <span v-for="(st, j) in ast" :key="j">
            <span
               :class="[
                  'cursor-pointer transition duration-300',
                  reverse ? 'text-orange-200 hover:(text-orange-300)' : 'text-cyan-600 hover:(text-cyan-500)',
               ]"
            >
               {{ st }}
            </span>
            <span class="opacity-75 mx-1px" v-if="j !== ast.length - 1"> | </span>
         </span>
      </div>

      <!--<div class="inline" v-if="data.assets.fonts.length > 0">
         Шрифты:
         <nobr v-for="(ft, i) in data.assets.fonts" :key="i">
            <nobr :class="['cursor-pointer', reverse ? 'text-orange-200 hover:(text-orange-300)' : 'text-cyan-600 hover:(text-cyan-500)']">
               {{ ft }}
            </nobr>
            <nobr class="opacity-75 mx-1px" v-if="i !== data.assets.fonts.length - 1"> | </nobr>
         </nobr>
      </div>

      <div class="inline" v-if="data.assets.models.length > 0">
         Контент-модели:
         <nobr v-for="(md, i) in data.assets.models" :key="i">
            <nobr :class="['cursor-pointer', reverse ? 'text-orange-200 hover:(text-orange-300)' : 'text-cyan-600 hover:(text-cyan-500)']">
               {{ ft }}
            </nobr>
            <nobr class="opacity-75 mx-1px" v-if="i !== data.assets.fonts.length - 1"> | </nobr>
         </nobr>
      </div>

      <div v-if="data.assets.models">{{ data.assets.models }}</div>
      <div v-if="data.assets.technologies">{{ data.assets.technologies }}</div>-->
   </div>
</template>

<script>
export default {
   props: ["visible", "reverse", "data", "i"],
};
</script>

<style lang="scss">
.portfolio-project-content {
   @apply grid gap-y-2;
}
</style>
