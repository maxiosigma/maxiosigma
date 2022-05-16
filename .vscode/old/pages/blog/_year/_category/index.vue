<template>
	<LayoutBlog>
		<ItemBlogArticles :articles="articles"></ItemBlogArticles>
	</LayoutBlog>
</template>

<script>
export default {
	head() {
		return {
			title: this.ucFirst(this.thisCategory),
		}
	},
	async asyncData({ store, params }) {
		const thisYear = params.year
		const thisCategory = params.category
		const articles = store.state.contentful.articles
			?.map((article) => {
				const fields = article?.fields
				const img = fields?.image?.fields.file.url
				return {
					title: fields.title,
					image: img ? `https:${img}` : 'blog/undefined.jpg',
					href: `/blog/${thisYear}/${thisCategory}/${fields.slug}`,
					categories: fields.categories,
					createdAt: article?.sys.createdAt,
				}
			})
			.filter((article) => {
				const isCategory = article.categories?.filter((category) => category?.fields.slug === thisCategory).length > 0
				const isNone = article.categories === undefined && thisCategory === 'none'
				return isCategory || isNone
			})
			.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))

		return { thisCategory, articles }
	},
}
</script>