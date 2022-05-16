<template>
	<ItemLink :href="article.href" :class="['blog-article', 'group']">
		<LazyItemImgBg :class="['blog-article-img', 'group-hover:(opacity-100)']" :src="article.image" />

		<div class="blog-article-description">
			<h2 :class="['blog-article-title', 'group-hover:(text-white font-black tracking-widest)']">
				{{ article.title }}
			</h2>
		</div>
	</ItemLink>
</template>

<script>
export default {
	props: ['article'],
}
</script>

<style lang="scss" scoped>
.blog {
	&-article {
		@apply bg-white border-none rounded-md cursor-pointer flex-col flex-center bg-opacity-25 text-white transition-all duration-500 overflow-hidden relative self-start elevation-10 hover:(bg-opacity-15);

		&-img {
			@apply bg-cover bg-center shadow-xl min-h-40 min-w-[108%] opacity-90 transition-all duration-500 md:opacity-85;
		}
		&-description {
			@apply px-4 pt-2 pb-3;
		}
		&-title {
			@apply font-bold font-vetka text-center text-shadow-xl tracking-wider transition-all text-light-200 text-2xl duration-500 uppercase;
		}
	}
}
</style>