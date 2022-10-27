<template>
	<NuxtPage page-key="static" />
</template>

<script setup>
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
			class: this.$style.html,
			//lang: this.lang,
			prefix: "og: https://ogp.me/ns#",
			//...(this.isCustomMobile() && { amp: "true" }),
		},
		headAttrs: {
			class: this.$style.head,
		},
		bodyAttrs: {
			class: [this.$style.body ?? "body", this.bs || ""],
			//...(!this.$config.app.isDev && { oncontextmenu: "return!0" }),
		},
		meta: [{}],
	});
</script>

<style lang="scss" module>
	.html {
	}
	.head {
	}
	.body {
	}
</style>
