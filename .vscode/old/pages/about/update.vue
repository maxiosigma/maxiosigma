<template>
	<LayoutPage :bodyStyle="'update-bg'">
		<!--<div :class="$style.update">
			<h1 :class="$style.updateTitle">Глобальные изменения сайта</h1>

			<div :class="$style.updateContainer">
				<div :class="$style.updateItem" v-for="(item, i) in content" :key="i">
					<div :class="$style.updateItemContainer">
						<div :class="$style.updateItemText">version: {{ (item.version + 0.00001).toFixed(1) }}</div>
					</div>

					<div :class="$style.updateItemTextT">{{ item.description }}</div>
				</div>
			</div>
		</div>-->
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: 'Обновления сайта',
		}
	},
	//async asyncData({ store }) {
	//	const content = store.state.contentful.updates
	//		?.map((it) => it.fields)
	//		?.sort((a, b) => (a.version < b.version ? 1 : a.version > b.version ? -1 : 0))

	//	return { content }
	//},
	//async mounted() {
	//	const lastVersion = await this.LVU()

	//	if (localStorage.getItem('lastVersion') !== lastVersion)
	//		setTimeout(async () => {
	//			localStorage.setItem('lastVersion', lastVersion)
	//		}, 5000)
	//},
}
//data() {
//	console.log(this.$store.state.contentful)

//	const content = this.getFields(this.$store.state.contentful.updates)
//		.map((it) => (it = { version: (it.version * 1.000001).toFixed(1), description: it.description }))
//		.sort((a, b) => (a.version < b.version ? 1 : a.version > b.version ? -1 : 0))

//	return {
//		content: content,
//		lastVersion: content ? content[0].version : '0.0',
//	}
//},
</script>

<style lang="scss">
.update {
	@apply flex-grow flex-center flex-col py-20 px-4;

	&-bg {
		@apply bg-indigo-900 bg-opacity-50 bg-2r bg-hero-hexagons-water-5;
	}

	&__title {
		@apply font-black font-vetka mx-auto text-center text-white text-shadow-xl mb-20 tracking-widest text-3xl uppercase md: text-4xl ;
	}

	&__container {
		@apply container max-w-xl grid gap-y-14 sm: w-2/3 ;
	}

	&__item {
		@apply rounded-lg bg-light-400 text-sm transform px-6 pt-4 pb-3 skew-x-12 relative elevation-3 md: text-base ;

		&__container {
			@apply rounded-md bg-light-400 text-xs py-0.5 px-2 -top-2.5 left-4 absolute elevation-1;
		}

		&__text {
			@apply transform -skew-x-12;
		}

		&__text_t {
			@apply transform -skew-x-12;
		}
	}
}
</style>