<template>
	<div class="link">
		<TemplateHead :title="title" :description="description" />

		<h1 class="-z-999 absolute" v-if="title">{{ title }}</h1>

		<ItemImg class="h-full object-contain w-full -z-999 absolute" :src="cdn"></ItemImg>

		<noscript class="hidden" inline-template>
			<div class="hidden">
				<img src="https://vk.com/rtrg?p=VK-RTRG-1108817-aRWww" style="position: fixed; left: -999px" alt="" />
			</div>
		</noscript>

		<div :class="[isQR ? 'flex-center flex-col' : 'hidden']">
			<qrcode-vue class="qr-code" :value="value" :size="size"></qrcode-vue>
			<a :href="value" class="mt-4 text-white" target="_blank">{{ value }}</a>
		</div>

		<ins class="adsbygoogle">Реклама</ins>
	</div>
</template>

<script>
export default {
	nuxtI18n: false,
	head() {
		return {
			title: this.title,
			description: this.description,
			titleTemplate: '%s',
			slug: this.slug,
		}
	},
	data() {
		return {
			isQR: false,
			value: this.$config.baseUrl + this.$route.path,
		}
	},
	async asyncData({ store, params }) {
		const slug = params.slug,
			utm = store.state.utm,
			data = store.state.links?.data?.filter((it) => it?.short == slug)?.[0] ?? {},
			title = data?.title,
			cdn = data?.img?.cdn.replace('images/', ''),
			description = data?.description,
			link = data.link,
			alt = data.alt,
			url = data?.img?.url

		//console.log(cdn)

		return { slug, utm, title, cdn, url, description, link, alt, size: 1000 }
	},
	mounted() {
		if (this.$route.hash == '#qr') {
			this.isQR = true
		} else if (this.isQR == false) {
			const ut = this.utm?.[Object.keys(this.$route.query)?.[0]] ?? this.utm.origin

			//!!this.updateURL(ut)
			//	? setTimeout(() => {
			//			!!this.vkPixel()
			//				? setTimeout(() => {
			//						location.href = this.link
			//						setTimeout(() => (location.href = this.alt), 2250)
			//				  }, 250)
			//				: null
			//	  }, 500)
			//	: null
		}
	},
}
</script>

<style lang="scss">
.link {
	@apply bg-black flex-center flex-col h-screen w-screen relative;
}
.qr-code {
	@apply flex-center w-1/2 overflow-hidden;

	& > * {
		@apply h-full w-full #{!important};
	}
}
.adsbygoogle {
	@apply -z-999 absolute;
}
</style>