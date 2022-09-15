<template>
   <div class="portfolio-project-content">
      <div class="pb-1 border-b-2 border-orange-600">{{ data.title }}</div>
      <div class="break-normal hyphens-auto">{{ data.description }}</div>

      <div class="inline" v-for="(ast, i) in data.assets" v-if="ast.length > 0" :key="i">
         <span v-if="i === 'fonts'" v-text="ast.length === 1 ? 'Шрифт:' : 'Шрифты:'"></span>
         <span v-if="i === 'models'" v-text="ast.length === 1 ? 'Контент-модель:' : 'Контент-модели:'"></span>
         <span v-if="i === 'technologies'" v-text="ast.length === 1 ? 'Технология:' : 'Технологии:'">:</span>

         <span :class="['text-xs inline-flex flex-wrap place-content-start place-items-start', ast.length === 1 ? 'ml-1' : '']">
            <span
               v-for="(st, j) in ast"
               :key="j"
               :class="[
                  'flex-center text-light-200 my-1 px-1.2 py-0.5 rounded-md cursor-pointer transition duration-300',
                  reverse ? 'bg-indigo-600 hover:(bg-indigo-500)' : 'bg-green-600 hover:(bg-green-500)',
                  j !== ast.length - 1 ? 'mr-1' : '',
               ]"
            >
               {{ st }}
            </span>
         </span>
      </div>

      <ItemPortfolioButton
         class="self-start justify-self-start mt-2"
         :black="reverse"
         v-if="data.link"
         @click.native.prevent="handleClick(data.link)"
         :text="['Посмотреть', 'Просмотрено']"
      />

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
   active: false,
   methods: {
      handleClick(lnk) {
         if (!this.active) window.open(lnk, "_blank");
         this.active = !this.active;
      },
   },
};
</script>

<style lang="scss">
.portfolio-project-content {
   @apply grid gap-y-2;
}
</style>
