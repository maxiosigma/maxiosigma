<template>
	<div :class="[clc === '' ? 'hidden' : clc]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['cl', 'anime'],
	data() {
		return {
			clc: '',
		}
	},
	mounted() {
		const tme = this.cl.reduce((sum, item, i) => {
			sum += Number(item[1] || 0.5)
			this.addCLC(sum, item[0])

			if (i === this.cl.length - 1) {
				this.addCLC(sum + 0.5, 'hidden')
			}

			return sum
		}, 0)

		this.$emit('tme', { tme: tme + 1.5 })
	},
	methods: {
		addCLC(time, count) {
			setTimeout(() => {
				this.clc = count
			}, time * 1000)
		},
	},
}
</script>