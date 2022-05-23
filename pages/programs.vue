<template>
	<LayoutPage>
		<div class="flex flex-wrap text-white justify-between">
			<a
				:href="'/l/' + it.short"
				class="flex-center bg-dark-900 m-4 w-full py-3 px-6 group sm:max-w-1/3 md:max-w-1/4 lg:max-w-1/5"
				v-for="(it, i) in data"
				:key="i">
				<div class="text-sm animate-flipInX animated absolute group-hover:(animate-fadeOut)">{{ it.title }}</div>
				<div class="text-xs opacity-0 group-hover:(block opacity-100 animated animate-flipInX) ">{{ it.description }}</div>

				<!--<vue-typed-js
					:loop="false"
					:bindInputFocusEvents="true"
					:smartBackspace="false"
					:fadeOut="false"
					:typeSpeed="20"
					:startDelay="1000"
					:backDelay="1000"
					:backSpeed="10"
					:cursorChar="''"
					:strings="[it.title, it.description]"
					@onTypingPaused="doSmth()">
					<div class="typing"></div>
				</vue-typed-js>-->
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