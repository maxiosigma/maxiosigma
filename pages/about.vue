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
        <div class="about-title">Welcome</div>
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
          { 'animated animate-fade-out-down': visible === 1.5 },
          { '!hidden': visible >= 2 },
        ]"
      >
        <div class="about-title-big">Биография</div>

        <div class="about-text">
          Родился и вырос в г.Инте. В 5 классе переехал в Сыктывкар. ........
        </div>

        <div class="mt-3 about-btn" @click="handleClick()">Хобби & Достижения</div>
      </div>

      <div
        :class="[
          'about-field justify-self-center col-span-2',
          { '!hidden': visible < 2 },
          { 'animated animate-fade-in-down': visible === 2 },
          { 'animated animate-fade-out-right': visible === 2.5 },
          { '!hidden': visible >= 3 },
        ]"
      >
        <div class="about-title-big">Хобби & Достижения</div>

        <div class="about-text">
          <div
            class="my-2 grid gap-1"
            v-for="(it, i) in [
              {
                title: 'MAIN HOBBIES IN PROFESSIONAL ACTIVITY',
                items: [
                  'Кроссплатформенная разработка игр',
                  'Разработка адаптивных кроссбраузерных сайтов',
                  '3D-моделирование и персонализация с анимацией',
                ],
              },
              {
                title: 'HOBBIES IN EVERYDAY LIFE',
                items: [
                  'Литературный труд, где основной жанр фантастика',
                  'Спорт - плавание и легкая атлетика на свежем воздухе и в тренажерном зале',
                  'Кулинария - готовлю еду для себя и своей семьи, постоянно изучая новые рецепты',
                ],
              },
              {
                title: 'CHARTERS AND AWARDS',
                items: [
                  'Квалификация повара 2 разряда в 2013 году',
                  'Грамота за 1 место при соревнованиях по плаванию в 2006 году',
                  'Грамота за успешное окончание 4 класса, хорошие резальтаты в плавании и участии жизни класса в 2006 году',
                  'Грамота за 1 место при соревнованиях по плаванию в 2004 году',
                ],
              },
            ]"
            :key="i"
          >
            <div class="font-semibold tracking-wider text-3xl uppercase">{{ it.title }}</div>

            <div class="text-xl grid gap-1">
              <div class="inline-flex" v-for="(sit, j) in it.items" :key="j">
                <div class="mr-3 ml-5 pointer-events-none">»</div>
                {{ sit }}
              </div>
            </div>
          </div>

          <div class="mt-5">О профессиональной деятельности подробнее в</div>
        </div>

        <div class="about-btn" @click="handleClick('/' + $i18n.locale + '/portfolio')">
          Портфолио
        </div>
      </div>
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
    //console.log(this.visible)
  },
  methods: {
    handleClick(url) {
      this.visible += 0.5
      setTimeout(() => {
        this.visible += 0.5
        url ? (location.href = url) : null
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
    @apply flex-col text-white py-10 inline-flex place-items-start self-center;
    @apply animate-duration-1000 animate-delay-500;
  }

  &-title {
    @apply font-black mb-5 text-2xl tracking-[5px] uppercase;

    &-big {
      @apply border-double font-black font-windctt border-b-5 border-b-yellow-500 pr-4 pb-2 text-4xl tracking-[5px] uppercase md:text-5xl;
    }
  }

  &-text {
    @apply font-bold font-vetka my-5 tracking-wider text-2xl;
  }
}
</style>