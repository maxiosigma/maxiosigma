<template>
	<div class="blog-articles">
		<ItemBlogArticle :article="article" v-for="(article, i) in articles" :key="i"></ItemBlogArticle>
	</div>
</template>

<script>
export default {
	props: ['articles', 'category', 'year', 'href'],
}
</script>

<style lang="scss" scoped>
.blog {
	&-articles {
		@apply grid p-5 gap-12 grid-cols-1 place-content-start md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4;
	}
}
</style>