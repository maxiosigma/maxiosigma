<template>
  <LayoutPage :bodyStyle="'body-bg about'">
    <!--<div class="container flex-grow mx-auto z-10 gap-5 grid-cols-[0.9fr,1.1fr] relative inline-grid">
      <div class="flex justify-center about-img-container items-end">
        <ItemImg
          class="h-full object-cover object-center about-img"
          src="about/face_1.png"
        ></ItemImg>
      </div>

      <div class="flex-col text-white inline-flex self-center about-text">
        <div class="">Добро пожаловать</div>
        <div class="">Меня зовут Максим</div>
        <div class="">Автор и разработчик сайта</div>
      </div>
    </div>-->

    <kinesis-container class="flex-center text-white inset-0 z-0 fixed">
      <!-- class="bg-black" -->

      <!-- v-anime="{
          translateX: Math.sin(i + 1) * intRandom(50, 150),
          translateY: Math.cos(i + 1) * intRandom(50, 150),
          duration: 1500,
          delay: 1000,
        }"   -->
      <div
        class="absolute"
        v-for="(it, i) in 2"
        :key="i"
        v-anime="{
          translateX: Math.sin(i + 1) * intRandom(50, 150),
          translateY: Math.cos(i + 1) * intRandom(50, 150),
          duration: 1500,
          delay: 1000,
        }"
      >
        <!--<kinesis-element
          :strength="intRandom(15, 55)"
          :type="stringRandom(['depth', 'depth_inv', 'translate', 'rotate', 'scale'])"
        >-->
        <canvas class="flex-center" :ref="'canva_' + i"></canvas>
        <!--</kinesis-element>-->
      </div>

      <!--<kinesis-element type="depth" :strength="50">
        <canvas ref="trangle"></canvas>
      </kinesis-element>

      <kinesis-element type="depth_inv" :strength="50">
        <canvas ref="trangle2"></canvas>
      </kinesis-element>-->
    </kinesis-container>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Автор",
    }
  },
  //setup() {},
  data() {
    return {
      visible: 0,
      //deviceType: this.$ua.deviceType(),
    }
  },
  mounted() {
    //Object.keys(this.$refs)?.map((key) => {
    //  const obj = this.$refs?.[key]?.[0]
    //  this.preDraw(obj)
    //})

    const center = { x: (300 - 25) / 2, y: (150 - 25) / 2 }
    const color = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"])

    const trangle = this.$refs?.canva_0?.[0]
    this.isDraw(trangle, () => {
      const ctx = trangle.getContext("2d")
      ctx.beginPath()
      ctx.arc(25, 25, 9, 0, Math.PI, true)
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.stroke()
    })

    const trangle2 = this.$refs?.canva_1?.[0]
    this.isDraw(trangle2, () => {
      const ctx = trangle2.getContext("2d")
      ctx.beginPath()
      ctx.moveTo(center.x + 25, center.y + 25)
      ctx.lineTo(center.x + 25, center.y + 9)
      ctx.lineTo(center.x + 9, center.y + 25)
      ctx.closePath()
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.stroke()
    })
  },
  methods: {
    handleClick() {
      this.visible += 0.5
      setTimeout(() => (this.visible += 1), 1500)
    },
    isDraw(ref, callback) {
      if (ref?.getContext) {
        callback()
      }
    },
    preDraw(obj) {
      const center = { x: (300 - 25) / 2, y: (150 - 25) / 2 }
      const color = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"])

      const presets = [
        (obj, triangle) => {
          this.isDraw(obj, () => {
            const ctx = obj.getContext("2d")
            ctx.beginPath()
            ctx.moveTo(center.x + 25, center.y + 25)
            ctx.lineTo(center.x + 25, center.y + 9)
            ctx.lineTo(center.x + 9, center.y + 25)
            ctx.closePath()
            ctx.strokeStyle = color
            ctx.lineWidth = 3
            ctx.stroke()
          })
        },
        (obj, square) => {
          this.isDraw(obj, () => {
            const ctx = obj.getContext("2d")
            ctx.beginPath()
            ctx.moveTo(center.x, center.y)
            ctx.lineTo(center.x + 16, center.y)
            ctx.lineTo(center.x + 16, center.y + 16)
            ctx.lineTo(center.x, center.y + 16)
            ctx.closePath()
            ctx.strokeStyle = color
            ctx.lineWidth = 3
            ctx.stroke()
          })
        },
        (obj, arc) => {
          this.isDraw(obj, () => {
            const ctx = obj.getContext("2d")
            ctx.beginPath()
            ctx.moveTo(center.x + 25, center.y + 25)
            ctx.lineTo(center.x + 25, center.y + 9)
            ctx.lineTo(center.x + 9, center.y + 25)
            ctx.closePath()
            ctx.strokeStyle = color
            ctx.lineWidth = 3
            ctx.stroke()
          })
        },
      ]

      const rand = this.intRandom(0, presets.length - 1)

      return presets[rand](obj)
    },
  },
}
</script>

<style lang="scss">
.about {
  //@apply flex flex-col -mt-20 z-10 relative <lg: (flex-wrap pt-5 pb-10) ;
}
</style>