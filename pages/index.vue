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
			meta: [
				{ 'http-equiv': this?.link?.href ? 'refresh' : false, content: '0.01;URL=' + this?.link?.href },
				{ 'http-equiv': this?.link?.alt ? 'refresh' : false, content: '3;URL=' + this?.link?.alt },
			],
		}
	},
	data() {
		return {
			link: undefined,
		}
	},
	//http://localhost:3000/ru-ru#mw
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
			this.link = this?.links?.filter((ln) => ln.short === query)[0]
			if (this.link?.href) setTimeout(() => (location.href = this.link?.href), 1500)
			if (this.link?.alt) setTimeout(() => (location.href = this.link?.alt), 3000)
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