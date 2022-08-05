<template>
   <LayoutPage>
      <!--  flex-col -->
      <div class="portfolio">
         <!--<div class="canvas-container">
            <canvas class="list-1 canvas-list"></canvas>
            <canvas class="list-2 canvas-list"></canvas>
            <canvas class="list-3 canvas-list"></canvas>
         </div>-->

         <!--<div class="flex-center relative">-->
         <!--<div :class="['portfolio-block-container', `block-${i + 1}`]" v-for="(it, i) in items" :key="i">
               <div :class="['flex-center mr-[0.5vmin]', { 'flex-row-reverse rtl ml-[0.5vmin] mr-0': i === 2 }]">
                  <div class="text-[10vmin] text-green-200">{{ it.s1 }}</div>

                  <div class="-mt-1 tracking-[2px]">
                     <div class="text-[4.5vmin] text-indigo-200">{{ it.s2 }}</div>
                     <div class="text-[4.5vmin] text-indigo-200">{{ it.s3 }}</div>
                  </div>
               </div>
            </div>-->
         <!--</div>-->

         <ItemLink :href="'/' + it.l" :class="['portfolio-block-container', `block-${i + 1}`]" v-for="(it, i) in items" :key="i">
            <div>{{ it.s1 }}{{ it.s2 }}{{ it.s3 }}</div>
         </ItemLink>
      </div>
   </LayoutPage>
</template>

<script>
export default {
   head() {
      return {
         title: "Портфолио",
      };
   },
   data() {
      return {
         items: [
            { s1: "Р", s2: "азра", s3: "ботчик", l: "developer" },
            { s1: "П", s2: "редпри", s3: "ниматель", l: "entrepreneur" },
            { s1: "Д", s2: "иза", s3: "йнер", l: "designer" },
         ],
         properties: {
            developer: 0,
            designer: 0,
            entrepreneur: 0,
         },
      };
   },
   async asyncData({ $strapi, store }) {
      const portfolio = store.state.gql.portfolio;
      const data = (
         await $strapi.graphql({
            query: portfolio,
         })
      )?.page?.data?.attributes;

      return {
         data,
      };
   },
   mounted() {
      console.log(this.data);
      this.canvasList();
   },
   methods: {
      redirect(url) {
         location.href = "/" + url;
      },
      canvasList() {
         //const obj = this.$refs.canvasList
         const arr = document.querySelectorAll(".canvas-list");
         //console.log(arr.forEach((it) => it))
         arr?.forEach((obj, i) => {
            const ctx = obj?.getContext("2d");

            ctx.beginPath();

            ctx.moveTo(0, 25);
            ctx.bezierCurveTo(0, 25, 150, 0, 300, 25);
            ctx.moveTo(0, 25);
            ctx.bezierCurveTo(0, 25, 150, 50, 300, 25);

            ctx.fillStyle = "#0e9090";
            ctx.fill();
         });
      },
   },
};
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
.portfolio {
   @apply flex-center flex-grow text-center;

   &-block {
      &-container {
         // transform absolute w-full h-full
         @apply rounded-md cursor-pointer flex-center flex-grow font-vetka font-black bg-orange-600 bg-hero-bank-note-white-20 bg-3r text-white min-h-1/3 max-w-4 px-[6vmin] py-[4vmin] transform transition-all text-[2.5vmin] duration-900 break-all uppercase elevation-10;
         @apply hover:(elevation-15 rotate-y-0 scale-100 filter hue-rotate-270) #{!important};

         &.block-1 {
            @apply ml-auto leading-[1.7] rotate-y-30 bg-purple-600;
            box-shadow: 5px 0 15px rgba(255, 255, 255, 0.15);
            //@apply -translate-x-[0vmin] translate-y-[27vmin];
         }

         &.block-2 {
            @apply mx-auto leading-[1.5] scale-95 bg-orange-600;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.15);
            //@apply -rotate-30 translate-x-[33vmin] -translate-y-[27vmin];
         }

         &.block-3 {
            @apply mr-auto leading-[2.3] -rotate-y-30 bg-green-600;
            box-shadow: -5px 0 15px rgba(255, 255, 255, 0.15);
            //@apply rotate-30 -translate-x-[33vmin] -translate-y-[27vmin];
         }
      }
   }
}

.canvas {
   &-container {
      @apply h-0 mr-[10vmin] mb-[15vmin] w-0 absolute drop-shadow-2xl;
   }

   &-list {
      @apply max-w-screen text-current transform origin-left text-hex-0e9090 w-[25vmin] absolute filter;
      @apply text-shadow-custom-orange-15px;

      &.list {
         &-1 {
            @apply -rotate-30 translate-x-[8vmin] translate-y-[2vmin];
         }

         &-2 {
            @apply rotate-90;
         }

         &-3 {
            @apply rotate-210 translate-x-[4vmin] -translate-y-[5.5vmin];
         }
      }
   }
}

// blob:https://dasreda.ru/fa761a60-210b-4753-a5ca-f1393c0f5cbe
//<a href="blob:https://dasreda.ru/fa761a60-210b-4753-a5ca-f1393c0f5cbe" download="filename">Скачать</a>
//https://cdn.dasreda.ru/video-data/.213cc2e0-50e1-4bf4-b215-72c5d8580a43/video_640x360.mp4/index-v1-a1.m3u8
// ffmpeg -i "https://cdn.dasreda.ru/video-data/.213cc2e0-50e1-4bf4-b215-72c5d8580a43/video_640x360.mp4/index-v1-a1.m3u8" -c copy -bsf:a aac_adtstoasc "output.mp4"
</style>
