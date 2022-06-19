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
				<div class="">{{ properties }}</div>
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
				prop1: 0,
				prop2: '0%',
			},
		}
	},
	mounted() {
		this.setAnimation()

		//console.log(this.properties)
	},
	methods: {
		setAnimation() {
			this.$anime({
				targets: this.properties,
				prop1: 50,
				prop2: '100%',
				easing: 'linear',
				duration: 3000,
				round: 1,
				update: function () {
					//document.querySelector('.js-object-log').innerHTML = JSON.stringify(this.properties)

					console.log(JSON.stringify(this.properties))
				},
			})
		},
	},
}
</script>

<style lang="scss">
</style>