<template>
  <LayoutPage :bodyStyle="'body-bg about'">
    <div class="grid-cols-[1fr,1fr] inline-grid">
      <div class="flex min-w-1/2 about-img-container items-end">
        <ItemImg class="object-contain about-img" src="about/face_1.png"></ItemImg>
      </div>

      <div class="flex self-center about-text">
        <div class="text-white">11111</div>
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
      visible: 0,
      //deviceType: this.$ua.deviceType(),
      //items: {
      //  titles: [
      //    { t: "Лидер", cl: "text-yellow-600" },
      //    {},
      //    { t: "Бизнесмен", cl: "text-red-600" },
      //    {},
      //    { t: "Филантроп", cl: "text-blue-600" },
      //  ],
      //  abouts: ["Работаю с командой", "Фрилансер с 2017 года", "Поддерживаю бренд"],
      //  commerce: [
      //    "Оцифровываю бизнесы",
      //    "Помогаю с доходом на конкурентах",
      //    "Приобщаю к умным покупкам",
      //  ],
      //  hobbies: ["Разрабатываю сайты", "Создаю продающий дизайн", "Занимаюсь спортом"],
      //},
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
  methods: {
    handleClick() {
      this.visible += 0.5
      setTimeout(() => (this.visible += 1), 1500)
    },
  },
}
</script>

<style lang="scss">
.about {
  //@apply flex flex-col -mt-20 z-10 relative <lg: (flex-wrap pt-5 pb-10) ;
}
</style>