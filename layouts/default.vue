<template>
	<slot></slot>
</template>

<script setup>
	const title = ref("My App");
	const description = ref("My App Description");

	useHead({
		title,
		meta: [
			{
				name: "description",
				content: description,
			},
		],
	});
</script>

<style lang="scss">
	.lang {
		&-ru {
			color: red;
		}
	}
</style>
