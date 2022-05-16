<template>
	<LayoutBlog>
		<ItemBlogCategories :categories="categories" :year="thisYear"></ItemBlogCategories>
	</LayoutBlog>
</template>

<script>
export default {
	head() {
		return {
			title: this.title,
		}
	},
	async asyncData({ store, params }) {
		const thisYear = params.year

		const articlesSlugCategories = store.state.contentful.articles?.reduce((sum, article) => {
			const fields = article?.fields
			const year = fields?.date?.substr(0, 4)
			const categories = fields?.categories
			const isYear = year === thisYear

			isYear && year ? (categories ? categories?.map((c) => sum.push(c?.fields.slug)) : sum.push('none')) : sum

			return sum
		}, [])

		const categories = store.state.contentful.categories?.filter(
			(category) => articlesSlugCategories?.filter((asc) => category?.fields.slug === asc).length > 0
		)

		categories.push(
			...categories.splice(
				categories.findIndex((v) => v?.fields.slug == 'none' || v?.fields.slug == 'undefined'),
				1
			)
		)

		const title = thisYear?.split('').join('~')

		return { thisYear, title, categories }
	},
}
</script>
