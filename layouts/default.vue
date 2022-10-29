<template>
	<div class="layout-default bg-black">
		<!--<NuxtPage></NuxtPage>-->
		<slot />
	</div>
</template>

<script setup>
	//<!-- page-key="static"  -->
	//console.log(useStyleTag());

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
		preloader: {
			type: Boolean,
			required: false,
			default: true,
		},
	});

	useHead({
		titleTemplate: `%s`,
		htmlAttrs: {
			class: "html",
			//class: this.$style.html,
			//lang: this.lang,
			//prefix: "og: https://ogp.me/ns#",
			//...(this.isCustomMobile() && { amp: "true" }),
		},
		headAttrs: {
			//class: this.$style.head,
			class: "head",
		},
		bodyAttrs: {
			class: "body",
			//class: [this.$style.body ?? "body", this.bs || ""],
			//...(!this.$config.app.isDev && { oncontextmenu: "return!0" }),
		},
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
