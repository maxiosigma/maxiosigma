<template>
  <LayoutPage :bodyStyle="'body-bg about'">
    <div class="about-cont">
      <div
        :class="[
          'about-img-cont',
          { 'animated animate-fade-in-left-big': visible === 0 },
          { 'animated animate-fade-out-left-big': visible === 0.5 },
          { '!hidden': visible >= 1 },
        ]"
      >
        <ItemImg class="about-img" src="about/face_1.png"></ItemImg>
      </div>

      <div
        :class="[
          'about-field',
          { 'animated animate-fade-in-right-big': visible === 0 },
          { 'animated animate-fade-out-right-big': visible === 0.5 },
          { '!hidden': visible >= 1 },
        ]"
      >
        <div class="font-black mb-5 text-2xl tracking-[5px] uppercase">Welcome</div>
        <div class="font-black text-md tracking-[2px] uppercase">← Максим</div>
        <div class="font-black text-md tracking-[2px] uppercase">
          ← <span class="text-xs">Автор и разработчик сайта</span>
        </div>

        <div class="font-black mt-4 text-md mb-5 tracking-[1.5px] uppercase">
          ▬ <span class="text-xs">Желаете узнать подробнее ?</span>
        </div>

        <div class="about-btn" @click="handleClick()">Да</div>
      </div>

      <div
        :class="[
          'about-field justify-self-center',
          { '!hidden': visible < 1 },
          { 'animated animate-fade-in-down': visible === 1 },
          { 'animated animate-fade-out-up': visible === 1.5 },
          { '!hidden': visible >= 2 },
          // || visible !== 1 || visible !== 1.5
        ]"
      >
        <div
          class="
            font-black font-windctt
            border-b-2 border-b-yellow-500
            pr-4
            pb-1
            text-4xl
            tracking-[5px]
            self-end
            uppercase
            md:text-5xl
          "
        >
          Биография
        </div>

        <div class="about-text">Родился в г. Инте.</div>

        <div class="mt-3 about-btn" @click="handleClick()">Достижения</div>
      </div>

      <!-- Опыт работы -->
      <!-- Опыт работы -->
    </div>

    <!--<LazyItemCanvaBg />-->
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
      visible: 1,
    }
  },
  mounted() {
    console.log(this.visible)
  },
  methods: {
    handleClick() {
      this.visible += 0.5

      setTimeout(() => {
        this.visible += 0.5

        console.log(this.visible)
      }, 3000)
    },
  },
}
</script>

<style lang="scss">
.about {
  &-cont {
    @apply container flex-grow h-full mx-auto max-h-full px-5 z-10 gap-5 grid-cols-[1.7fr,1fr] relative inline-grid overflow-hidden pointer-events-none;
  }

  &-img {
    @apply h-full object-cover object-center;

    &-cont {
      @apply flex justify-center items-end;
      @apply animate-duration-1000 animate-delay-500;
    }
  }

  &-btn {
    @apply rounded-md cursor-pointer font-bold bg-green-700 text-white text-sm tracking-wide py-2 px-4 transition-all duration-500 uppercase pointer-events-auto hover:(bg-yellow-600 px-6 text-base py-3 text-shadow) ;
  }

  &-field {
    @apply flex-col text-white inline-flex place-items-start self-center;
    @apply animate-duration-1000 animate-delay-500;
  }

  &-text {
    @apply font-bold font-vetka my-5 text-xl;
  }
}
</style>