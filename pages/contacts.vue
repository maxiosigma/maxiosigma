<template>
   <!--  bodyStyle="contacts" -->
   <LayoutPage :title="title" :description="description">
      <ItemEffectWaveHexagon />

      <div class="flex-grow text-center grid-center py-10 px-4 text-light-200 z-10 gap-10 place-content-center place-items-center relative">
         <div class="font-light max-w-md tracking-wider px-4 text-light-900 fotn-xl">
            Свяжитесь со мной по электронной почте, используя один из вариантов ниже
         </div>

         <div class="max-w-md grid px-4 gap-1" v-for="(it, i) in data" :key="i">
            <div class="text-lg text-light-200 uppercase">{{ it.t }}</div>
            <div class="text-sm text-light-900">{{ it.d }}</div>
            <div
               @click="handleClick(it.a)"
               class="cursor-pointer transition-all text-yellow-400 duration-200 hover:(text-indigo-400 tracking-wide)"
            >
               {{ it.a }}
            </div>
         </div>

         <div class="grid-center gap-1">
            <div class="text-lg text-light-200 uppercase">Социальные сети</div>

            <div class="mx-auto max-w-sm text-sm text-light-900">
               Официальные страницы для взаимодействия в социальных сетях представлены здесь
            </div>

            <div class="mt-2 grid gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
               <ItemLink
                  :href="it.externalPath"
                  :blank="it.blank"
                  class="group"
                  :key="i"
                  v-for="(it, i) in social"
                  @click.native.prevent="handleClickNext({ url: it.externalPath, target: 'blank' })"
               >
                  <div class="flex transition duration-200 items-center">
                     <div class="flex-center min-w-12 min-h-12">
                        <i :class="['font-ft', `ft-${it.icon}`, 'group-hover:(text-yellow-500)']"></i>
                     </div>

                     <div class="text-base ml-1 inline group-hover:(text-indigo-300)">
                        {{ it.title }}
                     </div>
                  </div>
               </ItemLink>
            </div>
         </div>
      </div>
   </LayoutPage>
</template>

<script>
export default {
   head() {
      return {
         title: this.title,
         description: this.description,
      };
   },
   data() {
      return {
         title: "Контакты",
         description: "Контактные данные",
         data: [
            {
               t: "Личные вопросы",
               d: "Если вы являетесь представителем СМИ и вам очень хочется связаться со мной, пожалуйста, обращайтесь",
               a: "maxiosigma@mail.ru",
            },
            {
               t: "Общие вопросы",
               d: "По общим вопросам пишите",
               a: "maxiosigma@gmail.com",
            },
         ],
         social: this.$store.state.strapi.socbar,
      };
   },
   mounted() {
      //console.log(this.$store.state.strapi.socbar);
   },
   methods: {
      handleClick(url) {
         window.open("mailto:" + url, "emailWindow");
      },
      handleClickNext({ url = undefined, target = undefined }) {
         url ? (target == "blank" ? window.open(url) : (location.href = "/" + this.$i18n.locale + url)) : null;
      },
   },
};
</script>

<style lang="scss">
.contacts {
   @apply bg-green-900 bg-opacity-15;
}
</style>
