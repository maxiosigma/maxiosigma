<template>
	<LayoutBlog>
		<!--   -->
		<ItemBlogCategories :class="{ '!hidden': count == 0 }" :categories="categories" :year="thisYear"></ItemBlogCategories>

		<!--<div class="text-light-200">{{ $store.state.contentful.categories }}</div>

		<div class="text-light-200">{{ $store.state.contentful.articles }}</div>-->

		<h2 :class="[$style.blogTitle, { '!hidden': count != 0 }]">
			К сожалению за этот год новостей ещё не было, посмотрите новости из архива за прошлые годы
		</h2>

		<div v-if="lastYears.length > 0">
			<h3 :class="$style.blogArchive">Архив</h3>

			<div :class="$style.blogArchiveYears">
				<ItemBlogCategory :href="'blog/' + year" :title="year" v-for="(year, i) in lastYears" :key="i" />
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
	//data() {
	//	return {
	//		//lastYears: [],
	//		categories: [],
	//		thisYear: new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date()),

	//		//count: this.$store.state.contentful.categories.length,
	//	}
	//},
	//async mounted() {
	//	this.categories = await this.getCategories()

	//	//const cat = await this.getCategories()
	//	//console.log(cat)
	//	//console.log(this.lastYears, this.thisYear, this.categories, this.count)
	//},
	async asyncData({ store }) {
		//const thisYear = String(new Date().getFullYear())
		const thisYear = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(new Date())
		const lastYears = []

		const articlesSlugCategories = store.state.contentful.articles?.reduce((sum, article) => {
			//const year = article.fields.date?.split('-')[0] || thisYear
			//console.log(article.fields.date)
			const year = article.fields.date?.substr(0, 4)
			const categories = article.fields.categories
			const isYear = year === thisYear

			!isYear && (year != undefined || year != null)
				? lastYears.filter((ly) => ly === year).length === 0
					? lastYears.push(year)
					: lastYears
				: null

			isYear ? (categories ? categories?.map((c) => sum.push(c.fields.slug)) : sum.push('none')) : null

			return sum
		}, [])

		const categories = store.state.contentful.categories?.filter(
			(category) => articlesSlugCategories.filter((asc) => category.fields.slug === asc).length > 0
		)

		//const categories = store.state.contentful.categories

		categories.push(
			...categories.splice(
				categories.findIndex((v) => v.fields.slug == 'none' || v.fields.slug == 'undefined'),
				1
			)
		)

		const count = categories.length

		//console.log(thisYear, lastYears, categories, count)

		return { thisYear, lastYears, categories, count }
	},
	//methods: {
	//	//async getCategories() {
	//	//	await this.$nextTick()
	//	//	return await this.$store.state.contentful.categories
	//	//},
	//},
}
</script>

<style lang="scss" module>
.blog {
	&__title {
		@apply flex-center text-center text-lg px-4 text-light-900 sm:text-xl lg:text-2xl;
	}
	&__archive {
		@apply bg-black font-bold bg-opacity-75 mt-14 text-center text-xl mb-4 tracking-widest py-4 text-light-400 uppercase;

		&_years {
			@apply mb-10 grid p-5 text-light-200 gap-5 grid-cols-1 place-content-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4;
		}
	}
}
</style>