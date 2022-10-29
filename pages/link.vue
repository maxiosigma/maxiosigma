<template>
	<div></div>
</template>

<script setup>
	const links = useState("links", async () => (await useStrapiGraphQL()())?.data);

	//.map((it) => it.short)
	//console.log();
	//links?.filter((ln) => ln.short === query).length != 0 ? console.log(query) : null;
	//hash ? location.href = `/?${hash.replace("#", "")}`  : query ? {}: null
	//console.log(links);
	//const link = links.value?.filter((ln) => ln.short == Object.keys(query)?.[0])?.[0];
	//console.log(link);

	//let data = ref(null);
	//const links = useStrapiLinks();

	//onServerPrefetch(async () => {
	//	data.value = useStrapiLinks();
	//	console.log(data.value);
	//});

	//onMounted(() => {
	//	console.log(data);
	//	console.log(links);
	//	//useQueryLength() === 0 ? (location.href = "/") : null;
	//});

	//const { push } = useRouter();
	//useQueryLength() === 0 ? push({ path: "/" }) : null;
</script>

<style lang="scss"></style>
