<template>
	<!-- class="hidden" -->
	<div class="bg-black h-screen w-screen text-light-900 hidden">
		<nuxt-link v-for="(it, i) in data" :key="i" :to="'l/' + it">{{ it }}</nuxt-link>
	</div>
</template>

<script>
export default {
	nuxtI18n: false,
	head() {
		return {
			title: '',
			titleTemplate: '%s',
			meta: [{ hid: 'description', name: 'description', content: '' }],
			link: [{ hid: 'og:description', property: 'og:description', content: '' }],
		}
	},
	data() {
		return {
			//&& sum.push(it.short + '/qr')
			data: Object.values(this.$store.state.links.data)?.reduce((sum, it) => sum.push(it.short) && sum, []),
		}
	},
	mounted() {
		setTimeout(() => (location.href = '/business-info'), 250)
	},
}
</script>