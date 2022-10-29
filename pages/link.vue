<template>
	<div>
		{{ payload }}
		<!--{{ data }}-->
	</div>
</template>

<script setup>
	//const links = useState(() => []);

	//if (process.server) {

	//links.value = query;

	//const hydro = useHydration();
	//console.log(hydro);

	//if (process.server) {
	const gql = useStrapiGraphQL();
	const query = await gql(gqlQuery());
	useNuxtApp().payload.data = query;
	//}

	const payload = useNuxtApp().payload.data;
	console.log(payload);

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

	function gqlQuery() {
		return `
		query {
			links(pagination: { limit: 1000 }, sort: "top:DESC") {
			  data {
				attributes {
				  top
				  href
				  title
				  short
				  description
				  partnership
				  updatedAt
				  alt
				  imgs {
					data {
					  attributes {
						name
						alternativeText
						width
						height
						size
						ext
						url
					  }
					}
				  }
				  tags {
					data {
					  attributes {
						title
					  }
					}
				  }
				}
			  }
			}
		  }
		 `;
	}
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
