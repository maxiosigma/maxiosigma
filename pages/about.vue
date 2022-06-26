<template>
  <LayoutPage :bodyStyle="'body-bg about'">
    <div
      class="
        container
        flex-grow
        h-full
        mx-auto
        max-h-full
        z-10
        gap-5
        grid-cols-[2fr,1fr]
        relative
        inline-grid
        overflow-hidden
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
        <div class="font-black mb-2 text-2xl tracking-[5px] uppercase">Welcome</div>
        <div class="font-black text-md tracking-[2px] uppercase">← Максим</div>
        <div class="font-black text-md mb-3 tracking-[2px] uppercase">
          ← <span class="text-xs">Автор и разработчик сайта</span>
        </div>

        <div class="font-black text-md tracking-[1px] uppercase">
          ▬ <span class="text-xs">Желаете узнать подробнее ?</span>
        </div>

        <div
          class="
            rounded-md
            cursor-pointer
            bg-green-700
            mt-4
            text-white text-xl
            py-2
            px-4
            duration-300
            pointer-events-auto
            hover:(bg-yellow-600)
          "
        >
          <div>Да</div>
        </div>
      </div>
    </div>

    <!--<ItemCanvaBg></ItemCanvaBg>-->
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