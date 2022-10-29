<template>
	<div>
		<div v-for="link in links" :key="link.short">
			{{ link.ferd }}
		</div>
	</div>
</template>

<script setup>
	//.map((it) => it.short)
	//console.log();
	//links?.filter((ln) => ln.short === query).length != 0 ? console.log(query) : null;
	//hash ? location.href = `/?${hash.replace("#", "")}`  : query ? {}: null
	//console.log(links);
	//const link = links.value?.filter((ln) => ln.short == Object.keys(query)?.[0])?.[0];
	//console.log(link);

	const links = useStrapiLinks();
	//console.log(links);

	onMounted(() => {
		//useQueryLength() === 0 ? (location.href = "/") : null;
	});

	//const { push } = useRouter();
	//useQueryLength() === 0 ? push({ path: "/" }) : null;
</script>

<style lang="scss"></style>
