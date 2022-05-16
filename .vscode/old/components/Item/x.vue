<template>
	<LayoutBlog>
		<ItemBlogCategories :categories="categories" :year="thisYear"></ItemBlogCategories>

		<div v-if="lastYears.length > 0">
			<h3 class="bg-black font-bold bg-opacity-75 mt-14 text-center text-xl mb-4 tracking-widest py-4 text-light-400 uppercase">
				Архив
			</h3>

			<div :class="$style.blogOlds">
				<ItemBlogCategory :href="'blog/' + year" :category="{ t: year + ' ' + 'год' }" v-for="(year, i) in lastYears" :key="i" />
			</div>
		</div>
	</LayoutBlog>
</template>

<script>
export default {
	head() {
		return {
			title: 'Блог',
			script: [
				{
					hid: 'sp',
					charset: 'UTF-8',
					src: 'https://web.webpushs.com/js/push/6320ce13d4e70317e47774bbf7050ea4_1.js',
					defer: true,
					async: true,
				},
			],
		}
	},
	async asyncData({ $content, store, error }) {
		const thisYear = String(new Date().getFullYear())

		const articles = await $content('blog/article')
			.where({ public: true })
			.sortBy('updatedAt', 'desc')
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Page not found' })
			})

		const lastYears = articles.reduce((sum, it) => {
			const year = it.img.split('/')[1].split('-')[0]
			!sum.find((d) => d === year) && year !== thisYear ? sum.push(year) : sum
			return sum
		}, [])

		const stateCategories = store.state.blog.categories

		const categories = articles
			.filter((it) => it.img.split('/')[1].split('-')[0] === thisYear)
			.reduce(
				(sum, it) =>
					(it.category || ['none']).map((category) =>
						!sum.find((d) => d.s === category)
							? sum.push({ s: category, t: stateCategories.find((d) => d.s === category).t || 'Без названия' })
							: sum
					) && sum,
				[]
			)

		categories.push(
			...categories.splice(
				categories.findIndex((v) => v.s == 'none'),
				1
			)
		)

		return {
			thisYear,
			lastYears,
			categories,
		}
	},
}
</script>

<style lang="scss" module>
.blog {
	&__olds {
		@apply mb-10 grid p-5 text-light-200 gap-5 grid-cols-1 place-content-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4;
	}
}
</style>