<template>
  <LayoutPage :bodyStyle="'body-bg about'">
    <div class="about-cont">
      <div class="about-img-cont">
        <ItemImg class="about-img" src="about/face_1.png"></ItemImg>
      </div>

      <div class="flex-col text-white inline-flex place-items-start self-center about-text">
        <div class="font-black mb-5 text-2xl tracking-[5px] uppercase">Welcome</div>
        <div class="font-black text-md tracking-[2px] uppercase">← Максим</div>
        <div class="font-black text-md tracking-[2px] uppercase">
          ← <span class="text-xs">Автор и разработчик сайта</span>
        </div>

        <div class="font-black mt-4 text-md mb-5 tracking-[1.5px] uppercase">
          ▬ <span class="text-xs">Желаете узнать подробнее ?</span>
        </div>

        <div class="about-btn">Да</div>
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
  &-cont {
    @apply container flex-grow h-full mx-auto max-h-full z-10 gap-5 grid-cols-[1.7fr,1fr] relative inline-grid overflow-hidden pointer-events-none;
  }

  &-img {
    @apply h-full object-cover object-center;

    &-cont {
      @apply flex justify-center items-end;
    }
  }

  &-btn {
    @apply rounded-md cursor-pointer bg-green-700 text-white text-xl py-2 px-4 transition-all duration-300 pointer-events-auto hover:(bg-yellow-600 px-6 py-3 text-shadow) ;
  }
}
</style>