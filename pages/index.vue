<template>
	<Layout :bodyStyle="'index'">
		<!--<ItemNoScript :id="0" />-->
	</Layout>
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
	//asyncData({ app, store }) {
	//	//const clientApollo = app.apolloProvider.defaultClient
	//	//console.log(store.state.gql.links)
	//	//return new Promise((resolve, reject) => {
	//	//	clientApollo.query({
	//	//		query: store.state.gql.links,
	//	//	})
	//	//})
	//},
	async beforeMount() {
		//console.log(this.$strapi)
		//
		//const s = await this.$strapi.graphql({ query: this.$store.state.gql.links })
		//console.log(this.$strapi)
		//
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