<template>
   <!--  :width="scrim.w" :height="scrim.w" -->

   <div :class="styles.stripes">
      <!-- 
+ (isCenter(i) ? -(countCenter(i) * scrim.step) / 2 : -(countCenter(i) * scrim.step) / 4)
+ (isCenter(i) ? -(countCenter(i) * scrim.step) / 2 : -(countCenter(i) * scrim.step) / 4)
 -->

      <canvas
         :class="styles.stripe"
         :width="scrim.w"
         :height="scrim.h"
         :ref="'canva_' + i"
         v-for="(it, i) in kinesis.count"
         :key="i"
         v-anime.set="{ opacity: 0 }"
         v-anime="{
            duration: 100,
            delay: 1000 + i * 100,
            translateX: i * scrim.step - scrim.w / 8, // - Math.max(windowSize.w, windowSize.h) / 5,
            translateY: -i * scrim.step + scrim.w / 8, // + Math.max(windowSize.w, windowSize.h) / 5,
            opacity: opacity || intRandom(80, 100) / 100,
            rotate: intRandom(44, 46),
         }"
      ></canvas>
   </div>
</template>

<script>
export default {
   props: {
      color: String,
      random: { type: Array, default: false },
      koef: { type: Number, default: 1 },
      step: { type: Number, default: 30 },
      count: { type: Number, default: 9 },
      height: { type: Number, default: 2 },
      opacity: { type: Number, default: false },
   },
   data() {
      return {
         kinesis: {
            step: 10,
            count: this.count,
            active: false,
            duration: 1700,
            delay: 1900,
         },
         windowSize: { w: 0, h: 0 },
         scrim: { w: 1000 * this.koef, h: this.height ?? 2 * this.koef, step: this.step },
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
      isCenter(i) {
         return i <= Math.floor(this.kinesis.count / 2);
      },
      countCenter(i) {
         return this.isCenter(i) ? i : this.kinesis.count - i + 1;
      },
      preDraw(obj, i) {
         const widthOne = this.scrim.w / (this.kinesis.count + 1);
         const wd = this.countCenter(i) * widthOne;
         const center = { x: this.scrim.w / 2 - wd / 2, y: this.scrim.h / 2 };
         const ctx = obj?.getContext("2d");

         this.isDraw(obj, () => {
            ctx.beginPath();

            if (i % 2 === 1) {
               ctx.moveTo(center.x, center.y);
               ctx.lineTo(center.x + this.countCenter(i) * widthOne, center.y);
            } else {
               for (let j = 0; j <= this.countCenter(i); j++) {
                  const oj = j !== 0;
                  const ij = j !== this.countCenter(i);
                  const mv = wd * (j / (this.countCenter(i) + 1));
                  const ln = (wd * (j + 1)) / (this.countCenter(i) + 1);
                  ctx.moveTo(center.x + mv - (oj ? mv / 3 : 0) + (oj ? ln / 3 : 0), center.y);
                  ctx.lineTo(center.x + ln + (ij ? mv / 3 - ln / 3 : 0), center.y);
               }
            }

            ctx.closePath();
            ctx.strokeStyle =
               this.random !== false
                  ? this.stringRandom(this.random || ["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"])
                  : this.color || "#FFA500";
            ctx.lineWidth = this.scrim.h;
            ctx.stroke();

            //ctx.moveTo(center.x, center.y);
            //ctx.lineTo(center.x + i * 50, center.y);
            //const cnt = i <= Math.ceil(this.kinesis.count / 2) ? i : this.kinesis.count - i + 1; // floor ceil

            //console.log(widthOne);
            //const color = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"])
            //obj.weight = 500;

            //const presets = [
            //   (obj, triangle) => {
            //      this.isDraw(obj, () => {
            //         //ctx.beginPath();
            //         //ctx.moveTo(center.x + 25, center.y + 25);
            //         //ctx.lineTo(center.x + 25, center.y + 9);
            //         //ctx.lineTo(center.x + 9, center.y + 25);
            //         //ctx.closePath();
            //         //ctx.strokeStyle = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"]);
            //         //ctx.lineWidth = 3;
            //         //ctx.stroke();
            //      });
            //   },
            //   (obj, square) => {
            //      this.isDraw(obj, () => {
            //         //ctx.beginPath();
            //         //ctx.moveTo(center.x, center.y);
            //         //ctx.lineTo(center.x + 16, center.y);
            //         //ctx.lineTo(center.x + 16, center.y + 16);
            //         //ctx.lineTo(center.x, center.y + 16);
            //         //ctx.closePath();
            //         //ctx.strokeStyle = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"]);
            //         //ctx.lineWidth = 3;
            //         //ctx.stroke();
            //      });
            //   },
            //   (obj, arc) => {
            //      this.isDraw(obj, () => {
            //         //ctx.beginPath();
            //         ////ctx.arc(center.x + 25, center.y + 25, 9, 0, Math.PI, true);
            //         ////ctx.strokeStyle = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"]);
            //         //ctx.lineWidth = 3;
            //         //ctx.stroke();
            //      });
            //   },
            //];

            //const rand = this.intRandom(0, presets.length);
            //return presets[rand](obj);
         });
      },
   },
};
</script>

<style lang="scss" module="styles">
.stripe {
   @apply absolute transition duration-500 rounded-full;

   &s {
      @apply mx-auto transition duration-500 w-auto h-auto flex-grow-0 flex-shrink flex-center;
   }
}
</style>
