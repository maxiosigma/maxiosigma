<template>
	<!-- :bodyStyle="'policy-bg'" -->
	<LayoutPage>
		<!--<div :class="$style.policy">
			<div :class="$style.policyContainer">
				<h1 :class="$style.policyTitle">{{ title }}</h1>
				<p :class="$style.policyDescription">{{ description }}</p>

				<nuxt-content :class="$style.policyContent" :document="page" />
			</div>
		</div>-->
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: this.title,
			description: this.description,
		}
	},
	data() {
		return {
			title: 'Политика конфиденциальности',
			description: 'Политика конфиденциальности и Условия использования',
		}
	},
	//async asyncData({ $content, params, error }) {
	//	const page = await $content('pages/policy')
	//		?.fetch()
	//		?.catch((err) => {
	//			error({ statusCode: 404, message: 'Page not found' })
	//		})

	//	return {
	//		page,
	//	}
	//},
}
</script>

<style lang="scss">
.policy {
	@apply flex-grow flex-center;

	&-bg {
		//@apply bg-light-500;
		@apply bg-green-900;
	}

	&-container {
		@apply rounded-lg mt-20 mb-10 max-w-3xl grid py-10 px-20 px-4 gap-y-5 prose prose-sm sm: prose lg:my-20 lg:prose-lg xl:prose-2xl 2xl:items-center ;

		& > h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			@apply text-indigo-900 #{!important};
		}
	}

	&-title {
		@apply font-black text-center tracking-wider uppercase;
	}

	&-description {
		@apply font-light my-2 text-center tracking-widest px-4;
	}

	&-content {
		@apply mx-auto text-dark-900 #{!important};
	}
}
</style>