<template>
	<Layout>
		<div :class="$style.links">
			<div :class="$style.linksBaseUrl">{{ domain }}</div>

			<div :class="$style.linksGroup" v-for="(group, i) in content" :key="i">
				<div :class="$style.linksGroupTitle">{{ group.title }}</div>

				<div :class="$style.linksGroupContainer">
					<div :class="$style.linksGroupLink" v-for="(item, j) in group.links" :key="j">
						<div :class="$style.linksGroupLinkTitle" v-if="item.link"> {{ item.link }} </div>

						<div :class="$style.linksGroupLinkUtms">
							<div @click="copySign(domain + '/' + ut.link)" class="group" v-for="(ut, j) in item.utm" :key="j">
								<ItemLink :href="ut.link" :class="[$style.linksGroupLinkUtm, 'group-hover:(text-green-500)']" nolang>
									{{ ut.short }}
								</ItemLink>
							</div>
						</div>
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
			title: 'Сквозные ссылки',
		}
	},
	asyncData({ store }) {
		const utm = Object?.keys(store.state.utm)

		const content = store.state.contentful.links?.reduce(
			(sum, it) =>
				sum.push({
					title: it?.fields.title,
					links: it?.fields.links?.map((field) => {
						const fields = field?.fields
						return {
							...(fields?.link && fields.link !== 'без названия' && { link: fields.link }),
							utm: it?.fields.onlyOrigin
								? [{ link: 'link/' + fields.short, short: fields.short }]
								: utm.map((ut) => {
										const short = fields.short + (ut !== 'origin' ? '_' + ut : '')
										return { link: 'link/' + short, short }
								  }),
						}
					}),
				}) && sum,
			[]
		)

		return { content }
	},
	data() {
		return {
			domain: null,
		}
	},
	mounted() {
		const isDomain =
			window.location.href?.replace(this.$route.fullPath, '') ??
			(window.location.protocol && window.location.port && window.location.hostname)

		this.domain = isDomain
			? window.location.href?.replace(this.$route.fullPath, '') ||
			  `${window.location.protocol + '://'}${window.location.hostname}${':' + window.location.port}`
			: this.$config.baseUrl
	},
}
</script>

<style lang="scss" module>
.links {
	@apply container mx-auto bg-light-900 grid grid-row-1;

	&__base {
		&_url {
			@apply text-xs -mb-2 p-4 text-dark-100;
		}
	}
	&__group {
		@apply container max-w-full px-4;

		&_title {
			@apply text-xl text-lg tracking-widest;
		}
		&_container {
			@apply grid px-1 grid-rows-1 overflow-x-auto overflow-y-hidden;
		}
		&_link {
			@apply cursor-pointer text-sm grid py-2 px-4 gap-0.5;

			&-title {
				@apply border-dashed rounded-sm border-1 border-light-500 mb-2 -ml-1 w-auto p-1 text-[10px] place-self-start;
			}
			&-utms {
				@apply flex flex-wrap;
			}
			&-utm {
				@apply text-xs p-2 pointer-events-none;
			}
		}
	}
}
</style>