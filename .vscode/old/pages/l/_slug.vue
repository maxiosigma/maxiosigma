<template>
	<div class="link">
		<!--<TemplateHead :title="title" :description="description" :main="img_logo" :alt="img_logo" :short="img_logo" :ico="img_ico" />
		-->

		<noscript inline-template>
			<div class="hidden">
				<img src="https://vk.com/rtrg?p=VK-RTRG-1108817-aRWww" style="position: fixed; left: -999px" alt="" />
			</div>
		</noscript>

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
			slug: this.slug
		}
	},
	async asyncData({ store, params }) {
		const slug = params.slug
		const data = store.state.links?.[slug]

		return { slug, title: data.title ?? 'Портал', description: data.description ?? '', link: data.link ?? '/' }
	}

}

//export default {
//	nuxtI18n: false,
//	layout: 'empty',
//	head() {
//		return {
//			title: this.title,
//			titleTemplate: this.linkTitle ? '%s' : this.headTemplate(),
//		}
//	},
//	async asyncData({ store, params }) {
//		const slug = params.slug
//		const utm = store.state.utm[slug.split('_')[1] ?? 'origin']
//		const content = store.state.contentful.shortlink
//			.reduce(
//				(sum, it) =>
//					sum.push({
//						...it.fields,
//					}) && sum,
//				[]
//			)
//			.filter((it) => it.short === slug.split('_')[0])[0]

//		const titleSlug = slug != undefined ? String(slug).toUpperCase().split('_').join(' | ') : 'Link',
//			dlink = content.desktop,
//			mlink = content.mobile,
//			linkTitle = content.title,
//			description = content.description ?? '',
//			alt = content.alt,
//			img_ico_c = content?.imgs?.filter((it) => it?.fields?.file?.contentType === 'image/x-icon')?.[0]?.fields?.file?.url,
//			img_logo_c = content?.imgs?.filter((it) => it?.fields?.file?.contentType !== 'image/x-icon')?.[0]?.fields?.file?.url

//		const img_ico = img_ico_c ? 'https:' + img_ico_c : ''
//		const img_logo = img_logo_c ? 'https:' + img_logo_c : ''
//		const title = linkTitle ?? titleSlug

//		return { title, img_ico, img_logo, linkTitle, description, dlink, mlink, alt, utm }
//	},
//	data() {
//		return {
//			link: '/',
//		}
//	},
//	async beforeMount() {
//		const isPC = this.$ua.deviceType() === 'pc'
//		this.updateURL(this.utm)
//		this.vkPixel()
//		this.mlink = this.mlink ?? this.dlink
//		this.alt = this.alt ?? (this.mlink || this.dlink)
//		this.link = isPC ? this.dlink : this.mlink

//		try {
//			setTimeout(() => (location.href = this.link), 150)
//		} catch (error) {
//			setTimeout(() => (location.href = this.alt), 450)
//		}

//		setTimeout(() => (location.href = this.alt), 2450)
//	},
//}
</script>

<style lang="scss">
.link {
	@apply bg-black flex-center h-screen w-screen relative;
}
</style>