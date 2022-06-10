<template>
	<Layout>
		<TemplateHead
			:title="title"
			:description="description"
			:keywords="keywords"
			:main="require('~/images/community/business/info/banner_logo.png')"
			:alt="require('~/images/community/business/info/banner_logo.png')" />

		<!-- in="" out="animated animate-fadeOut" -->
		<!--<ItemSlide class="info-slide" :d="3000" in="" out="animated animate-fadeOut" :end="true">
			<ItemImgBg class="bg-center bg-cover flex flex-grow" src="community/business/info/slide_1_bg.jpg">
				<ItemImgBg class="bg-center bg-contain flex-grow" src="community/business/info/slide_1_text.svg" />
			</ItemImgBg>
		</ItemSlide>-->

		<ItemSlide class="flex-center flex-col text-white info-slide" :d="10000" :end="true">
			<ItemImgBg class="bg-center bg-cover flex flex-grow" src="community/business/info/slide_2_bg.jpg">
				<div class=""></div>

				<!--<ItemImg class="bg-center bg-cover flex flex-grow" src="cdn/mqdefault.jpg"></ItemImg>-->

				<!--<ItemImgBg class="bg-center bg-contain flex-grow max-w-1/2 max-h-1/2" src="community/business/info/slide_2_photo.png" />-->
			</ItemImgBg>
		</ItemSlide>

		<!-- in="animated animate-zoomIn" out="animated animate-zoomOut" -->
		<!--<ItemSlide class="flex-center flex-col text-white info-slide" :d="10000" :end="true">
			<div class="font-black text-center tracking-widest text-3xl uppercase"></div>

			<div class="mt-3 grid grid-cols-3">
				<div>111</div>
				<div>222</div>
				<div>333</div>
				<div>444</div>
			</div>
		</ItemSlide>-->

		<!--<ItemSlide class="info-slide" in="animated animate-zoomIn" out="animated animate-zoomOut" :end="true" :d="4000"></ItemSlide>-->
	</Layout>
</template>

<script>
export default {
	head() {
		return {
			title: this.title,
			titleTemplate: '%s',
			description: this.description,
			keywords: this.keywords,
		}
	},
	data() {
		return {
			title: 'Бизнес Тренд',
			description: 'Последний шанс поднять финансы',
			keywords: 'Бизнес, Онлайн, Возможности, Заработок, Финансы, Интернет, MLM, Сообщество, Команда',
			slides: this.$store.state.slides,
			isSubscription: false,
			isBook: false,
			file: false,
		}
	},
	mounted() {
		//console.log(this.slides)
		this.storageItem('business')
		this.file = require('~/images/community/business/info/Брайан_Трейси_Выйди_из_зоны_комфорта_1_13.pdf').default
	},
	methods: {
		onSubscription(link) {
			window.open(link, '_blank')
			setTimeout(() => (this.isSubscription = !this.isSubscription), 8000)
		},
		onBook() {
			if (!this.isSubscription === true)
				this.$toast.show('Вы уже подписались ?', {
					theme: 'bubble',
					position: 'top-right',
					duration: 1000,
				})
			else {
				this.isBook = !this.isBook
				window.open(this.file, '_blank')
			}
		},
		onMain() {
			if (!this.isBook && !this.isSubscription)
				this.$toast.success('Забыли взять подарок ?', {
					theme: 'bubble',
					position: 'bottom-right',
					duration: 2000,
				})

			if (!this.isBook && this.isSubscription)
				this.$toast.success('Забыли взять подарок ?', {
					theme: 'bubble',
					position: 'bottom-right',
					duration: 2000,
				})

			if (this.isBook && !this.isSubscription)
				this.$toast.show('Вы уже подписались ?', {
					theme: 'bubble',
					position: 'top-right',
					duration: 1000,
				})

			if (this.isBook && this.isSubscription) window.open('/', '_blank')
		},
	},
}
</script>

<style lang="scss">
.info {
	&-slide {
		@apply flex flex-grow h-full w-full inset-0 absolute;
	}
}
</style>