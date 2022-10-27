<template>
	<div></div>
</template>

<script setup>
	//const { links, getApiDataLinks } = useStrapiLinks();
	//await getApiDataLinks();

	//console.log(links.value);

	//.map((it) => it.short)
	//console.log();
	//links?.filter((ln) => ln.short === query).length != 0 ? console.log(query) : null;
	//hash ? location.href = `/?${hash.replace("#", "")}`  : query ? {}: null
	//console.log(links);
	//const link = links.value?.filter((ln) => ln.short == Object.keys(query)?.[0])?.[0];
	//console.log(link);

	const { push } = useRouter();
	useQueryLength() === 0 ? push({ path: "/" }) : null;

	//onBeforeMount(async () => {
	//	useQueryLength() === 0 ? (location.href = "/") : null;
	//});
</script>

<style lang="scss"></style>
