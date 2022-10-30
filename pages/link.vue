<template>
	<div class="text-light-200">
		<!--{{ payload }}-->
		<!--{{ data }}-->
		<!--{{ links }}-->
	</div>
</template>

<script setup>
	//onServerPrefetch

	onMounted(async () => {
		//if (process.server) {
		//const { links, getApiDataLinks } = useStrapiLinks();
		//process.server ? await getApiDataLinks() : null;
		////await getApiDataLinks();
		//console.log(links);
		////}

		//if (process.server)
		console.log(useNuxtApp().payload);
		console.log(useNuxtApp().payload.data);
	});

	//const links = useState(() => []);

	//if (process.server) {

	//links.value = query;

	//const hydro = useHydration();
	//console.log(hydro);

	//if (process.server) {

	//onMounted(async () => {
	//	try {
	//		const gql = useStrapiGraphQL();
	//		const query = await gql(gqlQuery());
	//		const test = useState(() => query);
	//		const test2 = useAsyncData(() => query);
	//		useNuxtApp().payload.data = query;
	//		console.log(query);
	//		console.log(test);
	//		console.log(test2);
	//	} catch (error) {}

	//	const payload = useNuxtApp().payload;
	//	console.log(payload);
	//});

	//const { data, pending, error } = useAsyncData(
	//	async () => {
	//		try {
	//			const gql = useStrapiGraphQL();
	//			const query = await gql(gqlQuery());
	//			//console.log(query);
	//			// process.server &&
	//			return query;
	//		} catch (error) {}
	//	},
	//	{ lazy: true, server: true, watch: false, InitialCache: true, immediate: false }
	//);

	//console.log(pending, error);

	//}

	//const { $hello } = useNuxtApp();
	//console.log($hello);

	//console.log(links.value.data.links.data);

	//links.value = useState(async () => {
	//	const result = gql.data.links.data;
	//	//console.log(result);
	//	//links.value = gql.data.links.data;

	//	console.log(gql);

	//	return result;
	//});

	//onMounted(() => {});

	//console.log(links);
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
