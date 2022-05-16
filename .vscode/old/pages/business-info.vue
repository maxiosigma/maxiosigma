<template>
	<Layout>
		<TemplateHead
			:title="title"
			:description="description"
			:keywords="keywords"
			:main="require('~/images/community/business/info/banner_logo.png')"
			:alt="require('~/images/community/business/info/banner_logo.png')" />

		<div class="flex-grow bg-green-100 w-full">
			<div class="bg-white mx-auto min-h-screen max-w-600px">
				<ItemImg class="h-auto object-contain w-full" src="community/business/info/banner_lc.png"></ItemImg>

				<div class="container mx-auto max-w-540px py-8 <sm:px-4">
					<h1 class="font-black text-lg mb-8 text-green-700 sm:text-2xl">
						<span class="text-gray-300">МНОЖЕСТВО</span> ЛЮДЕЙ УПУСТЯТ ЭТУ ВОЗМОЖНОСТЬ И ТОЛЬКО
						<span class="text-cyan-600">СИЛЬНЫЙ ДУХОМ</span> ЗАРАБОТАЕТ !!!
					</h1>

					<div class="grid text-green-900 gap-y-1">
						<div
							class="inline"
							v-for="(it, i) in [
								'Вход бесплатный 🌟',
								'20 000 партнёров в команде 💛',
								'Личный профи-бренд на всю жизнь 💪',
								'Курсы, рекомендации, связи, наставничество и полное сопровождение от меня вы получаете в подарок 🎁',
							]"
							:key="i">
							<div class="rounded-full h-4 text-lg mr-0.5 min-h-4 min-w-4 w-4 inline-flex-center overflow-hidden">✅</div>
							{{ it }}
						</div>
					</div>

					<div class="flex-center font-light my-8 text-sm text-green-900 uppercase">
						🌟 УЗНАЙ, КАК ЗАРАБАТЫВАТЬ НА ПОКУПКАХ ДРУГИХ ЛЮДЕЙ 🌟
					</div>

					<div class="font-semibold mb-6">Смотри подробности в любимом мессенджере ⬇</div>

					<!-- href: 'https://vk.me/club211144924 -->
					<div class="min-h-4 grid pb-8 gap-5 grid-cols-3 <sm:grid-cols-1">
						<div
							class="rounded-md cursor-pointer text-white py-2 px-4 transition duration-500 inline-flex items-center"
							:class="[it.cl, '']"
							v-for="(it, i) in [
								{
									cl: 'bg-indigo-500 hover:(bg-opacity-0 text-indigo-500)',
									t: 'Телеграм',
									icon: 'font-ft text-xl ft-telegram text-indigo-500',
									href: 'https://t.me/buisnesschatbot',
								},
								{
									cl: 'bg-yellow-500 hover:(bg-opacity-0 text-yellow-500)',
									t: 'Инстаграм',
									icon: 'font-ft text-xl ft-ins text-yellow-500',
									href: 'https://ig.me/m/maxiosigma',
								},
								{
									cl: 'bg-blue-500 hover:(bg-opacity-0 text-blue-500)',
									t: 'Вконтакте',
									icon: 'font-ft text-xl text-blue-500 ft-vk',
									href: 'https://vk.me/maxibisness',
								},
							]"
							:key="i"
							@click="onSubscription(it.href)">
							<div :class="[it.icon, 'bg-white box-content p-0.5 rounded-full mr-1']"></div>
							{{ it.t }}
						</div>
					</div>

					<!-- 		@click="" -->
					<!-- 		:href="require('~/images/community/business/info/Брайан Трейси - Выйди из зоны комфорта, 1-13')" -->
					<div @click="onBook" class="cursor-pointer flex flex-col text-center items-center justify-center group">
						<div
							class="
								border-b-2 border-b-yellow-600
								text-xl
								transition-all
								text-green-600
								duration-500
								uppercase
								group-hover:(text-green-500
								border-b-yellow-500)
								">
							Подарок
						</div>

						<div
							class="
								mt-0.75
								text-center
								ml-1
								opacity-65
								transition-all
								text-green-600 text-[7px]
								tracking-8px
								duration-500
								uppercase
								group-hover:(text-green-500
								opacity-100)
								">
							Скачать
						</div>

						<div class="mt-3 text-xs mb-0.5 transition-all duration-500 uppercase group-hover:text-indigo-900">
							Книга | бестселлер
						</div>

						<div class="mb-0.5 transition-all duration-500 sm:max-w-1/2 group-hover:text-indigo-900">
							Брайан Трейси — Выйди из зоны комфорта, 21 метод повышения личной эффективности
						</div>

						<div class="font-light text-xs opacity-50"> Первые 13 страниц, остальное лично </div>
					</div>

					<div
						class="cursor-pointer flex-center mt-8 transition-colors text-xsopacity-25 duration-500 hover:(text-yellow-600)"
						@click="onMain">
						<div class="icon-align-right"></div>
						<div class="mr-2 ml-2 uppercase">На главную</div>
						<div class="icon-align-left"></div>
					</div>
				</div>
			</div>
		</div>
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
			title: 'Онлайн бизнес',
			description: 'Последний шанс поднять финансы',
			keywords: 'Бизнес, Онлайн, Возможности, Заработок, Финансы, Интернет, MLM, Сообщество, Команда',
			isSubscription: false,
			isBook: false,
			file: false,
		}
	},
	mounted() {
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