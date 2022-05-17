<template></template>

<script>
export default {
	nuxtI18n: false,
	async asyncData({ store }) {
		await store.dispatch('links/downloadLinksImage')
	},
}
</script>
