<template>
	<LayoutPage bodyStyle="blog-bg">
		<div class="blog">
			<slot></slot>
		</div>
	</LayoutPage>
</template>

<script>
export default {
	props: ['bodyStyle'],
	mounted() {
		!localStorage.getItem('blog')
			? setTimeout(() => {
					localStorage.setItem('blog', true)
			  }, 2000)
			: null

		//setTimeout(() => {
		//	localStorage.getItem('blog') ? this.routeLight('community/programs') : null
		//}, 180000)
	},
}
</script>

<style lang="scss" scoped>
.blog {
	@apply flex-grow;
}
</style>

<style lang="scss">
.blog-bg {
	@apply bg-repeat bg-50p bg-hero-floating-cogs-water-50 sm:bg-20p;
}
</style>

