<template>
	<LayoutPage>
		<div class="flex-grow filter drop-shadow-lg lg:(grid grid-cols-3) <lg:(flex flex-col) ">
			<!-- , { 'elevation-10': i == 2 } ДОБАВИТЬ ТЕНИ ПО БОКАМ -->
			<!-- 	@click.native.prevent="redirect(it.name)" -->
			<ItemImgStrapiBg
				:class="[
					it.name,
					'flex-grow flex-center relative flex-col cursor-pointer text-light-200 relative bg-top bg-cover <lg:(bg-contain max-w-1/2 flex-shrink flex-grow-0 min-h-300px)',
					{ '<lg:(mr-auto z-0)': i == 0 },
					{ '<lg:(ml-auto -my-30 z-10)': i == 1 },
					{ '<lg:(mr-auto z-20)': i == 2 },
				]"
				v-for="(it, i) in [
					{ name: 'developer', img: '', title: 'Разработчик' },
					{ name: 'designer', img: '', title: 'Дизайнер' },
					{ name: 'entrepreneur', img: '', title: 'Предприниматель' },
				]"
				:key="i"
				:src="data.Imgs.data[i].attributes.url"
				:alt="data.Imgs.data[i].attributes.name">
				<div class="text-center">{{ it.title }}</div>
				<!--<div class="js-object-log"></div>-->
				<!--<div class="">{{ properties[it.name] }}</div>-->

				<!--<div class="demo-content align-center morphing-demo">
					<svg width="140" height="140" viewBox="0 0 140 140">
						<g fill="none" fill-rule="evenodd">
							<g fill="currentColor" fill-opacity=".15" transform="translate(0 6)">
								<polygon points="70 0 136.574 48.369 111.145 126.631 28.855 126.631 3.426 48.369"></polygon>
								<polygon points="70 18 119.455 53.931 100.565 112.069 39.435 112.069 20.545 53.931"></polygon>
								<polygon points="70 34.86 101.727 57.911 89.609 95.209 50.391 95.209 38.273 57.911"></polygon>
								<polygon points="70 50.898 84.864 61.697 79.186 79.171 60.814 79.171 55.136 61.697"></polygon>
							</g>
							<polygon
								class="polymorph"
								stroke-width="1"
								stroke="currentColor"
								points="70 39.111670180848165 118.68507822465598 59.48007822465599 109.9231395287841 130.96482663016016 59.7442177534401 86.51932981915184 18.537670180848167 59.702530652064056 "></polygon>
						</g>
					</svg>
				</div>-->
			</ItemImgStrapiBg>
		</div>
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: 'Портфолио',
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
		).page.data.attributes

		return {
			data,
		}
	},
	mounted() {
		this.setAnimation()
		//setTimeout(() => this.setAnimation(), 500)
	},
	methods: {
		setAnimation() {
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
		},
		redirect(url) {
			location.href = '/' + url
		},
	},
}
</script>

<style lang="scss">
</style>