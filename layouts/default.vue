<template>
	<div class="layout-default bg-black">
		<slot />
	</div>
</template>

<script setup>
	//<!-- page-key="static"  -->
	//console.log(useStyleTag());
	//		<!--<NuxtPage></NuxtPage>-->

	const props = defineProps({
		bs: {
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
	});

	useHead({
		titleTemplate: `%s`,
		htmlAttrs: { class: "html" },
		headAttrs: { class: "head" },
		bodyAttrs: { class: "body" },
		meta: [{}],
	});
</script>

<style lang="scss">
	.html {
		@apply bg-black;
	}

	.head {
	}

	.body {
	}
</style>
