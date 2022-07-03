<template>
  <LayoutPage>
    <div class="flex-center flex-col flex-grow portfolio">
      <canvas class="list-1 canvasList"></canvas>
      <canvas class="list-2 canvasList"></canvas>
      <canvas class="list-3 canvasList"></canvas>
    </div>
  </LayoutPage>
</template>

<script>
export default {
  head() {
    return {
      title: "Портфолио",
    }
  },
  data() {
    return {
      properties: {
        developer: 0,
        designer: 0,
        entrepreneur: 0,
      },
    }
  },
  async asyncData({ $strapi, store }) {
    const portfolio = store.state.gql.portfolio
    const data = (
      await $strapi.graphql({
        query: portfolio,
      })
    )?.page?.data?.attributes

    return {
      data,
    }
  },
  mounted() {
    this.canvasList()
  },
  methods: {
    redirect(url) {
      location.href = "/" + url
    },
    canvasList() {
      //const obj = this.$refs.canvasList
      const arr = document.querySelectorAll(".canvasList")
      //console.log(arr.forEach((it) => it))
      arr?.forEach((obj, i) => {
        const ctx = obj?.getContext("2d")

        ctx.beginPath()

        ctx.moveTo(0, 25)
        ctx.bezierCurveTo(0, 25, 150, 0, 300, 25)
        ctx.moveTo(0, 25)
        ctx.bezierCurveTo(0, 25, 150, 50, 300, 25)

        //ctx.strokeStyle = "white"
        //ctx.lineWidth = 0.5
        //ctx.stroke()
        ctx.fill()
      })

      ////ctx.moveTo(0, 0)
      ////ctx.bezierCurveTo(0, 0, 50, 0, 100, 25)
      ////ctx.moveTo(0, 50)
      ////ctx.bezierCurveTo(0, 50, 50, 50, 100, 25)

      //console.log(ctx)
    },
  },
}
//setTimeout(() => this.setAnimation(), 500)
//<!--<div class="flex-grow filter drop-shadow-lg lg:(grid grid-cols-3) <lg:(flex flex-col) ">-->
//  <!-- , { 'elevation-10': i == 2 } ДОБАВИТЬ ТЕНИ ПО БОКАМ -->
//  <!-- 	@click.native.prevent="redirect(it.name)" -->
//  <!--<ItemImgStrapiBg
//      :class="[
//        it.name,
//        'flex-grow flex-center relative flex-col cursor-pointer text-light-200 relative bg-top bg-cover <lg:(bg-contain max-w-1/2 flex-shrink flex-grow-0 min-h-300px)',
//        { '<lg:(mr-auto z-0)': i == 0 },
//        { '<lg:(ml-auto -my-30 z-10)': i == 1 },
//        { '<lg:(mr-auto z-20)': i == 2 },
//      ]"
//      v-for="(it, i) in [
//        { name: 'developer', img: '', title: 'Разработчик' },
//        { name: 'designer', img: '', title: 'Дизайнер' },
//        { name: 'entrepreneur', img: '', title: 'Предприниматель' },
//      ]"
//      :key="i"
//      :src="data.Imgs.data[i].attributes.url"
//      :alt="data.Imgs.data[i].attributes.name"
//    >
//      <div class="text-center">{{ it.title }}</div>
//    </ItemImgStrapiBg>-->

//  <!--<div class="js-object-log"></div>
//			<div class="">{{ properties[it.name] }}</div>
//			<div class="demo-content align-center morphing-demo">
//				<svg width="140" height="140" viewBox="0 0 140 140">
//					<g fill="none" fill-rule="evenodd">
//						<g fill="currentColor" fill-opacity=".15" transform="translate(0 6)">
//							<polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"></polygon>
//							<polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
//							<polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
//							<polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
//						</g>
//						<polygon
//							class="polymorph"
//							stroke-width="1"
//							stroke="currentColor"
//							points="70 39.111670180848165 118.68507822465598 59.48007822465599 109.9231395287841 130.96482663016016 59.7442177534401 86.51932981915184 18.537670180848167 59.702530652064056 "></polygon>
//					</g>
//				</svg>
//			</div>-->
//  <!--</div>-->

//  <!-- Опыт работы
//    Strong web programming experience (HTML | PUG | CSS | SCSS | STYLUS | POSTCSS | JS | JQuery | Vue | PHP | TWIG | SQL + Database). While working and for myself, I created assemblies of Nuxt, Gridsome, Gatsby, Vue, Webpack, Laravel, Laravel Mix (with its own Webpack modules) and examples from site layouts. Also collected prototypes of popular CMS (Wordpress, Strapi, October, Ghost, Storybook) with their own internal plugins. Familiar with the Webflow and Tilda constructors. I use hosting Google (for portfolio), Beget (for server sites), Netlify (static sites - SG with SSR).

//    In parallel, I am developing in the areas of design and brand promotion. The main Figma tool (convenience, speed, quality), for additional purposes Affinity Photo (analogue of PS), MIRO. For inspiration, I have Figma Templates, Dribbble, Behance, VK Group (more than 10 sources) and real sites or layouts of sites on freelance (orders or viewed projects).

//    Average experience in programming in C# and C-like languages, I understand the mathematical language LaTeX and mathematical packages Maple and MatLab.

//    Little experience in developing native applications, Android Studio + Kotlin, as well as a bunch of Flutter with the Dart programming language.

//    I can and practice writing articles, term papers, and creating any presentations and presentation templates.
//    -->
//this.$anime({
//	targets: this.properties,
//	developer: 100,
//	designer: 200,
//	entrepreneur: 300,
//	easing: 'linear',
//	duration: () => this.$anime.random(2300, 4200),
//	delay: () => this.$anime.random(550, 850),
//	round: 1,
//	//update: function () {
//	//	//JSON.stringify(this.properties)
//	//},
//})
//console.log(this.$anime.random(0, 270))
//this.$anime({
//	targets: '.morphing-demo .polymorph',
//	points: [
//		{
//			value: [
//				'70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//				'70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369',
//			],
//		},
//		{ value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
//		{ value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
//		{ value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' },
//	],
//	easing: 'easeOutQuad',
//	duration: 2000,
//	loop: true,
//})
</script>

<style lang="scss">
.canvasList {
  @apply max-w-screen transform origin-left w-[25vmin] absolute filter drop-shadow-sm;

  &.list {
    &-1 {
      @apply rotate-0;
    }
    &-2 {
      @apply rotate-90;
    }
    &-3 {
      @apply rotate-240;
    }
  }
}
</style>