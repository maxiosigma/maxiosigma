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
	mounted() {
		//this.allActions()
		this.noContextMenu()
		this.ymPixel()
		this.gtm()
		//console.log(this.$store.state.contentful)
	},
	//methods: {
	//	//async allActions() {
	//	//	await this.$store.dispatch('contentful/allActions')
	//	//},
	//},
	middleware: [],
}
</script>
