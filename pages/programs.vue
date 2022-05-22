<template>
	<LayoutPage>
		<div class="text-white">
			{{ data }}
		</div>
	</LayoutPage>
</template>

<script>
export default {
	data() {
		return {
			data: Object.values(this.$store.state.links.data)?.reduce((sum, it) => sum.push(it.short) && sum, []),
		}
	},
}
</script>

<style lang="scss">
</style>