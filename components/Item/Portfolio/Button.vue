<template>
   <client-only>
      <particle-btn
         :class="['group', classed ? toogleBlack(black) : 'pointer-events-none']"
         :cls="['portfolio-section-button', cls, toogleBlack(black)]"
         :visible.sync="options.visible"
         :animating.sync="options.animating"
         :options="options"
         @click.native="handleClick"
      >
         {{ value }}
      </particle-btn>
   </client-only>
</template>

<script>
export default {
   props: {
      text: {
         type: Array,
         default: () => ["Все проекты", "Свернуть"],
      },
      opts: {
         type: Object,
         default: () => {},
      },
      black: {
         type: Boolean,
         default: false,
      },
      cls: {
         type: String,
         default: "",
      },
   },
   data() {
      return {
         action: false,
         classed: true,
         value: this.text[0],
         options: {
            size: 1,
            visible: true,
            animating: false,
            style: "stroke",
            type: "triangle",
            direction: "left",
            canvasPadding: 100,
            onComplete: () => {
               this.onCompleteBtn();
            },
            onBegin: () => {},
            //color: "#ffffff",
            //color: () => { return Math.random() <script 0.5 ? "#000000" : "#ffffff";},
         },
      };
   },
   methods: {
      handleClick() {
         this.action = true;
         this.classed = !this.classed;
         setTimeout(() => (this.classed = !this.classed), 3500);
      },
      onCompleteBtn() {
         if (this.action) {
            this.options.visible = !this.options.visible;
            this.value = this.value === this.text[0] ? this.text[1] : this.text[0];
            this.action = false;
         }
      },
   },
};
</script>

<style lang="scss">
.portfolio {
   &-section {
      &-button {
         //mx-2.2 my-1.5 rounded-md shadow-none
         @apply px-4 py-2 uppercase text-xs text-white cursor-pointer #{!important};
         @apply group-hover:(bg-orange-500 transition-all duration-700) #{!important};

         &.black {
            // shadow-custom-green-5px
            @apply bg-green-500 #{!important};
            //@apply hover:(bg-orange-500 transition duration-500 shadow-none) #{!important};
            //shadow-custom-orange-10px
         }

         &.white {
            // shadow-custom-blue-5px
            @apply bg-indigo-500 #{!important};
            //@apply hover:(bg-orange-500 transition duration-500 shadow-none) #{!important};
            //shadow-custom-orange-20px
         }
      }
   }
}

.vue-particle-effect {
   &-button {
      @apply bg-transparent #{!important};

      & .particles {
         @apply flex-center rounded-lg overflow-hidden bg-transparent #{!important};

         &-wrapper {
            @apply bg-transparent #{!important};
         }
      }

      //&.black {
      //   & .particles {
      //      @apply shadow-custom-green-25px #{!important};
      //   }
      //}

      //&.white {
      //   & .particles-wrapper {
      //      @apply border-2 border-blue-700 #{!important};
      //   }
      //}

      //   & .particles-button {
      //   }

      //   & .particles-wrapper {
      //      @apply overflow-visible  #{!important};
      //   }
   }
}
</style>
