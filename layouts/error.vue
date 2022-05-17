<template>
	<Layout :bodyStyle="'error'">
		<div class="flex-grow flex-center flex-col">
			<h1 v-if="error.statusCode === 404">Page not found</h1>
			<h1 v-else>An error occurred - {{ error.statusCode }} </h1>
			<NuxtLink to="/">Home page</NuxtLink>
		</div>
	</Layout>
</template>

<script>
export default {
	props: ['error'],
	layout: 'error',
}
</script>

<style lang="scss">
.error {
	@apply flex-center text-lime-50;
}
</style>