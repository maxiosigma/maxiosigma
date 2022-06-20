<template>
	<div :class="[id, 'img-bg-mod']" :title="title" :alt="alt">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['src', 'alt', 'title'],
	data() {
		return {
			id:
				'img_' +
				String(Math.random() * ((Math.random() * 10000000) / 1.0))
					.split('.')
					.join('_'),
			req: `${this.src}`,
			//req: require(`../../../../../strapi/public${this.src}`),
			//req: `${this.src}`, // !this.isHypertext(this.src) ? require(`~/images/${this.src}`) :
		}
	},
	async mounted() {
		//const img = require(`./../../../../../strapi/public${this.src}`)
		//console.log(img)

		//const img = import(`~images/portfolio/bg_1.png`)
		//const img = (await import(`~~/assets/../../strapi/public${this.src}`)).default

		//require.context(directory, (useSubdirectories = true), (regExp = /^\.\/.*$/), (mode = 'sync'))

		const name = this.src.replace('/uploads/', '')

		// /\Frame_3_27d761588c.png$/
		//const reg = new RegExp(`\\b${this.src}\\b`, 'gi')
		const reg = new RegExp(`\\${name}$`, '')
		console.log(reg)
		const images = require.context('A:/programs/Projects/strapi/public/uploads', false, /\Frame_3_27d761588c.png$/)
		//const img = images(`A:/programs/Projects/strapi/public${this.src}`)

		console.log(images(`./${name}`))

		//this.loadStyleImg(images(`./Frame_3_27d761588c.png`))
		//${this.src}
		//require(`~/../strapi/public${this.src}`)
		//console.log(require(`../../../../../strapi/public${this.src}`))

		//const test = import(`../../../../../strapi/public${this.src}`)
		//const test = require(`~/../../strapi/public${this.src}`)
		//const test = require(`strapimg/uploads/Frame_3_27d761588c.png?updated_at=2022-06-19T09:35:43.521Z`)

		//const test = import('~testerum/uploads/Frame_3_27d761588c.png?updated_at=2022-06-19T09:35:43.521Z')

		//const tts = await this.getImg()

		//console.log(tts)
	},
	methods: {
		loadStyleImg(img) {
			document.body.insertAdjacentHTML(
				'beforeend',
				`<style type='text/css' async='true'>.${this.id} { background-image: url('${img}'); }</style>`
			)
		},
		//async getImg() {
		//	//const path = await require('~/../../strapi/public' + this.src)
		//	//const path = await require(`A:/programs/Projects/strapi/public${this.src}`)
		//	return await require(`./../../../../../strapi/public${this.src}`)
		//},
	},
}
</script>

<style lang="scss">
.img {
	&-bg {
		&-mod {
			@apply bg-no-repeat w-full;
		}
	}
}
</style>