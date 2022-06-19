<template>
	<LayoutPage>
		<div class="flex-grow grid grid-cols-3">
			<div
				:class="[it.name, 'flex-grow flex-center']"
				v-for="(it, i) in [
					{ name: 'developer', img: '', title: 'Разработчик' },
					{ name: 'designer', img: '', title: 'Дизайнер' },
					{ name: 'entrepreneur', img: '', title: 'Предприниматель' },
				]"
				:key="i">
				<div
					class="text-white text-center"
					v-anime="{
						rotate: 7200,
						backgroundColor: ['#2f495e', '#00c58e'],
						duration: 3000,
						delay: 1000,
						loop: false,
					}"
					>{{ it.title }}</div
				>
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
	},
	methods: {
		setAnimation() {
			this.$anime({
				targets: this.properties,
				prop1: 50,
				prop2: '100%',
				easing: 'linear',
				round: 1,
				update: function () {
					objPropLogEl.innerHTML = JSON.stringify(this.properties)
				},
			})
		},
	},
}
</script>

<style lang="scss">
</style>