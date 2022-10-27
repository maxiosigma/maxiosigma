<template>
	<div class="w-screen h-screen"></div>
</template>

<script setup>
	const title = ref("Автор");
	const description = ref("");

	definePageMeta({ layout: "page" });

	const { hash, query } = useRoute();
	const { push } = useRouter();

	//if (hash) location.href = `/link?${hash.replace("#", "")}`;
	//if (useQueryLength() !== 0) location.href = `/link?${query}`;

	if (hash) push({ path: "/link", query: { [hash.replace("#", "")]: true } });
	if (useQueryLength() !== 0) push({ path: "/link", query });

	//console.log(router.hash);
	//console.log(router.query);
	//http://localhost:3000#mw
</script>

<style lang="scss">
	html {
		@apply bg-black;
	}
</style>
