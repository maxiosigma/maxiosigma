<template>
	<nav
		:class="[
			$style.navTop,
			$store.state.mainMenu == 1
				? 'animated animate-fade-in-down'
				: $store.state.mainMenu == -1
				? 'animated animate-fade-out-up animate-delay-1350'
				: '!hidden',
		]">
		<div
			:class="[
				$style.navTopContainer,
				{
					[$style.oddcr]: links.length % 2 == 0,
					[$style.evencr]: links.length % 2 == 1,
				},
			]">
			<div
				:class="[$style.navTopContent, i % 2 === 0 ? $style.oddct : $style.evenct, i > 1 ? $style.first : $style.other]"
				:key="i"
				v-for="(link, i) in links">
				<!--  -->
				<div
					class="group"
					:class="[
						$style.navTopLinks,
						i < 2 ? $style.top : $style.bottom,
						$store.state.mainMenu == 1
							? `animated animate-delay-${((i + 2) * 3) / 10}s ${i % 2 === 1 ? 'animate-fade-in-right' : 'animate-fade-in-left'}`
							: $store.state.mainMenu == -1
							? `animated animate-delay-${((i + 2) * 3) / 10}s ${i % 2 === 1 ? 'animate-fade-out-up' : 'animate-fade-out-down'}`
							: '',
					]">
					<div v-if="!isLight()" :class="[$style.navTopLinkImgConteiner, 'sm:group-hover:opacity-35']">
						<LazyItemImg :class="[$style.navTopLinkImg]" :src="'nav/' + link.img" :alt="'freepik'" />
					</div>

					<div
						:class="[
							$style.navTopLink,
							i % 2 === 0 ? $style.oddln : $style.evenln,
							'sm:group-hover:(text-yellow-500 text-shadow-sm)',
						]">
						<div :class="$style.navTopLinkText">{{ link.title }}</div>
					</div>

					<div
						:class="[$style.navTopSublink, i % 2 === 0 ? $style.oddsln : $style.evensln, 'sm:group-hover:opacity-100']"
						:key="j"
						v-for="(sublink, j) in link.items">
						<ItemLink :href="'/' + sublink.href" @click.native.prevent="menuRedirect(sublink.href)">
							{{ sublink.title }}
						</ItemLink>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			loop: 3,
			deviceType: this.$ua.deviceType(),
			links: this.$store.state.navigation,
		}
	},
	mounted() {
		setInterval(() => this.addLoop(), 10000)
	},
	methods: {
		addLoop() {
			this.loop += 3
		},
	},
}
</script>

<style lang="scss" module>
.nav {
	&__top {
		// bg-hero-floating-cogs-skyblue-10 Circuit Board
		@apply bg-repeat bg-black flex flex-grow h-full bg-20r bg-hero-floating-cogs-skyblue-10 w-full opacity-95 pt-16 z-9990 fixed;

		&_container {
			// <lg:pt-18
			@apply flex-grow grid gap-8 overflow-y-auto overflow-x-hidden sm:gap-5 <lg:pt-8;

			&.oddcr {
				@apply lg:grid-cols-2;
			}
			&.evencr {
				@apply lg:grid-cols-3;
			}
		}
		&_content {
			//border-dashed border-light-200 border-opacity-15 border-green-400 border-2
			@apply flex-grow flex bg-green-200 bg-opacity-10 py-4 relative overflow-hidden;
			@apply <sm:(px-4 py-32) ;
			@apply lg:py-0;
			@apply <lg:(items-center min-h-48 max-h-56 ) ;

			&.oddct {
				@apply text-center;
				@apply sm:text-right;
				@apply sm:justify-end;
				@apply <sm:flex-row;
				@apply <lg:(justify-center flex-row-reverse) ;
			}
			&.evenct {
				@apply text-center;
				@apply sm:text-left;
				@apply sm:justify-start;
				@apply <sm:flex-row-reverse;
				@apply <lg:(justify-center);
			}
			&.first {
				@apply lg:items-start;
			}
			&.other {
				@apply lg:items-end;
			}
		}
		&_animation {
			@apply h-full w-full transform pointer-events-none relative <sm:(mx-0 absolute) lg:(absolute h-full w-auto) ;

			&.oddan {
				@apply sm:left-0;
			}
			&.evenan {
				@apply sm:right-0;
			}
		}
		&_links {
			@apply bg-black flex bg-opacity-20 min-w-1/3 overflow-hidden relative;
			@apply md:(min-w-2/3 absolute rounded-sm min-h-2/3) ;
			@apply sm:(bg-black bg-opacity-0 px-5) ;
			@apply <sm:(w-full);

			&:nth-last-of-type(),
			&:nth-of-type(1),
			&:nth-child(1) {
				@apply rounded-tr-xl;
			}

			&.top {
				@apply flex-col pt-10 pb-3 <sm:py-4 lg:flex-col-reverse <lg:py-2;
			}
			&.bottom {
				@apply flex-col pt-3 pb-10 <sm:py-4 <lg:py-2;
			}
		}
		&_link {
			@apply flex my-1 text-lg items-center relative <sm:(justify-center);
			@apply sm:(text-white text-shadow-xl uppercase transition duration-700) ;
			@apply <sm:(mb-1 text-yellow-500) ;

			&.oddln {
				@apply sm:(justify-end);
			}
			&.evenln {
				@apply sm:(justify-start);
			}

			&-text {
				@apply font-black text-2xl pointer-events-none;
			}

			&-img {
				@apply h-full object-center object-cover w-full;

				&-conteiner {
					@apply opacity-100 inset-0 transition z-0 duration-1000 overflow-hidden absolute;
				}
			}
		}
		&_sublink {
			@apply flex font-bold my-0.5 text-base text-shadow-sm tracking-wider items-center relative;
			@apply sm:(text-light-200 transition duration-500 opacity-0) ;
			@apply <sm:(justify-center py-1 text-green-100) ;
			@apply hover:(text-yellow-400);

			&:not(:first-child):not(:last-child) {
				@apply <sm:(border-b-2 border-yellow-600) ;
			}
			&.oddsln {
				@apply sm:justify-end;
			}
			&.evensln {
				@apply sm:justify-start;
			}
		}
	}
}

//<!--<LazyItemLottie
//	v-if="!isLight()"
//	:speed="or(i, 2) ? 0.25 : or(i, 3) ? 1.0 : 0.5"
//	:animationData="'nav/' + link.anime"
//	:delay="i * 1000 + 1500"
//	:loop="deviceType === 'pc' ? 1 : 0"
//	:class="[$style.navTopAnimation, link.animeClass, i % 2 === 0 ? $style.oddan : $style.evenan]"
//	target />

//<LazyItemImg
//	v-if="isLight()"
//	class="object-contain"
//	:class="[$style.navTopAnimation, i % 2 === 0 ? $style.oddan : $style.evenan]"
//	:src="'nav/' + link.anime_alt"
//	:alt="'freepik'" />-->
</style>
