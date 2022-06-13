<template>
	<Layout :bodyStyle="'index'"> </Layout>
</template>

<script>
export default {
	nuxtI18n: false,
	head() {
		return {
			title: this?.link?.title ?? 'Главная',
			titleTemplate: this.headTemplate(this?.link ? '%s' : undefined),
		}
	},
	data() {
		return {
			link: undefined,
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
		const route = this.$route

		const query = route?.hash?.replace('#', '') || Object.keys(route?.query)?.[0]

		if (query) {
			this.link = this.links.filter((ln) => ln.short === query)[0]

			console.log(this.link)
		}

		//console.log(this.headTemplate())

		//console.log(this.links)
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