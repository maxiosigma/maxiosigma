<template>
	<Nuxt />
</template>

<script>
export default {
	head() {
		const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })

		return {
			titleTemplate: this.headTemplate(),
			meta: [...this.headMeta(), ...i18nHead.meta],
			link: [...this.headLinks(), ...i18nHead.link],
			htmlAttrs: { ...i18nHead.htmlAttrs },
		}
	},
	beforeMount() {
		window.onresize = function () {
			if (window.outerHeight - window.innerHeight > 100) {
				console.log('Вы открыли панель разработчика')
				location.href = '/404'
			}
		}
	},
	mounted() {
		this.noContextMenu()
		this.ymPixel()
		this.gtm()
	},
}
</script>
