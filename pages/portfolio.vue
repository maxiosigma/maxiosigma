<template>
	<LayoutPage>
		<div class="flex-grow grid grid-cols-3">
			<div
				:class="[it.name, 'flex-grow flex-center']"
				v-for="(it, i) in [
					{ name: 'developer', img: '', title: 'Разработчик' },
					{ name: 'designer', img: '', title: 'Дизайнер' },
					{ name: 'entrepreneur', img: '', title: 'Предприниматель' },
				]"
				:key="i">
				<div class="text-white text-center">{{ it.title }}</div>
			</div>
		</div>
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: 'Портфолио',
		}
	},
}
</script>

<style lang="scss">
</style>