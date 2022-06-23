<template>
	<div v-scroll="getScroll" class="nav-bar">
		<div :class="['nav-bar-cont', scroll ? 'cont-scroll' : '']">
			<div class="nav-bar-cont-main justify-around sm:justify-between">
				<div class="nav-bar-menu relative">
					<div class="flex-center nav-bar-logo group">
						<div :class="['nav-bar-logo-cont mb-0.5', { 'scroll-logo-cont': scroll }]">
							<LazyItemImgBg
								class="bg-contain bg-center h-7 w-7 duration-3000 animate-duration-3000 group-hover:(animate-spin)"
								src="/logo.svg" />
						</div>

						<div class="font-black text-shadow-md text-lg leading-none ml-1.5 tracking-3px pointer-events-none sm:text-xl">{{
							$config.app.name
						}}</div>
					</div>
				</div>

				<div class="nav-bar-cont-text">
					<div :class="['nav-bar-cont-arrow', { hidden: parent.title === undefined }]" @click="handleClickPrev()">←</div>

					<div
						:class="[
							'nav-bar-link group',
							link.parent && parent ? { hidden: link.parent.title !== parent.title } : { hidden: link.parent !== parent.title },
							link.class,
						]"
						:key="i"
						v-for="(link, i) in links"
						@click="handleClickNext({ parent: { title: link.title, order: link.order }, target: link.target, url: link.url })">
						<div class="nav-bar-link-hover" :class="[{ 'border-b-2 border-b-yellow-500': isActive(link.title) }, link.class]">
							{{ link.title }}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--<div
			v-if="crumbs.length > 1"
			:class="['nav-bar-crumbs', scroll ? crumbScroll : '', $store.state.mainMenu == 1 ? crumbScroll : '']">
			<div class="nav-bar-crumbs-container">
				<span class="group" v-for="(crumb, i) in crumbs" :key="i">
					<ItemLink v-if="i !== crumbs.length - 1" class="nav-bar-crumbs-link" :href="'/' + crumb.l">{{ crumb.t }}</ItemLink>
					<span class="nav-bar-crumbs-title" v-if="i === crumbs.length - 1">{{ crumb.t }}</span>
					<span class="nav-bar-crumbs-delimetr" v-if="i !== crumbs.length - 1">/</span>
				</span>
			</div>
		</div>-->
	</div>
</template>

<script>
export default {
	props: ['openMenu', 'items', 'subitems'],
	data() {
		return {
			menu: [],
			links: [],
			//crumbs: this.getCrumbs(),
			isRoute: this.$route.fullPath?.replace(this?.localePath('/') + '/', '').replace('/' + this.loke() + '/', ''),
			parent: { title: undefined, order: undefined },
			scroll: false,
			active: [],
		}
	},
	async fetch() {
		if (process.server)
			try {
				const menus = this.$store.state.gql.menu
				const data = (
					await this.$strapi.graphql({
						query: menus,
					})
				).menusMenus.data[0].attributes.items.data
					.map((it) => it.attributes)
					.map((it) => {
						return {
							url: it.url?.split('?')?.[0],
							title: it.title,
							order: it.order,
							target: it.target,
							parent: it.parent.data?.attributes,
							...it.url
								?.split('?')?.[1]
								?.split('&')
								?.reduce((s, it) => {
									s = {
										...s,
										[it.split('=')[0]]: it.split('=')[1],
									}
									return s
								}, {}),
						}
					})

				this.links = data
			} catch (error) {
				console.error(JSON.stringify(error, undefined, 2))
			}
	},
	//fetchOnServer: true,
	async mounted() {
		this.menu = this.links
		this.getActive()
		//console.log(this.links)
		//this.refresh()
	},
	methods: {
		//refresh() {
		//	//this.$fetch()
		//},
		isActive(arg) {
			//console.log(arg)
			return this.active?.indexOf(arg) !== -1
		},
		getActive(arg = undefined) {
			if (!arg) {
				arg = this.links?.filter((it) => it.url.indexOf(this.isRoute) !== -1)[0]
				this.active.push(arg?.title)
			} else {
				arg = this.links?.filter((it) => it.title === arg)[0]
			}

			const title = arg?.parent?.title || arg?.parent?.data?.attributes?.title

			if (title) {
				this.active.push(title)
				this.getActive(title)
			}
		},
		handleClickNext({ parent = undefined, url = undefined, target = undefined }) {
			url
				? !this.isLink(url)
					? target === 'blank'
						? window.open(url)
						: (location.href = '/' + this.$i18n.locale + url)
					: null
				: (this.parent = parent)
		},
		handleClickPrev() {
			const next = this.menu?.filter((it) => it.order === this.parent.order && it.title === this.parent.title)?.[0]
			this.parent = { title: next.parent?.title, order: next.parent?.order }
		},
		//getCrumbs() {
		//	const fullPath = this.$route.fullPath,
		//		params = fullPath
		//			.replace('/' + this.$i18n.locale, '')
		//			.replace('/amp', '')
		//			.substring(1)
		//			.split('/')
		//			.filter((it) => it !== ''),
		//		crumbs = []

		//	params.reduce((sum, it, i) => {
		//		sum += it + '/'
		//		crumbs.push({ l: sum, t: this.ucFirst(it) })
		//		return sum
		//	}, '')

		//	return crumbs
		//},
		getScroll() {
			const bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight)
			const scrollHeight = document.documentElement.clientHeight + window.scrollY

			if (window.scrollY < 100) {
				this.scroll = false
				this.$store.commit('checkScroll', 0)
			}

			if (window.scrollY >= 100) {
				this.scroll = true
				this.$store.commit('checkScroll', 1)
			}

			if (window.scrollY >= 100 && bodyHeight - scrollHeight <= 100) {
				this.scroll = false
				this.$store.commit('checkScroll', 2)
			}
		},
		isLink(url) {
			return this.isRoute === url || this.isRoute === url + '/' || '/' + this.isRoute === url
		},
		//async getMenu() {
		//	const menu = this.$store.state.gql.menu

		//	const data = (
		//		await this.$strapi.graphql({
		//			query: menu,
		//		})
		//	).menusMenus.data[0].attributes.items.data
		//		.map((it) => it.attributes)
		//		.map((it) => {
		//			return {
		//				url: it.url?.split('?')?.[0],
		//				title: it.title,
		//				order: it.order,
		//				target: it.target,
		//				parent: it.parent.data?.attributes,
		//				...it.url
		//					?.split('?')?.[1]
		//					?.split('&')
		//					?.reduce((s, it) => {
		//						s = {
		//							...s,
		//							[it.split('=')[0]]: it.split('=')[1],
		//						}
		//						return s
		//					}, {}),
		//			}
		//		})

		//	return data
		//},
	},
}
</script>

<style lang="scss">
.nav {
	&-bar {
		@apply flex-center flex-col h-auto text-white w-full py-0 z-9999 fixed;

		&-cont {
			@apply bg-repeat flex-center bg-cyan-700 bg-hero-wiggle-white-10 bg-2r h-12 mb-1.5 min-h-10 w-full opacity-100 px-4 transition-all duration-800 sm:h-16;

			&.cont-scroll {
				@apply h-6 mb-0 opacity-75 py-2 sm:h-10;
			}

			&-main {
				@apply container flex items-center justify-between;
			}

			&-text {
				@apply flex max-w-full mt-0.5 ml-1 px-1 overflow-hidden items-center;
			}
			&-arrow {
				$forever-and-ever: -1;
				@apply cursor-pointer text-lg text-shadow-md transition-all duration-300 md:(mb-1 mr-2.5) <md:(order-last ml-2.5 mt-0.5 transform rotate-180) hover:(text-yellow-300 tracking-3px text-shadow-lg) ;
			}
		}

		&-link {
			// <sm:flex-1
			@apply cursor-pointer text-shadow-md tracking-wider transition-all text-[10px] duration-300 uppercase overflow-hidden sm:(text-xs tracking-wide) hover:(overflow-visible) ;

			&-hover {
				//font-family: 'Wind CTT';

				@apply my-auto min-w-3 py-1 transition-all duration-500 truncate pointer-events-none group-hover:(text-yellow-300 max-w-none tracking-widest overflow-clip overflow-visible text-shadow-lg) ;
			}

			&:nth-of-type(n + 1) {
				@apply mr-1.5 sm: mr-2.5 ;
			}
		}

		&-crumbs {
			@apply flex-center bg-opacity-90 bg-cyan-700 bg-hero-wiggle-white-10 bg-2r w-full opacity-100 transition-all duration-800 delay-200 overflow-hidden;

			&.crumb-scroll {
				@apply mb-5 opacity-0;
			}

			&-container {
				@apply container text-sm py-2 px-4 lg:text-xs lg:py-1;
			}

			&-link {
				@apply transition-all duration-500 group-hover:(text-yellow-300 tracking-wider) ;
			}

			&-title {
				@apply text-cyan-200 pointer-events-none;
			}

			&-delimetr {
				@apply mr-2 ml-1 pointer-events-none;
			}
		}

		&-dropdown {
			@apply grid grid-flow-col gap-2 grid-rows-1 items-center;

			&-cont {
				@apply text-sm text-center min-w-24 grid top-50px gap-y-1 absolute;
			}

			&-icon {
				@apply cursor-pointer text-current transition text-light-200 duration-300 icon-md hover:(text-black text-shadow-lg) ;
			}

			&-links {
				@apply mr-5 grid grid-flow-col gap-x-4 grid-rows-1;
			}

			&-link {
				@apply font-semibold transition text-light-200 duration-300 hover:(text-black);

				&.exact {
					@apply text-stroke-1 text-stroke-light-300;
				}
			}

			&-sublinks {
				@apply flex relative justify-end;
			}

			&-sublink {
				@apply cursor-pointer bg-orange-600 border-1 border-opacity-0 border-orange-600 shadow-md p-0.5 transition-all shadow-orange-600 text-light-200 duration-300;
				@apply hover:(bg-light-200 text-black border-opacity-25 rounded) ;

				&.exact {
					@apply text-stroke-1 text-stroke-light-300;
				}
			}
		}

		&-menu {
			// cursor-pointer
			@apply flex flex-grow items-center justify-between;

			&-text {
				@apply font-thin mt-0.75 text-lg tracking-wide uppercase pointer-events-none;
			}
		}

		&-logo {
			// pointer-events-none
			@apply transition-all duration-2000;

			&-cont {
				@apply rounded-full flex-center h-6 transition-all w-6 duration-500 relative filter drop-shadow-md sm: h-8 sm:w-8 ;
			}

			&-img {
				@apply h-full w-full;
			}
		}

		&-btn {
			@apply flex-center mx-3 transition-all w-6 duration-500 pointer-events-none;
		}

		&-icon {
			&-menu {
				@apply max-w-full text-white transition-all duration-500 icon-md pointer-events-none;
			}

			&-hotdog {
				@apply max-w-0 transition-all text-yellow-200 duration-500 icon-md overflow-hidden pointer-events-none;
			}
		}
	}
}

.scroll {
	&-logo-cont {
		@apply h-6 w-6 #{!important};
	}

	&-bar-btn {
		@apply mx-1 #{!important};
	}

	&-icon {
		&-menu,
		&-hotdog {
			@apply icon-sm #{!important};
		}
	}

	&-menu-text {
		@apply text-sm;
	}
}
</style>