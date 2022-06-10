<template>
	<LayoutPage>
		<div class="container flex flex-wrap text-light-200 self-center justify-between">
			<ItemLink
				self
				@click.native.prevent="backuphandleOpen(it.short)"
				:href="'/business'"
				class="
					rounded-md
					flex-center flex-col
					h-auto
					bg-cyan-700 bg-opacity-80 bg-hero-rain-white-30 bg-0.25r
					m-4
					w-full
					min-h-20
					py-4
					px-5
					transition
					duration-700
					overflow-hidden
					group
					sm:max-w-1/3
					md:max-w-1/4
					lg:max-w-1/5 lg:hover:(bg-orange-700)
				"
				v-for="(it, i) in data"
				:key="i">
				<div
					class="
						font-semibold
						text-sm text-center
						tracking-widest
						px-10
						pb-2
						transition-all
						animate-flipInX animate-delay-400
						animated
						<sm:(uppercase)
						md:(text-md
						max-w-1/4
						py-4
						absolute)
						lg:max-w-1/5
						lg:group-hover:(animate-delay-400
						animate-duration-600 animate-fadeOut)
						"
					>{{ it.title }}</div
				>
				<div
					class="
						text-xs text-center
						md:(opacity-0
						transition-opacity
						animate-backOutLeft
						duration-300
						text-left
						animate-delay-100
						animated)
						lg:group-hover:(block
						opacity-100
						animated
						animate-delay-700 animate-duration-600 animate-backInLeft)
						"
					>{{ it.description }}</div
				>
			</ItemLink>
		</div>
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: 'Программы',
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
		handleOpen(short) {
			window.open('/l/' + short, '_blank')
		},
	},
}
</script>
