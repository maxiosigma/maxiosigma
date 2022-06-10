<template>
	<div :class="$style.animelot" ref="animContainer">
		<div class="anime-lot-target" v-if="target">{{ menuLottie }}</div>
	</div>
</template>

<script>
//import lottie from 'lottie-web/build/player/lottie_light.min'
//import lottie from 'lottie-web/build/player/lottie_canvas'
import lottie from 'lottie-web/build/player/lottie_light.min'

export default {
	computed: {
		dynamicLottie() {
			return require(`~/images/${this.animationData}`)
		},
		menuLottie() {
			this.$store.state.mainMenu == 1 ? this.startAnimation() : this.$store.state.mainMenu == -1 ? this.stopAnimation(this.name) : null
			return true
		},
		anime() {
			const example = lottie.loadAnimation({
				container: this.$refs.animContainer,
				name: this.name,
				renderer: this.renderer,
				loop: this.reverse ? 1 : this.loop,
				autoplay: this.autoplay,
				animationData: this.dynamicLottie,
			})

			return example
		},
	},
	mounted() {
		!this.target ? this.startAnimation() : null
	},
	methods: {
		stopAnimation(name) {
			this.anime.stop(name)
		},
		startAnimation() {
			let speed = this.direction ? Number(this.speed) : -Number(this.speed)

			this.stopAnimation(this.name)

			setTimeout(() => {
				if (this.delay) {
					this.anime.setSpeed(0, this.name)

					setTimeout(() => {
						this.anime.setSpeed(speed, this.name)
						this.anime.goToAndPlay(0, false, this.name)
					}, Number(this.delay))
				} else {
					this.anime.setSpeed(speed, this.name)
					this.anime.goToAndPlay(0, false, this.name)
				}

				if (this.reverse) {
					let loop = 0
					const thisLoop = this.loop
					const dury = Math.floor((this.anime.getDuration(false, this.name) / this.speed) * 900)

					const looped = setInterval(() => {
						loop += 2
						speed = -speed
						this.anime.pause(this.name)
						this.anime.setSpeed(speed, this.name)
						this.anime.play(this.name)

						if (loop >= thisLoop - 1) clearInterval(looped)
					}, dury)
				}
			}, 2000)
		},
	},
	props: {
		name: {
			type: String,
			default: () => 'animate-' + Math.random(),
		},
		speed: {
			type: [String, Number],
			default: () => 1.0,
		},
		delay: {
			type: [Boolean, String, Number],
			default: () => false,
		},
		width: {
			type: [String, Number],
			default: () => 'full',
		},
		height: {
			type: [String, Number],
			default: () => 'full',
		},
		background: {
			type: String,
			default: 'transparent',
		},
		loop: {
			type: [Boolean, Number],
			default: () => false,
		},
		reverse: {
			type: Boolean,
			default: () => false,
		},
		autoplay: {
			type: Boolean,
			default: () => true,
		},
		renderer: {
			type: String,
			default: () => 'svg',
			// 'svg' / 'canvas' / 'html'
		},
		path: {
			type: String,
			default: () => null,
		},
		animationData: {
			type: String,
			default: () => null,
		},
		target: {
			type: Boolean,
			default: () => false,
		},
		direction: {
			type: Boolean,
			default: () => true,
		},
	},
}
</script>

<style lang="scss">
.anime-lot {
	@apply flex-grow m-0 p-0 pointer-events-none;

	& > * {
		width: inherit !important;
		height: inherit !important;
		min-width: inherit !important;
		min-height: inherit !important;
		max-width: inherit !important;
		max-height: inherit !important;

		@apply object-center object-cover inline-block;
	}

	&-target {
		@apply hidden;
	}
}
</style>
