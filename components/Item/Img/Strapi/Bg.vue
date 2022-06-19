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
			req: `${this.src}`, // !this.isHypertext(this.src) ? require(`~/images/${this.src}`) :
		}
	},
	mounted() {
		this.loadStyleImg()
	},
	methods: {
		loadStyleImg() {
			document.body.insertAdjacentHTML(
				'beforeend',
				`<style type='text/css' async='true'>.${this.id} { background-image: url('${this.req}'); }</style>`
			)
		},
	},
}
</script>

<style lang="scss">
.img {
	&-bg {
		&-mod {
			@apply bg-no-repeat w-full;
			//background-image: url('~images/main-bg.jpg');
		}
	}
}
</style>