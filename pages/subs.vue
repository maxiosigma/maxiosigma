<template>
	<Layout>
		<!--<div class="subs">
			<a class="subs-back" href="/" @click.prevent="$router.go(-1) || (location.href = '/')">← Назад</a>
			<ItemNoScript />
		</div>-->
	</Layout>
</template>

<script>
export default {
	head() {
		return {
			title: 'Подписка',
			//script: [
			//	{
			//		hid: 'sps',
			//		src: 'https://web.webformscr.com/apps/fc3/build/loader.js',
			//		'sp-form-id': '92f82bda931595468aa0e45bb80616a19501e8c5859cdbeb62910883729b89bc',
			//		async: false,
			//	},
			//],
		}
	},
	mounted() {
		//localStorage.getItem('subs-push')
		//	? this.routeLight('community/programs')
		//	: localStorage.setItem('subs-push', true)
		// ANCHOR
		//document.getElementById('sp-9286be14-1cec-44f8-bff4-b1e53b0e96d3').addEventListener('click', function (e) {
		//	//	e = e || window.event
		//	//	var target = e.target || e.srcElement
		//	//	if (target.id == 'btn') alert('Клик по дочернему!')
		//})
	},
}
</script>

<style lang="scss">
.subs {
	@apply bg-white w-screen opacity-75 py-4 top-0 left-0 z-20 fixed;

	&-back {
		@apply pl-2 inline-flex items-center;
	}
}

a.sp-link {
	@apply hidden #{!important};
}

.sp-form-outer {
	@apply border-none flex-grow flex-center h-full min-h-full bg-15r bg-dark-900 bg-hero-i-like-food-chocolate-50 border-0 pt-16 inset-0 z-0 fixed overflow-x-hidden overflow-y-auto;
}

.sp-form[sp-hash='92f82bda931595468aa0e45bb80616a19501e8c5859cdbeb62910883729b89bc'] {
	min-width: 320px !important;
	width: 90% !important;
	max-width: 450px !important;
	@apply bg-white border-none max-h-full border-0 rounded-2xl mx-4 w-sm #{!important} md: w-md ;

	&>.sp-form-fields-wrapper>.sp-link-wrapper>.sp-link {
		@apply hidden #{!important};
	}

	&>div {
		@apply border-none #{!important};
	}
}
</style>