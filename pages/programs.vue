<template>
	<LayoutPage>
		<div class="flex flex-wrap text-black justify-between">
			<a
				:href="'/l/' + it.short"
				class="
					bg-white
					rounded-md
					flex-center
					bg-opacity-90 bg-hero-topography-water-50 bg-10r
					m-4
					w-full
					py-4
					px-5
					overflow-hidden
					group
					sm:max-w-1/3
					md:max-w-1/4
					lg:max-w-1/5
				"
				v-for="(it, i) in data"
				:key="i">
				<div
					class="
						font-black
						text-md
						tracking-wide
						animate-flipInX animate-delay-400
						animated
						absolute
						group-hover:(animate-delay-200
						animate-duration-600 animate-fadeOut)
						"
					>{{ it.title }}</div
				>
				<div
					class="
						text-xs
						opacity-0
						transition-opacity
						animate-backOutLeft
						duration-300
						animate-delay-100
						animated
						group-hover:(block
						opacity-100
						animated
						animate-delay-700 animate-duration-600 animate-backInLeft)
						"
					>{{ it.description }}</div
				>
			</a>
		</div>
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: 'Партнёрские программы',
		}
	},
	data() {
		return {
			data: Object.values(this.$store.state.links.data)?.reduce((sum, it) => {
				if (!!it?.partnership && !!it?.title && !!it?.description && !!it?.short)
					sum.push({ title: it.title, description: it.description, short: it.short })

				return sum
			}, []),
		}
	},
	methods: {
		doSmth(e) {
			console.log(e)
		},
	},
}
</script>

<style lang="scss">
</style>