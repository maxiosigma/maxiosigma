<template>
  <kinesis-container
    :active="kinesis.active"
    :perspective="2000"
    class="flex-center inset-0 z-0 fixed"
  >
    <div
      class="absolute"
      v-for="(it, i) in kinesis.count"
      :key="i"
      v-anime="{
        translateX:
          (Math.cos((i * kinesis.count) / (Math.PI / 180)) * Math.max(size.w, size.h)) /
          intRandom(1.5, 4),
        translateY:
          (Math.sin((i * kinesis.count) / (Math.PI / 180)) * Math.max(size.w, size.h)) /
          intRandom(2.5, 4),
        opacity: intRandom(60, 90) / 100,
        duration: kinesis.duration,
        delay: kinesis.delay + i * kinesis.step,
      }"
    >
      <kinesis-element
        :strength="intRandom(35, 105)"
        :type="stringRandom(['depth', 'depth_inv', 'translate', 'rotate'])"
      >
        <canvas class="flex-center" :ref="'canva_' + i"></canvas>
      </kinesis-element>
    </div>
  </kinesis-container>
</template>

<script>
export default {
  data() {
    return {
      visible: 0,
      kinesis: {
        step: 5,
        count: 30,
        active: false,
        duration: 1700,
        delay: 1200,
      },
      size: { w: 0, h: 0 },
      deviceType: this.$ua.deviceType(),
    }
  },
  mounted() {
    this.getSize()
    this.getCanvas()
    this.getKinesis()

    window.addEventListener("resize", () => {
      this.getSize()
      //this.getKinesis()
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
    getKinesis() {
      this.kinesis.active = false

      setTimeout(
        () => (this.kinesis.active = true),
        this.kinesis.delay + this.kinesis.count * this.kinesis.step + 1500
      )
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

<style>
</style>