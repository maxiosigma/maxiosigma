<template>
	<div :class="$style.redlink">
		<noscript inline-template>
			<div class="hidden">
				<ItemLink :href="'/' + link"></ItemLink>
				<ItemLink :href="'/' + alt"></ItemLink>
				<meta http-equiv="refresh" :content="'0.05;url=' + link" />
				<img src="https://vk.com/rtrg?p=VK-RTRG-1108817-aRWww" style="position: fixed; left: -999px" alt="" />
			</div>
		</noscript>

		<ins class="adsbygoogle" :class="$style.redlinkIns">Реклама</ins>
	</div>
</template>

<script>
export default {
	layout: 'empty',
	props: ['href'],
	head() {
		return {
			title: this.headSplitTitle(this.$route.params.slug),
		}
	},
	data() {
		return {
			link: '/',
			title: '',
			redirect: '',
			active: false,
			devicePC: this.$ua.deviceType() === 'pc',
			target: false,
			alt: false,
		}
	},
	mounted() {
		this.start()
		this.adSence()
		this.targetPixel()
	},
	methods: {
		async adSence() {
			const ad = document.querySelector('ins.adsbygoogle')

			if (ad && (ad.innerHTML.replace(/\s/g, '').length == 0 || ad.offsetHeight == 0 || ad.offsetWidth == 0)) {
				this.$toast.show('На этой странице сайта нет рекламы, но у вас установлен блокировщик рекламы, пожалуйста отключите его.', {
					theme: 'outline',
					position: 'top-center',
					duration: 50000,
					delay: 1500,
					className: '!py-4 !bg-white !text-black !border-0',
				})

				setTimeout(this.routeLight('community/programs'), 5000)

				this.target = false
			} else {
				this.target = true
			}
		},
		start() {
			const slug = this.$route.params.slug,
				item = Object.values(this.$store.state.shortlinks).reduce(
					(sum, groups) =>
						groups.reduce((sum_, group) => {
							const result = Object.values(group.socials).find((social) => social.s === slug)
							if (result) Object.assign(sum, result)
							return sum_
						}, {}) && sum,
					{}
				)

			this.link = this.href ? this.href : item.lp && item.lm && !item.l ? (this.devicePC ? item.lp : item.lm) : item.l
			this.alt = item.alt ? item.alt : this.link
			this.updateURL(item.u)
		},
		targetPixel() {
			if (this.target) {
				this.vkPixel()

				const thise = this.link
				const althise = this.alt
				const time = Math.floor(250 + Math.random(500, 999) * 1000)

				setTimeout(function () {
					location.href = thise

					setTimeout(function () {
						location.href = althise
					}, time)
				}, 55)
			}
		},
	},
}
</script>

<style lang="scss" module>
.redlink {
	@apply bg-black flex-center h-screen w-screen relative;
}
</style>