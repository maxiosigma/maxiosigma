<template>
	<div class="w-screen h-screen">
		<div>pos: {{ x }}, {{ y }}</div>
	</div>
</template>

<script setup>
	const title = ref("Главная");
	const description = ref("My App Description");

	definePageMeta({ layout: "page" });

	const { hash, query } = useRoute();

	//console.log(router.hash);
	//console.log(router.query);
	//http://localhost:3000#mw

	if (hash) location.href = `/?${hash.replace("#", "")}`;

	const { x, y } = useMouse();
	const isDark = usePreferredDark();
</script>

<style lang="scss">
	html {
		@apply bg-black;
	}
</style>
