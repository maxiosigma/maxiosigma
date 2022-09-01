<template>
   <client-only>
      <particle-btn
         :cls="['portfolio-section-button', toogleBlack(black)]"
         :visible.sync="options.visible"
         :animating.sync="options.animating"
         :options="options"
         @click.native="handleClick()"
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
   },
   data() {
      return {
         action: false,
         value: this.text[0],
         options: {
            size: 1,
            visible: true,
            animating: true,
            style: "stroke",
            type: "triangle",
            direction: "left",
            canvasPadding: 100,
            onComplete: () => this.onCompleteBtn(),
            onBegin: () => {},
            //color: "#ffffff",
            //color: () => { return Math.random() <script 0.5 ? "#000000" : "#ffffff";},
         },
      };
   },
   methods: {
      handleClick() {
         this.action = !this.action;
         //this.$emit("action", this.action);
      },
      onCompleteBtn() {
         //if (this.action) {

         //this.action = this.value === this.text[0] ? !this.action : this.action;

         this.options.visible = this.action ? !this.options.visible : this.options.visible;

         this.value = this.value === this.text[0] ? this.text[1] : this.text[0];

         //this.value === this.text[0] ? (this.value = this.text[1]) : (this.value = this.text[0]);
         //setTimeout(() => (this.action = false), 1500);

         this.action = this.options.visible ? !this.action : this.action;

         this.$emit("action", !this.action);
         //}

         //this.$payloadURL(route)
      },
   },
};
</script>

<style lang="scss">
.portfolio {
   &-section {
      &-button {
         @apply px-4 py-2 mx-2.2 my-1.5 uppercase text-xs text-white rounded-md cursor-pointer #{!important};

         &.black {
            @apply bg-green-500 shadow-custom-green-5px #{!important};
            @apply hover:(bg-orange-500 transition duration-500 shadow-none) #{!important};
            //hadow-custom-orange-10px
         }

         &.white {
            @apply bg-indigo-500 shadow-custom-blue-5px #{!important};
            @apply hover:(bg-orange-500 transition duration-500 shadow-none) #{!important};
            //shadow-custom-orange-20px
         }
      }
   }
}

//.vue-particle-effect-button {
//   & .particles-button {
//   }

//   & .particles-wrapper {
//      @apply overflow-visible  #{!important};
//   }
//}
</style>
