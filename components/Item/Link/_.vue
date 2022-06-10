<template>
	<a :href="link" :target="onBlank ? '_blank' : false" :rel="onBlank && !self ? 'noopener noreferrer' : false">
		<nuxt-link class="hidden" v-if="false" :to="link"></nuxt-link>
		<slot>{{ $config.baseUrl }}</slot>
	</a>
</template>

<script>
export default {
	props: {
		href: { type: String, required: false, default: '/' },
		self: { type: Boolean, required: false, default: false },
		blank: { type: Boolean, required: false, default: false },
		nolang: { type: Boolean, required: false, default: false },
	},
	data() {
		const normalHref = this.site
			? ''
			: this.href
					.split('/')
					.filter((it, i) => !(i === 0 && it === '') && !(i === this.href.length - 1 && it === ''))
					.join('/')

		return {
			onBlank: this.isBlank(this.href) || this.blank,
			link: this.isBlank(this.href) ? this.href : this.nolang ? `/${normalHref}` : `/${this.$i18n.locale}/${normalHref}`,
		}
	},
}
</script>