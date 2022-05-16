<template>
	<div>
		<canvas id="canvas" ref="canvas" class="canvas" />
	</div>
</template>

<script>
export default {
	head() {
		return {
			script: [
				{
					hid: 'QRCode',
					src: 'https://jojotoo-static.oss-cn-shanghai.aliyuncs.com/resources/script/qrcode.min.js',
					defer: true,
					callback: () => {
						this.QRCodeModuleLoaded = true
					},
				},
			],
		}
	},
	data() {
		return {
			QRCodeModuleLoaded: false,
			url: null,
		}
	},
	mounted() {
		this.fetchData()
	},
	methods: {
		fetchData() {
			this.url = '123456'
			this.$watch(
				(vm) => [vm.url, vm.url, vm.$refs],
				(val) => {
					const [url, QRCodeModuleLoaded, holder] = val
					if (url && QRCodeModuleLoaded && holder.canvas) {
						this.getQRCode()
					}
				},
				{
					immediate: true,
					deep: true,
				}
			)
		},

		async getQRCode() {
			const options = {
				width: 130,
				height: 130,
				errorCorrectionLevel: 'L',
				type: 'image/png',
				rendererOpts: {
					quality: 1,
				},
			}
			/* global QRCode */
			await QRCode.toCanvas(this.$refs.canvas, this.url, options)
		},
	},
}
</script>

<style lang="scss" scoped>
.canvas {
	width: 100px;
	height: 100px;
}
</style>