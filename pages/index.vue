<template>
	<Layout :bodyStyle="'index'">
		<ItemNoScript :id="0" />
	</Layout>
</template>

<script>
export default {
	head() {
		return {
			title: 'Главная',
		}
	},
	async beforeMount() {
		!localStorage.getItem('about') || localStorage.getItem('about') === 0 ? this.routeLight('about') : this.routeLight('about')

		//: !localStorage.getItem('business') || localStorage.getItem('business') === 0
		//? this.routeLight('business')
	},
}
</script>

<style lang="scss">
.index {
	@apply bg-black flex-grow inset-0 fixed;
}
</style>