<template>
	<LayoutPage>
		<div class="flex flex-wrap text-white justify-between">
			<a
				:href="'/l/' + it.short"
				class="bg-dark-900 m-4 w-full py-3 px-6 sm:max-w-1/3 md:max-w-1/4 lg:max-w-1/5"
				v-for="(it, i) in data"
				:key="i">
				<div class="text-sm">{{ it.title }}</div>
				<div class="mt-2 text-xs">{{ it.description }}</div>
			</a>
		</div>
	</LayoutPage>
</template>

<script>
export default {
	data() {
		return {
			data: Object.values(this.$store.state.links.data)?.reduce((sum, it) => {
				if (!!it?.partnership && !!it?.title && !!it?.description && !!it?.short)
					sum.push({ title: it.title, description: it.description, short: it.short })

				return sum
			}, []),
		}
	},
}
</script>

<style lang="scss">
</style>