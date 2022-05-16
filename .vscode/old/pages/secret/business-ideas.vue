<template>
	<div class="h-screen bg-light-400 grid gap-2">
		<ItemLink target="_blank" v-for="(idea, i) in ideas" :key="i" :href="'/blog/business/ideas/mw/' + idea.slug">{{
			idea.slug
		}}</ItemLink>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'BIDEAS',
		}
	},
	async asyncData({ $content, error }) {
		const ideas = await $content('blog/business/ideas/mw')
			.where({ public: true })
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Page not found' })
			})

		return {
			ideas,
		}
	},
}
</script>
