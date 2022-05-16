<template>
	<LayoutPage>
		<!--<div class="about">
			<div class="bg-gray-400 bg-opacity-0 h-90vh pt-10">
				<ItemImg class="ml-auto max-h-full object-contain -mr-1/5" src="about/person_1.png"></ItemImg>
			</div>
		</div>-->
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: 'Автор',
		}
	},
	middleware: 'links',
	data() {
		return {
			visual: false,
			deviceType: this.$ua.deviceType(),
			items: {
				titles: [
					{ t: 'Лидер', cl: 'text-yellow-600' },
					{},
					{ t: 'Бизнесмен', cl: 'text-red-600' },
					{},
					{ t: 'Филантроп', cl: 'text-blue-600' },
				],
				abouts: ['Работаю с командой', 'Фрилансер с 2017 года', 'Поддерживаю бренд'],
				commerce: ['Оцифровываю бизнесы', 'Помогаю с доходом на конкурентах', 'Приобщаю к умным покупкам'],
				hobbies: ['Разрабатываю сайты', 'Создаю продающий дизайн', 'Занимаюсь спортом'],
			},
		}
	},
	mounted() {
		setTimeout(() => {
			this.visual = true
		}, this.$store.state.timeout)

		setTimeout(() => {
			this.$refs.promo?.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, this.$store.state.timeout - 1 + 90601)

		this.storageItem('about')
	},
}
</script>

<style lang="scss">
.about {
	@apply flex flex-col -mt-20 z-10 fle relative <lg: (flex-wrap pt-5 pb-10) ;
}
</style>