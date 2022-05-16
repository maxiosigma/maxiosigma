<template>
	<Layout :bodyStyle="$style.hello">
		<div :class="$style.helloContainer">
			<ItemToogleClass
				:cl="[
					['animated animate-fade-in-down', sleep],
					['animated animate-fade-out-down', 1.5],
				]"
				class="duration-2000 delay-500">
				<div class="text-yellow-400">Приветствую тебя</div>
			</ItemToogleClass>

			<ItemToogleClass
				:cl="[
					['animated animate-fade-in-up ', sleep + 2 * 1],
					['animated animate-fade-out-up', 1.5],
				]"
				class="duration-2000 delay-500">
				<div class="text-green-400">Очень рад</div>
			</ItemToogleClass>

			<ItemToogleClass
				:cl="[
					['animated animate-fade-in-down ', sleep + 2 * 2],
					['animated animate-fade-out-down', 1.5],
				]"
				class="duration-2000 delay-500">
				<div class="text-red-600">Что ты попал|a</div>
			</ItemToogleClass>

			<ItemToogleClass
				:cl="[
					['animated animate-fade-in-up ', sleep + 2 * 3],
					['animated animate-fade-out-up', 1.5],
				]"
				class="duration-2000 delay-500">
				<div class="text-green-400">На мой сайт</div>
			</ItemToogleClass>

			<ItemToogleClass
				:cl="[
					['animated animate-fade-in-down ', sleep + 2 * 4],
					['animated animate-fade-out-down', 1.5],
				]"
				class="duration-2000 delay-500"
				@tme="addCount">
				<div class="text-yellow-400">Давай знакомиться</div>
			</ItemToogleClass>
		</div>
	</Layout>
</template>

<script>
export default {
	head() {
		return {
			title: 'Приветствие',
		}
	},
	data() {
		return {
			counter: 0,
			sleep: 1,
		}
	},
	mounted() {
		setTimeout(() => {
			localStorage.setItem('hello', true)
			localStorage.getItem('hello') ? this.routeLight('about') : null
		}, this.counter * 1000)
	},
	methods: {
		addCount(count) {
			this.counter += count.tme
		},
	},
}
</script>

<style lang="scss" module>
.hello {
	@apply bg-repeat bg-50p bg-hero-circuit-board-water-20 lg:bg-30p;

	&__container {
		@apply container flex-center flex-grow font-black mx-auto text-center text-white tracking-widest px-5 text-3xl uppercase md:text-4xl lg:text-5xl xl:text-7xl;
	}
}
</style>