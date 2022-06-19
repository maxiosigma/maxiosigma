<template>
	<LayoutPage>
		<div class="flex-grow grid grid-cols-3">
			<div
				:class="[it.name, 'flex-grow flex-center flex-col text-light-200']"
				v-for="(it, i) in [
					{ name: 'developer', img: '', title: 'Разработчик' },
					{ name: 'designer', img: '', title: 'Дизайнер' },
					{ name: 'entrepreneur', img: '', title: 'Предприниматель' },
				]"
				:key="i">
				<div class="text-center">{{ it.title }}</div>
				<!--<div class="js-object-log"></div>-->
				<div class="">{{ properties[it.name] }}</div>
			</div>
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
	mounted() {
		this.setAnimation()
		//setTimeout(() => this.setAnimation(), 500)
	},
	methods: {
		setAnimation() {
			this.$anime({
				targets: this.properties,
				developer: 100,
				designer: 200,
				entrepreneur: 300,
				easing: 'linear',
				duration: 2500,
				delay: 750,
				round: 1,
				//update: function () {
				//	//JSON.stringify(this.properties)
				//},
			})
		},
	},
}
</script>

<style lang="scss">
</style>