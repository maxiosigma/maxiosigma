<template></template>

<script>
export default {
	async asyncData({ $content, params, error }) {
		const slug = params.slug || 'index'
		const article = await $content('blog/business-ideas', slug)
			.where({ public: 'archive' })
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Page not found' })
			})

		return {
			article,
		}
	},
}
</script>

<style>
</style>