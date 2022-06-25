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

      <kinesis-element
        v-for="(it, i) in 2"
        :key="i"
        :strength="intRandom(25, 75) + 10 * Math.sin(i) * i"
        :type="stringRandom(['depth', 'depth_inv'])"
      >
        <canvas :ref="'canva_' + i"></canvas>

        {{ stringRandom(["depth", "depth_inv"]) }}
      </kinesis-element>

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
    console.log(this.$refs?.canva_0[0])

    const trangle = this.$refs?.canva_0?.[0]
    this.isDraw(trangle, () => {
      const ctx = trangle.getContext("2d")
      ctx.beginPath()
      ctx.moveTo(125, 125)
      ctx.lineTo(125, 45)
      ctx.lineTo(45, 125)
      ctx.closePath()
      ctx.strokeStyle = "orange"
      ctx.lineWidth = 3
      ctx.stroke()
    })

    const trangle2 = this.$refs?.canva_1?.[0]
    this.isDraw(trangle2, () => {
      const ctx = trangle2.getContext("2d")
      ctx.beginPath()
      ctx.moveTo(125, 125)
      ctx.lineTo(125, 45)
      ctx.lineTo(45, 125)
      ctx.closePath()
      ctx.strokeStyle = "orange"
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
  },
}
</script>

<style lang="scss">
.about {
  //@apply flex flex-col -mt-20 z-10 relative <lg: (flex-wrap pt-5 pb-10) ;
}
</style>