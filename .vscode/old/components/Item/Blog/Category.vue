<template>
	<ItemLink :href="categoryLink" class="blog-category group">
		<LazyItemImgBg class="blog-category-img group-hover:(opacity-100)" :src="categoryImg" />

		<div class="blog-category-description">
			<h2 class="blog-category-title group-hover:(text-white font-black tracking-widest) ">
				{{ categoryTitle }}
			</h2>
		</div>
	</ItemLink>
</template>

<script>
export default {
	props: ['category', 'year', 'title', 'href', 'url'],
	data() {
		return {
			categoryTitle: this.title || this.category.fields.title,
			categoryImg:
				this.url ||
				(this.category?.fields.image.fields.file.url ? `https:${this.category?.fields.image.fields.file.url}` : 'blog/undefined.jpg'),
			categoryLink: this.href || `/blog/${this.year ? this.year + '/' : ''}${this.category.fields.slug || ''}`,
		}
	},
}
</script>

<style lang="scss" scoped>
.blog {
	&-category {
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