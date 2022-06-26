<template>
  <LayoutPage :bodyStyle="'body-bg about'">
    <div
      class="
        container
        flex-grow
        mx-auto
        z-10
        gap-5
        grid-cols-[0.9fr,1.1fr]
        relative
        inline-grid
        pointer-events-none
      "
    >
      <div class="flex justify-center about-img-container items-end">
        <ItemImg
          class="h-full object-cover object-center about-img"
          src="about/face_1.png"
        ></ItemImg>
      </div>

      <div class="flex-col text-white inline-flex place-items-start self-center about-text">
        <div class="">Добро пожаловать</div>
        <div class="">Меня зовут Максим</div>
        <div class="">Автор и разработчик сайта</div>

        <div
          class="
            rounded-md
            cursor-pointer
            bg-green-700
            mt-1
            text-white
            px-4 px-2
            duration-300
            pointer-events-auto
            hover:(bg-yellow-600)
          "
        >
          <div>Кнопка</div>
        </div>
      </div>
    </div>

    <ItemCanvaBg></ItemCanvaBg>
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
      visible: 0,
    }
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