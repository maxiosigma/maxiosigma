<template>
   <LayoutPage :bodyStyle="'body-bg about'" :title="title" :description="description">
      <!--<div class="rounded-none hover:(!text-yellow-300)"></div>-->

      <div class="about-cont">
         <div
            :class="[
               'about-img-cont',
               { 'animated animate-fade-in-left-big': visible === 0 },
               { 'animated animate-fade-out-left-big': visible === 0.5 },
               { '!hidden': visible >= 1 },
            ]"
         >
            <ItemMedia class="about-img" src="about/face_1.webp"></ItemMedia>
         </div>

         <div
            :class="[
               'about-field first',
               { 'animated animate-fade-in-right-big': visible === 0 },
               { 'animated animate-fade-out-right-big': visible === 0.5 },
               { '!hidden': visible >= 1 },
            ]"
         >
            <div class="about-title" v-anime="animateAnimeBlock({ dl: 2, sk: 7 })">
               <!--<vue-typed-js :strings="['Welcome']"><span class="typing"></span></vue-typed-js>-->
               Welcome
            </div>
            <div class="font-black text-xl tracking-[2px] uppercase" v-anime="animateAnimeBlock({ dl: 2.2 })">← Максим</div>
            <div class="font-black text-xl tracking-[2px] uppercase" v-anime="animateAnimeBlock({ dl: 2.4 })">
               ← <span class="text-base">Автор и разработчик сайта</span>
            </div>

            <div class="font-black mt-4 text-xl mb-5 tracking-[1.5px] uppercase" v-anime="animateAnimeBlock({ dl: 2.6, sk: -10 })">
               ▬ <span class="text-sm">Желаешь узнать подробнее ?</span>
            </div>

            <div class="about-btn" v-anime="animateAnimeBlock({ dl: 2.7, dr: 0.4 })" @click="handleClick()">Да</div>
         </div>

         <div
            :class="[
               'about-field justify-self-center col-span-2',
               { '!hidden': visible < 1 },
               { 'animated animate-fade-in-down': visible === 1 },
               { 'animated animate-fade-out-down': visible === 1.5 },
               { '!hidden': visible >= 2 },
            ]"
         >
            <!-- Биография -->
            <div class="about-title-big">Краткая история</div>

            <div class="flex-col about-text inline-flex">
               <div
                  v-for="(it, i) in [
                     'Родился и вырос в г.Инте, 1995 год',
                     'В 5 классе переехал в г.Сыктывкар, 2007 год',
                     'C 1 по 9 класс профессионально занимался плаванием, 2011 год',
                     'В 11 классе закончил поварство 2 разряда, 2013 год',
                     'Поступил платно на бакалавриат по очень сложной профессии и закончил хорошо, 2017 год',
                     'Поступил на магистратуру и через полгода взял академический отпуск, 2017 год',
                     'Прошёл целый год армии и восстановился на совершненно другую специализацию, 2018 год',
                     'Окончил магистратуру с красным дипломом отсутствуя полгода, был зимний призыв, 2020 год',
                     'Сейчас, я представитель крутой компании и фрилансер по направлениям: разработка сайтов, ботов и дизайн ...',
                  ]"
                  :key="i"
                  v-anime="animateAnimeBlock({ dl: 2 + i * 0.2 })"
                  :class="['py-0.5', i % 2 == 0 ? 'text-yellow-100' : '']"
               >
                  {{ it }}
               </div>
            </div>

            <div class="mt-3 about-btn" v-anime="animateAnimeBlock({ dl: 2.6, dr: 0.4 })" @click="handleClick()">Хобби & Достижения</div>
         </div>

         <div
            :class="[
               'about-field justify-self-center col-span-2',
               { '!hidden': visible < 2 },
               { 'animated animate-fade-in-left': visible === 2 },
               { 'animated animate-fade-out-right': visible === 2.5 },
               { '!hidden': visible >= 3 },
            ]"
         >
            <div class="about-title-big">Хобби & Достижения</div>

            <div class="about-text">
               <div
                  class="my-2 grid gap-1.5"
                  v-for="(it, i) in [
                     {
                        title: 'Основные хобби в профессиональной жизни',
                        items: [
                           'Разработка адаптивных кроссбраузерных сайтов',
                           'Дизайн: фирменный стиль, макеты сайтов, брендирование, презентации, баннеры, логотипы',
                        ],
                     },
                     {
                        title: 'Дополнительные хобби в профессиональной жизни',
                        items: [
                           'Изучение английского языка',
                           'Кроссплатформенная разработка игр',
                           '3D-моделирование и персонализация с анимацией',
                        ],
                     },
                     {
                        title: 'Хобби в повседневной жизни',
                        items: [
                           'Литературный труд, где основной жанр фантастика',
                           'Спорт - плавание и легкая атлетика на свежем воздухе',
                           'Кулинария - готовлю еду, постоянно изучая новые рецепты',
                        ],
                     },
                     {
                        title: 'Награды и достижения',
                        items: [
                           'Красный диплом по магистратуре: управление проектами за 2020 год при отсутствии 1/2 года в армии',
                           'Прошёл до конца 1 год срочной армии ВКС ПВО ПРО',
                           'Cиний диплом по бакалвриату: прикладная математика и информатика за 2017 год',
                           'Квалификация повара 2 разряда и окончание 11 класса в 2013 году',
                           'Неофициальный статус кандидата в мастера спорта по плаванию в 2011 году, вышел из спорта',
                           'Квалификация 2 взрослого разряда по плаванию в 2010 году',
                           'Грамота за 1 место при соревнованиях по плаванию в 2006 году',
                           'Грамота за успешное окончание 4 класса, хорошие резальтаты в плавании и участии жизни класса в 2006 году',
                           'Грамота за 1 место при соревнованиях по плаванию в 2004 году',
                        ],
                     },
                  ]"
                  :key="i"
               >
                  <div class="font-semibold text-xl tracking-wider text-yellow-200 uppercase" v-anime="animateAnimeBlock({ dl: 2 + i * 0.2 })">
                     {{ it.title }}
                  </div>

                  <div class="text-xl grid gap-1.5">
                     <div
                        class="inline-flex diagonal-fractions"
                        v-for="(sit, j) in it.items"
                        :key="j"
                        v-anime="animateAnimeBlock({ dl: 2 + i * 0.2 + j * 0.1 })"
                     >
                        <div class="mr-3 ml-5 pointer-events-none">»</div>
                        {{ sit }}
                     </div>
                  </div>
               </div>

               <div class="mt-5 inline-flex items-center <sm:(grid gap-4 text-center)" v-anime="animateAnimeBlock({ dl: 2.6, dr: 0.4 })">
                  <div class="text-xl">Какие действия вы выбираете дальше, мы пойдём ...</div>

                  <div class="grid gap-2 mt-3 ml-3 text-center">
                     <div class="about-btn" @click="handleClick('/' + $i18n.locale + '/presents')">Подарки</div>
                     <div class="about-btn" @click="handleClick('/' + $i18n.locale + '/portfolio')">Портфолио</div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <ItemCanvaFiguresFlyApart />
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
         visible: 0,
         size: { w: 0, h: 0 },
         title: "Автор",
         description: "Сайт Макса, почитайте обо мне",
      };
   },
   mounted() {
      this.getSize();

      window.addEventListener("resize", () => {
         this.getSize();
      });

      this.LCST("about", true, 5000);
   },
   methods: {
      getSize() {
         this.size = { w: document.body.clientHeight, h: document.body.clientWidth };
      },
      handleClick(url) {
         this.visible += 0.5;

         setTimeout(() => {
            this.visible += 0.5;
            url ? (location.href = url) : null;
         }, 3000);

         document.body.scrollIntoView();
      },
      //animateAnimeBlock({ dl = 1, dr = 1, sc = 1, sk = 1, tx = 0, lp = false, rn = 1 }) {
      //  return {
      //    //round: rn,
      //    loop: lp,
      //    perspective: 5000,
      //    translateX: [tx, 0],
      //    scale: [0.0, sc],
      //    skew: [1, sk],
      //    duration: dr * 1000,
      //    delay: dl * 1000,
      //  }
      //},
      //useTyped(ref, string, value) {
      //  if (this.visible === value)
      //    new Typed(ref, {
      //      strings: [string],
      //    })
      //},
   },
};
</script>

<style lang="scss">
.about {
   &-cont {
      @apply container flex-grow h-full mx-auto max-h-full z-10 gap-5 grid-cols-[1.5fr,1fr] relative inline-grid overflow-hidden pointer-events-none sm:px-5;
   }

   &-img {
      @apply h-full min-h-full object-cover object-center;

      &-cont {
         // max-h-85vh
         @apply flex h-full max-h-80vh overflow-hidden justify-center items-end self-end;
         @apply animate-duration-1000 animate-delay-500;
      }
   }

   &-btn {
      @apply break-normal rounded-md cursor-pointer font-roboto font-bold bg-green-700 text-white text-sm py-2 px-4 transition-all tracking-[2px] duration-500 uppercase pointer-events-auto hover:(bg-yellow-600 px-6 text-base py-3 tracking-[3px] text-shadow);
   }

   &-field {
      @apply flex-col mx-auto text-white max-w-2xl py-10 inline-flex place-items-start self-center <sm:px-5;
      @apply animate-duration-1000 animate-delay-500;

      &.first {
         @apply max-w-none w-full py-0 px-0 <sm:pr-2 #{!important};
      }
   }

   &-title {
      @apply font-black mb-5 text-4xl tracking-[5px] uppercase;

      &-big {
         @apply border-double font-black font-windctt border-b-5 border-b-yellow-500 pr-4 pb-2 text-4xl tracking-[5px] uppercase md:text-5xl;
      }
   }

   &-text {
      @apply font-bold max-w-full font-vetka my-5 tracking-wider text-2xl break-all overflow-hidden;
   }
}
</style>
