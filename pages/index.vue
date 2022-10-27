<template>
	<div class="w-screen h-screen"></div>
</template>

<script setup>
	const title = ref("Автор");
	const description = ref("");

	definePageMeta({ layout: "page" });

	const { hash, query } = useRoute();
	const { links, getApiDataLinks } = useStrapiLinks();
	await getApiDataLinks();

	console.log(links.value);

	//hash ? location.href = `/?${hash.replace("#", "")}`  : query ? {}: null

	//console.log(links);
	//const link = links.value?.filter((ln) => ln.short == Object.keys(query)?.[0])?.[0];

	if (hash) location.href = `/?${hash.replace("#", "")}`;
	else if (query) {
		//.map((it) => it.short)
		//console.log();
		//links?.filter((ln) => ln.short === query).length != 0 ? console.log(query) : null;
	}

	//console.log(link);

	//console.log(router.hash);
	//console.log(router.query);
	//http://localhost:3000#mw
</script>

<style lang="scss">
	html {
		@apply bg-black;
	}
</style>
