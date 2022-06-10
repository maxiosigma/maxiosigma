<template>
	<div class="hidden">
		<noscript inline-template><meta http-equiv="refresh" :content="'0.005;url=' + url()" /></noscript>
	</div>
</template>

<script>
export default {
	props: ['id'],
	head() {
		return {
			meta: [{ 'http-equiv': `${this.isJS() ? '' : 'refresh'}`, content: `0.005;url=${this.url()}` }],
		}
	},
	methods: {
		url() {
			return this.choiceLink() || this.randomLink()
		},
		randomLink() {
			if (this.$store.state.noscript.active.length === this.$store.state.noscript.links.length)
				this.$store.commit('noscript/noActiveNoScriptLink')

			const randomNumber = this.randomInteger(1, this.$store.state.noscript.links.length - 1)
			const randomlink = this.setRundom(randomNumber)
			let result = this.$route.path.replace('/light', '') === randomlink ? this.setRundom(randomNumber) : randomlink

			if (this.$store.state.noscript.active.find((item) => item === result) === undefined)
				this.$store.commit('noscript/activeNoScriptLink', result)
			else {
				do {
					result = this.setRundom(randomNumber)
				} while (this.$store.state.noscript.active.find((item) => item === result) === undefined)
			}

			return result
		},
		setRundom(x) {
			return this.$store.state.noscript.links[x]
		},
		choiceLink() {
			const choiceLink = this.$store.state.noscript.links[this.id]
			return choiceLink
		},
		randomInteger(min, max) {
			let rand = min - 0.5 + Math.random() * (max - min + 1)
			return Math.round(rand)
		},
	},
}
</script>