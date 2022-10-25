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

	console.log(useStrapiLinks());

	//console.log(`/?${hash.replace("#", "")}`);

	//if (router.hash) router.redirectedFrom = { path: "/", query: router.hash.replace("#") };
	if (hash) location.href = `/?${hash.replace("#", "")}`;

	const { x, y } = useMouse();
	const isDark = usePreferredDark();

	//<!--<NuxtLayout name="page">-->
	//<!--</NuxtLayout>-->

	//import gqlWorks from "~/assets/gql/works.gql";

	//onMounted(async () => {});

	//const graphql = useStrapiGraphQL();
	//const works = await graphql(gqlWorks);
	//console.log(works);

	//const appConfig = useAppConfig();
	//console.log(appConfig.title);

	//<Teleport to="body"> <div v-if="open" class="modal">
	//    <p>Hello from the modal!</p>
	//    <button @click="open = false">Close</button>
	//  </div></Teleport>

	//useSchemaOrg([
	//	// @todo Select Identity: https://vue-schema-org.netlify.app/guide/guides/identity
	//	defineWebSite({
	//		name: "My Awesome Website",
	//	}),
	//	defineWebPage(),
	//]);
	//const { idle, lastActive } = useIdle(5 * 60 * 1000) // 5 min
	//const title = useTitle('New Title')

	//const isLeft = usePageLeave(); // Подожди не уходи ...
</script>

<style lang="scss">
	html {
		@apply bg-black;
	}
</style>
