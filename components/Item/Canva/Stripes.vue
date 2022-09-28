<template>
   <div :class="styles.stripes" :width="scrim.w" :height="scrim.w">
      <canvas
         :class="styles.stripe"
         :width="scrim.w"
         :height="scrim.h"
         :ref="'canva_' + i"
         v-for="(it, i) in kinesis.count"
         :key="i"
         v-anime="{
            translateX: -80 + i * 20, //+ Math.max(windowSize.w, windowSize.h) / 5,
            translateY: -50 + -i * 50, //+ Math.max(windowSize.w, windowSize.h) / 5,
            rotate: 45,
            duration: 100,
            delay: 100 + i * 50,
         }"
      ></canvas>
   </div>
</template>

<script>
export default {
   data() {
      return {
         kinesis: {
            step: 10,
            count: 7,
            active: false,
            duration: 1700,
            delay: 1900,
         },
         windowSize: { w: 0, h: 0 },
         scrim: {
            w: 1000,
            h: 200,
            //center: { w: this.scrim.w / 2, h: this.scrim.h / 2 },
         },
         //deviceType: this.$ua.deviceType(),
      };
   },
   mounted() {
      this.getWindowSize();
      this.getCanvas();
      //console.log(this.$refs);

      window.addEventListener("resize", () => {
         this.getWindowSize();
      });
   },
   methods: {
      getCanvas() {
         Object.keys(this.$refs)?.map((key, i) => {
            const obj = this.$refs?.[key]?.[0];
            this.preDraw(obj, i + 1);
         });
      },
      preDraw(obj, i) {
         //const center = { x: (300 - 25) / 2, y: (150 - 25) / 2 };
         const center = { x: this.scrim.w / 2, y: this.scrim.h / 2 };
         //const color = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"])
         const ctx = obj?.getContext("2d");
         //obj.weight = 500;

         const presets = [
            (obj, triangle) => {
               this.isDraw(obj, () => {
                  //ctx.beginPath();
                  //ctx.moveTo(center.x + 25, center.y + 25);
                  //ctx.lineTo(center.x + 25, center.y + 9);
                  //ctx.lineTo(center.x + 9, center.y + 25);
                  //ctx.closePath();
                  //ctx.strokeStyle = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"]);
                  //ctx.lineWidth = 3;
                  //ctx.stroke();
               });
            },
            (obj, square) => {
               this.isDraw(obj, () => {
                  //ctx.beginPath();
                  //ctx.moveTo(center.x, center.y);
                  //ctx.lineTo(center.x + 16, center.y);
                  //ctx.lineTo(center.x + 16, center.y + 16);
                  //ctx.lineTo(center.x, center.y + 16);
                  //ctx.closePath();
                  //ctx.strokeStyle = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"]);
                  //ctx.lineWidth = 3;
                  //ctx.stroke();
               });
            },
            (obj, arc) => {
               this.isDraw(obj, () => {
                  //ctx.beginPath();
                  ////ctx.arc(center.x + 25, center.y + 25, 9, 0, Math.PI, true);
                  ////ctx.strokeStyle = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"]);
                  //ctx.lineWidth = 3;
                  //ctx.stroke();
               });
            },
         ];

         //const rand = this.intRandom(0, presets.length);

         //return presets[rand](obj);

         this.isDraw(obj, () => {
            //console.log(i);
            //console.log(obj);

            ctx.beginPath();

            //ctx.moveTo(center.x, center.y);
            //ctx.lineTo(center.x + i * 50, center.y);

            ctx.moveTo(center.x, center.y);
            ctx.lineTo(center.x + i * 50, center.y);

            const cnt = i <= Math.ceil(this.kinesis.count / 2) ? i : this.kinesis.count - i + 1; // floor ceil
            console.log(cnt);

            //console.log(this.kinesis.count - i + 1);

            ctx.closePath();
            ctx.strokeStyle = "#FFA500";
            ctx.lineWidth = 3;
            ctx.stroke();
         });
      },
   },
};
</script>

<style lang="scss" module="styles">
.stripe {
   // transform rotate-45  pointer-events-none
   // w-1000px w-auto h-auto
   @apply absolute transition duration-500;

   //&:nth-child(1) {
   //   @apply translate-x-10 -translate-y-10;
   //}

   &s {
      @apply mx-auto w-auto flex-grow flex-center;
   }
}
</style>
