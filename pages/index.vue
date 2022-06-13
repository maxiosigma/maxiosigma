<template>
	<Layout :bodyStyle="'index'"> </Layout>
</template>

<script>
export default {
	head() {
		return {
			title: 'Главная',
		}
	},
	data() {
		return {
			//strapi: '',
		}
	},
	async asyncData({ store, $strapi }) {
		try {
			const links = (await $strapi.graphql({ query: store.state.gql.links })).links?.data?.map((it) => it.attributes)
			return { links }
		} catch (error) {
			return {}
		}
	},
	async beforeMount() {
		console.log(this.links)
		//!localStorage.getItem('about') || localStorage.getItem('about') === 0 ? this.routeLight('about') : this.routeLight('about')
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