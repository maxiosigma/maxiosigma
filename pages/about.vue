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

    <kinesis-container
      :active="kinesis.active"
      :perspective="2000"
      class="flex-center text-white inset-0 z-0 fixed"
    >
      <!-- class="bg-black" -->

      <!-- v-anime="{
          translateX: Math.sin(i + 1) * intRandom(50, 150),
          translateY: Math.cos(i + 1) * intRandom(50, 150),
          duration: 1500,
          delay: 1000,
        }"   -->
      <div
        class="absolute"
        v-for="(it, i) in kinesis.count"
        :key="i"
        v-anime="{
          //translateX: Math.cos(i + 1) * intRandom(10, Math.min(size.w, size.h) * 0.75) + i,
          //translateY: Math.sin(i + 1) * intRandom(10, Math.min(size.w, size.h) * 0.75) + i,
          //rotate: intRandom(0, 360),
          translateX:
            (Math.cos((i * kinesis.count) / (Math.PI / 180)) * Math.max(size.w, size.h)) /
            intRandom(1.5, 4),
          translateY:
            (Math.sin((i * kinesis.count) / (Math.PI / 180)) * Math.max(size.w, size.h)) /
            intRandom(2.5, 4),
          opacity: intRandom(35, 85) / 100,

          //originX: 25,
          //originY: 225,
          duration: 1700,
          delay: 1200 + i * 5,
        }"
      >
        <kinesis-element
          :strength="intRandom(35, 105)"
          :type="stringRandom(['depth', 'depth_inv', 'translate', 'rotate'])"
        >
          <canvas class="flex-center" :ref="'canva_' + i"></canvas>
        </kinesis-element>
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
      kinesis: {
        count: 50,
        active: false,
        duration: 1700,
        delay: 1200,
      },
      size: { w: 0, h: 0 },
      //deviceType: this.$ua.deviceType(),
    }
  },
  mounted() {
    this.getSize()
    this.getCanvas()
    setTimeout(() => {}, this.kinesis.count)

    window.addEventListener("resize", () => {
      this.getSize()
    })
  },
  methods: {
    getSize() {
      this.size = { w: document.body.clientHeight, h: document.body.clientWidth }
    },
    getCanvas() {
      Object.keys(this.$refs)?.map((key) => {
        const obj = this.$refs?.[key]?.[0]
        this.preDraw(obj)
      })
    },
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
      //const color = this.stringRandom(["#FFA500", "#00ff2a", "#0084ff", "#9d00ff", "#ff0055"])
      const ctx = obj?.getContext("2d")

      const presets = [
        (obj, triangle) => {
          this.isDraw(obj, () => {
            ctx.beginPath()
            ctx.moveTo(center.x + 25, center.y + 25)
            ctx.lineTo(center.x + 25, center.y + 9)
            ctx.lineTo(center.x + 9, center.y + 25)
            ctx.closePath()
            ctx.strokeStyle = this.stringRandom([
              "#FFA500",
              "#00ff2a",
              "#0084ff",
              "#9d00ff",
              "#ff0055",
            ])
            ctx.lineWidth = 3
            ctx.stroke()
          })
        },
        (obj, square) => {
          this.isDraw(obj, () => {
            ctx.beginPath()
            ctx.moveTo(center.x, center.y)
            ctx.lineTo(center.x + 16, center.y)
            ctx.lineTo(center.x + 16, center.y + 16)
            ctx.lineTo(center.x, center.y + 16)
            ctx.closePath()
            ctx.strokeStyle = this.stringRandom([
              "#FFA500",
              "#00ff2a",
              "#0084ff",
              "#9d00ff",
              "#ff0055",
            ])
            ctx.lineWidth = 3
            ctx.stroke()
          })
        },
        (obj, arc) => {
          this.isDraw(obj, () => {
            ctx.beginPath()
            ctx.arc(25, 25, 9, 0, Math.PI, true)
            ctx.strokeStyle = this.stringRandom([
              "#FFA500",
              "#00ff2a",
              "#0084ff",
              "#9d00ff",
              "#ff0055",
            ])
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