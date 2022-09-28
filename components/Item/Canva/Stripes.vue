<template>
   <div :class="styles.stripes">
      <canvas
         :class="styles.stripe"
         :ref="'canva_' + i"
         v-for="(it, i) in 10"
         :key="i"
         v-anime="{
            translateX: i * 10,
            translateY: -i * 10,
            rotate: 45,
            duration: 100,
            delay: 100 + i * 50,
         }"
      ></canvas>
   </div>
</template>

<script>
export default {
   mounted() {
      this.getCanvas();
      //console.log(this.$refs);
   },
   methods: {
      getCanvas() {
         Object.keys(this.$refs)?.map((key) => {
            const obj = this.$refs?.[key]?.[0];
            this.preDraw(obj);
         });
      },
      preDraw(obj) {
         const center = { x: (300 - 25) / 2, y: (150 - 25) / 2 };
         //const color = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"])
         const ctx = obj?.getContext("2d");

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
            console.log(obj);

            ctx.beginPath();

            ctx.moveTo(center.x, center.y);
            ctx.lineTo(center.x + 50, center.y);

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
   // transform rotate-45
   @apply bg-transparent absolute transition duration-500;

   //&:nth-child(1) {
   //   @apply translate-x-10 -translate-y-10;
   //}

   &s {
      @apply bg-transparent mx-auto my-54 flex-center;
   }
}
</style>
