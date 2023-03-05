<template>
	<div class="w-screen h-screen"></div>
</template>

<script setup>
	const title = ref("Автор");
	const description = ref("");

	definePageMeta({ layout: "page" });
</script>

<style lang="scss">
	html {
		@apply bg-black;
	}
</style>
