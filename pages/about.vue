<template>
  <LayoutPage :bodyStyle="'body-bg about'">
    <div class="container flex-grow flex mx-auto my-0 items-end about-container">
      <div class="w-3/5">
        <ItemImg
          class="h-full object-cover my-0 w-full justify-end"
          src="about/face_1.png"
        ></ItemImg>
      </div>
    </div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Автор",
    }
  },
  data() {
    return {
      visual: false,
      deviceType: this.$ua.deviceType(),
      items: {
        titles: [
          { t: "Лидер", cl: "text-yellow-600" },
          {},
          { t: "Бизнесмен", cl: "text-red-600" },
          {},
          { t: "Филантроп", cl: "text-blue-600" },
        ],
        abouts: ["Работаю с командой", "Фрилансер с 2017 года", "Поддерживаю бренд"],
        commerce: [
          "Оцифровываю бизнесы",
          "Помогаю с доходом на конкурентах",
          "Приобщаю к умным покупкам",
        ],
        hobbies: ["Разрабатываю сайты", "Создаю продающий дизайн", "Занимаюсь спортом"],
      },
    }
  },
  mounted() {
    setTimeout(() => {
      this.visual = true
    }, this.$store.state.timeout)

    setTimeout(() => {
      this.$refs.promo?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, this.$store.state.timeout - 1 + 90601)

    this.storageItem("about")
  },
}
</script>

<style lang="scss">
.about {
  //@apply flex flex-col -mt-20 z-10 relative <lg: (flex-wrap pt-5 pb-10) ;
}
</style>