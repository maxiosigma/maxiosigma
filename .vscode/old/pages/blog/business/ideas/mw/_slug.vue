<template>
	<!-- http://localhost:3000/blog/business-ideas/mw/start30k?back=https://t.me/joinchat/aG69dTjXNgxmZWYy -->
	<!-- http://localhost:3000/blog/business-ideas/mw/start30k?back=https://t.me/maxiocash -->
	<!-- http://localhost:3000/blog/business-ideas/mw/start30k?back=https://t.me/maxiocash&autor=Боря -->

	<div class="bg-black bg-repeat flex-center h-full min-h-screen bg-hero-aztec-water-50 bg-0.25r w-full relative overflow-y-auto overflow-x-hidden lg:bg-hero-texture-water-50">
		<div class="opacity-85 top-5 left-5 absolute">
			<client-only>
				<a class="cursor-pointer text-xs text-green-500 uppercase hover:(text-yellow-400)" :href="$route.query.back || $router.back()">← Обратно</a>
			</client-only>
		</div>

		<div class="mt-20 mb-10 grid px-4 text-light-200 gap-y-5 prose prose-sm 2x:items-center sm:prose lg:my-20 lg:prose-lg xl:prose-2xl">
			<h1 class="font-black text-center tracking-wider uppercase">{{ article.title }}</h1>
			<p class="font-light my-2 text-center tracking-widest px-4 text-yellow-400">{{ article.description }}</p>

			<nuxt-content class="mx-auto max-w-xl" :document="article" />

			<div class="flex mt-5 text-sm justify-center sm:text-base">
				<div class="text-right grid justify-end">
					<div>Создано</div>
					<div>{{ formatDate(article.createdAt) }}</div>
					<div>Автор</div>
				</div>

				<div class="mx-2 text-center grid justify-center">
					<div>|</div>
					<div>|</div>
					<div>|</div>
				</div>

				<div class="text-left grid justify-left">
					<div>Обновлено</div>
					<div>{{ formatDate(article.updatedAt) }}</div>
					<client-only>
						<div :class="{ hidden: !$route.query.autor }">{{ $route.query.autor }}</div>
						<a :class="{ hidden: $route.query.autor }" target="_blank" class="text-indigo-500 hover:text-yellow-500" href="/about">Максим</a>
					</client-only>
				</div>
			</div>

			<client-only
				><a
					class="rounded-md cursor-pointer bg-light-200 text-sm py-0.5 px-4 transition text-green-500 duration-500 uppercase place-self-center hover:(text-yellow-400)"
					:href="$route.query.back || $router.back()"
					>Обратно</a
				>
			</client-only>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: this.article.title,
			description: this.article.description,
			autor: this.autor,
		}
	},
	async asyncData({ $content, params, error }) {
		const slug = params.slug || 'index'
		const article = await $content('blog/business/ideas/mw', slug)
			.where({ public: true })
			.fetch()
			.catch((err) => {
				error({ statusCode: 404, message: 'Page not found' })
			})

		return {
			article,
		}
	},
	methods: {
		formatDate(date) {
			const options = { year: 'numeric', month: 'long', day: 'numeric' }
			return new Date(date).toLocaleDateString('ru', options)
		},
	},
}
//.without(['body'])
</script>

<style lang="scss">
.nuxt-content {
	@apply grid gap-y-4;

	& > p {
		@apply px-2;
	}

	& > * > a {
		@apply text-indigo-500 #{!important};

		&:hover {
			@apply text-yellow-500;
		}
	}

	& > h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply text-center;
	}
}
</style>