<template></template>

<script>
export default {
	async asyncData({ store }) {
		await store.dispatch('links/downloadLinksImage')
	},
}
</script>
