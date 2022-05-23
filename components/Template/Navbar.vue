<template>
	<div v-scroll="getScroll" class="nav-bar">
		<div :class="['nav-bar-cont', scroll ? 'cont-scroll' : '']">
			<div class="nav-bar-cont-main justify-around sm:justify-between">
				<!-- @click="$store.commit('checkMenu')" -->
				<div class="nav-bar-menu relative">
					<!-- absolute -->
					<div class="flex-center nav-bar-logo group">
						<div :class="['nav-bar-logo-cont mb-0.5', { 'scroll-logo-cont': scroll }]">
							<LazyItemImgBg
								class="bg-contain bg-center h-7 w-7 duration-3000 animate-duration-3000 group-hover:(animate-spin)"
								src="icons/logo.svg" />
						</div>

						<div class="font-black text-shadow-md text-lg leading-none ml-1.5 tracking-3px pointer-events-none sm:text-xl">{{
							$config.app.name
						}}</div>
					</div>
				</div>

				<div class="nav-bar-cont-text">
					<div :class="['nav-bar-cont-arrow', { hidden: test === null }]" @click="handleClickPrev()">←</div>

					<div
						:class="['nav-bar-link group', { hidden: link.dept !== activeDept }, test !== null ? { hidden: test !== link.index } : '']"
						:key="i"
						v-for="(link, i) in links"
						@click="handleClickNext(link.dept + link.index + link.position - 1, link.href, isRoute === link.href)">
						<div
							class="nav-bar-link-hover"
							:class="{ 'border-b-2 border-b-yellow-500': isRoute === link.href || isRoute === link.href + '/' }"
							>{{ link.title }}</div
						>
					</div>
				</div>
			</div>
		</div>

		<div
			v-if="crumbs.length > 1"
			:class="['nav-bar-crumbs', scroll ? crumbScroll : '', $store.state.mainMenu == 1 ? crumbScroll : '']">
			<div class="nav-bar-crumbs-container">
				<span class="group" v-for="(crumb, i) in crumbs" :key="i">
					<ItemLink v-if="i !== crumbs.length - 1" class="nav-bar-crumbs-link" :href="'/' + crumb.l">{{ crumb.t }}</ItemLink>
					<span class="nav-bar-crumbs-title" v-if="i === crumbs.length - 1">{{ crumb.t }}</span>
					<span class="nav-bar-crumbs-delimetr" v-if="i !== crumbs.length - 1">/</span>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['openMenu', 'items', 'subitems'],
	data() {
		return {
			openSubMenu: false,
			openSubMenuCount: 0,
			crumbs: this.getCrumbs(),
			links: this.$store.state.navigation.links?.reduce((sum, item, i) => {
				sum.push(...this.recurseObj(item, i + 1, i + 1, i))
				return sum
			}, []),
			isRoute: this.$route.fullPath?.replace(this?.localePath('/') + '/', ''),
			scroll: false,
			activeDept: 1,
			test: null,
			activeTests: [],
		}
	},
	mounted() {
		//console.log(this.activeTests)
	},
	methods: {
		handleClickNext(value, link, isClick) {
			if (link) {
				isClick ? null : this.menuRedirect(link)
			} else {
				this.activeDept++
				this.test = value
				this.activeTests.push(value)
			}
		},
		handleClickPrev() {
			if (this.activeDept === 2) {
				this.activeDept--
				this.test = null
			} else {
				this.activeDept--
				this.activeTests.pop()
				this.test = this.activeTests[this.activeTests.length - 1]
			}
		},
		getObj(item, index, position, iteration, dept = 1) {
			return { title: item?.title, ...(item.href && { href: item.href }), index, position, iteration, dept }
		},
		recurseObj(item, index, position, iteration, dept = 1, result = []) {
			if (item?.items)
				item?.items?.forEach((it, j) => this.recurseObj(it, position + dept + index - 1, position + j, iteration, dept + 1, result))

			result.push(this.getObj(item, index, position, iteration, dept))

			return result
		},
		getCrumbs() {
			const fullPath = this.$route.fullPath,
				params = fullPath
					.replace('/' + this.$i18n.locale, '')
					.replace('/amp', '')
					.substring(1)
					.split('/')
					.filter((it) => it !== ''),
				crumbs = []

			params.reduce((sum, it, i) => {
				sum += it + '/'
				crumbs.push({ l: sum, t: this.ucFirst(it) })
				return sum
			}, '')

			return crumbs
		},
		getScroll() {
			const bodyHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.body.clientHeight)
			const scrollHeight = document.documentElement.clientHeight + window.scrollY

			//const dialog = document.querySelector('.fb_dialog_content > iframe:nth-of-type(1)')

			//console.log(dialog)

			if (window.scrollY < 100) {
				this.scroll = false
				this.$store.commit('checkScroll', 0)

				//dialog?.classList.remove('!static')
			}

			if (window.scrollY >= 100) {
				this.scroll = true
				this.$store.commit('checkScroll', 1)

				//dialog?.classList.remove('!static')
			}

			//console.log(bodyHeight - scrollHeight, bodyHeight * (2 / 3), scrollHeight)

			//if (window.scrollY >= 100 && bodyHeight - scrollHeight <= bodyHeight * (1 / 3)) {
			//	//dialog?.classList.add('!static')
			//}

			if (window.scrollY >= 100 && bodyHeight - scrollHeight <= 100) {
				this.scroll = false
				this.$store.commit('checkScroll', 2)

				//dialog?.classList.remove('!static')
				//dialog?.classList.add('!static')
			}
		},
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
				font-family: 'Wind CTT';
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