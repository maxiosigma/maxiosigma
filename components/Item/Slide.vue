<template>
	<div class="slide" :class="classResult">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['d', 'in', 'out', 'end'],
	data() {
		return {
			slides: this.$store.state.slides,
			count: this.$store.state.slides.length,
			classResult: '!hidden',

			time: {
				start: 0,
				end: 0,
			},
		}
	},
	beforeMount() {
		this.time.end =
			this.count === 0
				? this.d
				: this.slides?.reduce((sum, it) => {
						sum += it
						return sum
				  }, this.d)
		this.time.start = this.time.end - this.d
		this.$store.commit('addSlide', this.d)
	},
	mounted() {
		//console.log(this.time.start, this.time.end, this.count)
		setTimeout(() => (this.classResult = this.in ?? ''), this.time.start)
		setTimeout(() => (this.classResult = this.out ?? ''), this.time.end - 1100)
		if (!this.end) setTimeout(() => (this.classResult = '!hidden'), this.time.end)
	},
}
</script>

<style lang="scss">
.slide {
	@apply transition-all duration-1000 delay-1000 animate-delay-1000 animate-duration-1000;
}
</style>