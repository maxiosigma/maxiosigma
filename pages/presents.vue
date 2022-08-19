<template>
   <LayoutPage :title="title" :description="description">
      <div class="flex-grow flex-center text-light-200 presents">
         <div :class="[!isSubs ? 'flex-center' : 'hidden']"></div>
         <div :class="[!isSubs ? 'hidden' : 'flex-center']"></div>
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
         title: "Подарки",
         description: "Полезности и всякие ништяки !!!",
         isSubs: false,
      };
   },
   mounted() {
      this.isSubs = document.cookie.indexOf("sbjs") !== -1;

      if (this.isSubs) {
         setTimeout(() => {
            this.$toast.show("Вы подписаны, подарки скоро будут, ожидайте (push | email) уведомления", {
               theme: "outline",
               position: "top-center",
               duration: 10000,
            });
         }, 1500);

         setTimeout(() => {
            this.routeLight("sentences");
         }, 10500);
      } else {
         setTimeout(() => {
            this.$toast.show("Вы не подписаны, поэтому вы не можете получить подарки", {
               theme: "outline",
               position: "top-center",
               duration: 10000,
            });
         }, 1500);

         setTimeout(() => {
            this.routeLight("subs");
         }, 10500);
      }
   },
   //methods: {
   //  isSubs() {
   //  this.isSubs =  document.cookie.indexOf("sbjs") !== -1
   //  },
   //},
};
</script>

<style lang="scss"></style>
