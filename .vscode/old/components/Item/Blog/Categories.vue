<template>
	<div class="blog-categories">
		<ItemBlogCategory :category="category" :year="year" v-for="(category, i) in categories" :key="i"></ItemBlogCategory>
	</div>
</template>

<script>
export default {
	props: ['categories', 'year'],
}
</script>

<style lang="scss" scoped>
.blog {
	&-categories {
		@apply grid p-5 gap-12 grid-cols-1 place-content-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4;
	}
}
</style>