<template>
	<NuxtPage page-key="static" />
</template>

<script setup>
	const title = ref("My App");
	const description = ref("My App Description");
	//	<!--<NuxtPage page-key="static" />-->
	useHead({
		title,
		titleTemplate: `%s`,
		meta: [{ name: "description", content: description }],
	});

	const props = defineProps({
		bodyStyle: {
			type: String,
			required: false,
			default: "body-bg",
		},
		title: {
			type: String,
			required: false,
			default: undefined,
		},
		description: {
			type: String,
			required: false,
			default: undefined,
		},
		preloader: {
			type: Boolean,
			required: false,
			default: true,
		},
	});
</script>

<style lang="stylus">
	.lang
		&-ru
			color red
</style>
