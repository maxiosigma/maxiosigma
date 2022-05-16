<template>
	<LayoutPage :bodyStyle="$style.articleBg">
		<div :class="[$style.article]">
			<div :class="[$style.articleContainer]">
				<h1 v-if="title" :class="[$style.articleTitle]">{{ title }}</h1>
				<div v-if="description" :class="[$style.articleDescription]">{{ description }}</div>

				<div :class="$style.articleContent" v-html="$md.render(content)"></div>

				<div v-if="createdAt && updatedAt" :class="[$style.articleEnd]">
					<div :class="[$style.articleCreate]">
						<div class="text-xs uppercase">Создано</div>
						<div>{{ formatDate(createdAt) }}</div>
					</div>

					<div :class="[$style.articleUpdate]">
						<div class="text-xs uppercase">Обновлено</div>
						<div>{{ formatDate(updatedAt) }}</div>
					</div>
				</div>

				<ItemLink :class="[$style.articleBack]" href="blog"> Обратно к блогу </ItemLink>
			</div>
		</div>
	</LayoutPage>
</template>

<script>
export default {
	head() {
		return {
			title: this.title,
			description: this.description,
			autor: this.autor,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		}
	},
	async asyncData({ store, params }) {
		const post = params.post
		const article = store.state.contentful.articles?.filter((article) => article.fields.slug === post)[0]
		const fields = article.fields
		const sys = article.sys

		return {
			title: fields.title,
			autor: fields.autor,
			description: fields.description,
			content: fields.body,
			createdAt: fields.date,
			updatedAt: sys.updatedAt,
		}
	},
}
</script>

<style lang="scss" module>
.article {
	@apply flex-center flex-grow w-full relative overflow-y-auto overflow-x-hidden;

	&__content {
		& h2,
		h3,
		h4,
		h5,
		h6 {
			@apply text-gray-400 #{!important};
		}
		& strong {
			@apply text-current #{!important};
		}
		& ol {
			& li {
				&:before {
					@apply text-yellow-500 #{!important};
				}
			}
		}
		& ul {
			& li {
				&:before {
					@apply bg-yellow-500  #{!important};
				}
			}
		}
		& table {
			@apply border-dashed mx-auto max-w-xs border-1 border-blue-500 my-6 min-w-0 w-auto p-5 overflow-y-hidden block overflow-x-auto sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl;

			& thead,
			tbody {
				@apply max-w-xs w-full overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl;

				& tr {
					@apply max-w-xs w-full overflow-hidden sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl;
				}
			}

			& thead {
				@apply text-current #{!important};
			}
		}
		& hr {
			box-shadow: #ffff009c 0px 0px 8px 0px;
			@apply rounded-lg bg-orange-600 bg-opacity-85 h-1.5;
			@apply my-4 #{!important};
		}
		& blockquote {
			@apply border-l-blue-500 border-l-8 #{!important};

			& p {
				@apply text-fuchsia-200 indent-0px;
			}
		}
		& p {
			@apply my-5 indent-xl hyphens-auto;

			&:first-line {
				@apply text-green-400;
			}
			&:first-letter {
				@apply text-yellow-500;
			}
		}
		& a {
			@apply text-blue-400 #{!important};
		}
		& img {
			box-shadow: #ffff0023 0px 0px 200px 0px;
			@apply rounded-lg object-center object-contain w-full;
		}
	}
	&__bg {
		//@apply bg-repeat bg-5p bg-opacity-50 bg-hero-aztec-water-20 lg:(bg-2p bg-hero-flipped-diamonds-10) ;
		@apply bg-repeat bg-5p bg-opacity-50 bg-hero-flipped-diamonds-10 sm:bg-4p lg:bg-2p;
	}
	&__container {
		@apply rounded-2xl mt-5 mb-5 grid py-5 px-5 px-4 text-fuchsia-200 gap-y-5 prose-sm sm:(text-fuchsia-200 prose) lg:my-10 lg:prose-lg xl:prose-2xl 2xl:items-center ;
	}
	&__title,
	& h1 {
		@apply font-black font-vetka text-center text-cyan-400 tracking-15px break-words uppercase;
		@apply mt-5 mb-2 sm:text-7xl <sm:text-3xl #{!important};
	}
	&__description {
		@apply font-light my-0 text-center tracking-wider px-4 text-yellow-400;
	}
	&__body {
		@apply mx-auto max-w-3xl select-none;
	}
	&__end {
		@apply mt-4 text-sm mb-6 grid grid-flow-col-dense gap-4 grid-rows-1 justify-center sm:text-base;
	}
	&__create {
		@apply divide-light-200 divide-y-2 text-right grid justify-end;
	}
	&__delimiter {
		@apply text-center grid justify-center;
	}
	&__update {
		@apply divide-light-200 divide-y-2 text-left grid justify-start;
	}
	&__back {
		@apply rounded-md cursor-pointer bg-light-200 text-sm py-2 px-4 transition text-green-500 duration-500 uppercase place-self-center hover:(text-yellow-400);
	}
	& img {
		@apply my-2 #{!important};
	}
	& p {
		@apply text-justify;
	}
	& ul {
		@apply text-justify;
	}
}
</style>