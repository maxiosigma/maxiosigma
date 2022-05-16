<template>
	<LayoutPage>
		<!-- :navBarItems='[{ title: "about", href: "/about" }, { title: "aaa", href: "/" }, { title: "aaa", href: "/" }]' -->
		<!-- :navBarSubItems='[{ title: "aaa", href: "/" }, { title: "about", href: "/about" },{ title: "aaa", href: "/" }]' -->

		<div :class="[$style.about, !visual ? $style.visual : '']">
			<div :class="[$style.aboutImages, 'animate-fade-in']">
				<div class="relative">
					<LazyItemImg :class="$style.aboutImg1" class="animate-fade-in animated" src="about/person.png" />

					<div :class="$style.aboutImg2Conteiner" class="animate-fade-in-up animated">
						<LazyItemImg :class="$style.aboutImg2" class="animate-spin animated" src="about/world.jpg" />
					</div>
				</div>
			</div>

			<div :class="[$style.aboutContent, 'animate-fade-in-right']" ref="aboutContent">
				<div :class="$style.aboutContentBTitle">
					<div :class="$style.aboutContentB1">
						<p
							v-for="(item, i) in [
								{ t: ['Добро пожаловать'], c: $style.aboutContentB2 },
								{ t: ['Давай познакомимся'], c: $style.aboutContentB3 },
								{ t: ['Автор сайта', 'Автор: Максим'], c: $style.aboutContentB4 },
							]"
							:key="i">
							<client-only>
								<vue-typed-js
									:strings="item.t"
									:typeSpeed="75"
									:startDelay="$store.state.timeout - 1 + 3801 + i * 2500"
									:backSpeed="75"
									:backDelay="200"
									:loop="true"
									:loopCount="1"
									:showCursor="false">
									<span class="typing" :class="item.c"></span>
								</vue-typed-js>
							</client-only>
						</p>
					</div>

					<div :class="$style.aboutContentB">
						<div :class="$style.aboutContentB6">
							<i :class="$style.aboutContentB7" class="icon-gitter"></i>

							<div :class="$style.aboutContentB8">
								<div class="relative" :class="[item.cl]" :key="index" v-for="(item, index) in items.titles">
									{{ item.t }}
									<div v-if="item.t" :class="$style.aboutContentB9"
										><i :class="$style.aboutContentB10" class="icon-shape-zigzag"></i
									></div>
									<div v-if="!item.t" :class="$style.aboutContentB11">|</div>
								</div>
							</div>
						</div>
					</div>

					<VueSlickCarousel class="my-2 overflow-hidden" v-bind="options">
						<div :class="$style.aboutContentB">
							<div :key="index" :class="$style.aboutContentB12" v-for="(item, index) in items.abouts">
								<i :class="$style.aboutStride" class="icon-radio-checked"></i>
								{{ item }}
							</div>
						</div>

						<div :class="$style.aboutContentB">
							<div :key="index" :class="$style.aboutContentB12" v-for="(item, index) in items.commerce">
								<i :class="$style.aboutContentB13" class="icon-designmodo"></i>
								{{ item }}
							</div>
						</div>

						<div :class="$style.aboutContentB">
							<div :key="index" :class="$style.aboutContentB12" v-for="(item, index) in items.hobbies">
								<i :class="$style.aboutAffair" class="icon-smartphone-chip"></i>
								{{ item }}
							</div>
						</div>
					</VueSlickCarousel>

					<div :class="$style.aboutContentB14">
						<ItemLink :class="$style.aboutContentB15" href="link/mw" self blank nolang>
							Стать <i :class="$style.aboutContentB16" class="icon-infinity"></i> партнёром
						</ItemLink>

						<ItemLink :class="$style.aboutContentB15" href="https://t.me/maxiosigma">
							Узнать <i :class="[$style.aboutContentB18, 'icon-sm icon-euro']"></i> бизнесе
						</ItemLink>

						<ItemLink :class="[$style.aboutContentB15, $style.aboutContentB20]" href="https://t.me/maxiecon">
							Хочу экономить <i :class="[$style.aboutContentB21, 'icon-sm icon-qr']"></i> на всём
						</ItemLink>
					</div>

					<div :class="[$style.aboutContentBSocial, 'group']">
						<ItemLink :class="[item.link || '', $style.aboutLink]" :href="item.href" :key="index" v-for="(item, index) in items.links">
							<div :class="$style.aboutLinkContainer">
								<i :class="[item.icon || '', $style.aboutLinkIcon]">{{ item.title }}</i>
							</div>
						</ItemLink>
					</div>
				</div>
			</div>
		</div>

		<div :class="$style.aboutContentB19">
			<div class="flex-grow">
				<LazyItemLottie
					v-if="!isLight()"
					:speed="0.25"
					:direction="true"
					:loop="deviceType === 'pc' ? 3 : 0"
					:delay="$store.state.timeout + 500"
					animationData="about/bg.json"
					:class="$style.aboutImgLot" />

				<div v-if="isLight()" :class="$style.aboutImgLotAlt"></div>
			</div>
		</div>
	</LayoutPage>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
	head() {
		return {
			title: 'Автор',
		}
	},
	data() {
		return {
			visual: false,
			deviceType: this.$ua.deviceType(),
			items: {
				titles: [
					{ t: 'Лидер', cl: 'text-yellow-600' },
					{},
					{ t: 'Бизнесмен', cl: 'text-red-600' },
					{},
					{ t: 'Филантроп', cl: 'text-blue-600' },
				],
				abouts: ['На фрилансе с 2017 года', 'Продвигаю онлайн-бизнес', 'Прокачиваю самобренд'],
				commerce: ['Помогаю создавать онлайн-бизнес', 'Привлекаю сторонних партнёров', 'Даю виденье экономии денег'],
				hobbies: ['Занимаюсь спортом', 'Создаю продающий дизайн', 'Разрабатываю сайты и pwa'],
				links: [
					{ icon: 'font-ft text-3xl ft-vk', href: 'https://vk.com/maxiosigma', link: 'text-blue-600' },
					{ icon: 'font-ft text-2xl ft-ins', href: 'https://www.instagram.com/maxiosigma/', link: 'text-yellow-600' },
					{ icon: 'font-ft text-2xl ft-meta', href: 'https://www.facebook.com/maxiosigma', link: 'text-green-500' },
					{ icon: 'font-ft text-2xl ft-twitter', href: 'https://twitter.com/maxiosigma', link: 'text-blue-400' },
					{ icon: 'font-ft text-3xl ft-telegram', href: 'https://t.me/maxiosigma', link: 'text-indigo-500' },
					{
						icon: 'font-ft text-2xl ft-pikachu',
						href: 'https://sites.google.com/view/portfolio-maxio-sigma',
						link: 'text-yellow-500',
					},
					{ icon: 'font-ft text-4xl ft-tiktok', href: 'https://www.tiktok.com/@maxiosigma', link: 'text-gray-600' },
					{ icon: 'font-ft text-2xl ft-ameba', href: 'https://ameblo.jp/maxiosigma', link: 'text-green-500' },
					{ icon: 'font-ft text-2xl ft-zyan', href: 'https://zen.yandex.ru/user/maxiosigma', link: 'text-yellow-700' },
					{
						icon: 'font-ft text-2xl ft-youtube',
						href: 'https://www.youtube.com/channel/UC23sONwCUL2dUY7IjcR-vhg',
						link: 'text-red-500',
					},
					{ icon: 'font-ft text-xl ft-tumblr', href: 'https://www.tumblr.com/blog/maxiosigma', link: 'text-blue-500' },
					{ icon: 'font-ft text-3xl ft-ok', href: 'https://ok.ru/maxiosigma', link: 'text-yellow-600' },
				],
			},
			options: {
				fade: true,
				speed: 1200,
				autoplay: true,
				accessibility: false,
				autoplaySpeed: 6500,
				AdaptiveHeight: true,
				slidesToScroll: 1,
				slidesToShow: 1,
				verticalSwiping: false,
				pauseOnHover: false,
				draggable: false,
				swipe: false,
				touchMove: false,
				vertical: false,
				infinite: true,
				arrows: false,
				dots: false,
			},
		}
	},
	mounted() {
		setTimeout(() => {
			this.visual = true
		}, this.$store.state.timeout)

		if (this.deviceType !== 'pc')
			setTimeout(() => {
				this.$refs.aboutContent.scrollIntoView({ behavior: 'smooth', block: 'start' })
			}, this.$store.state.timeout - 1 + 4601)

		setTimeout(() => {
			localStorage.setItem('about', true)
		}, this.$store.state.timeout + 5000)

		setTimeout(() => this.routeLight(''), 600000)
	},
	components: {
		VueSlickCarousel,
	},
}
</script>

<style lang="scss" module>
.about {
	@apply container flex-center flex-grow z-10 self-center relative <lg:(flex-wrap pt-5 pb-10) ;

	&.visual {
		@apply max-w-0 w-0 overflow-hidden;
		@apply hidden #{!important};
	}
	&-content {
		@apply h-full animate-delay-3500 animated lg:(w-1/2) <lg:(flex-center w-full px-4) ;

		&-b {
			@apply grid gap-y-2 
			pointer-events-none @apply #{!important};

			&-title {
				@apply bg-white rounded-md h-full bg-opacity-95 bg-hero-bubbles-chocolate-10 w-full grid py-5 px-4 text-green-800 gap-y-4 elevation-24 lg:(max-w-470px);
			}
			&-social {
				@apply grid gap-x-3 gap-y-5 grid-cols-4 items-center justify-center sm:grid-cols-6 lg:(grid-rows-1 gap-x-2 grid-flow-col) ;
			}
			&-1 {
				@apply font-bold text-xl grid gap-y-0.5 pointer-events-none;
			}
			&-2 {
				@apply font-black text-xl tracking-wide text-green-500 uppercase;
			}
			&-3 {
				@apply text-lg text-indigo-500 text-opacity-80;
			}
			&-4 {
				@apply text-base text-yellow-700 text-opacity-60;
			}
			&-5 {
				@apply text-lg text-yellow-600;
			}
			&-6 {
				@apply flex items-center;
			}
			&-7 {
				@apply mr-2 ml-1 text-green-500;
				@apply transform scale-125 #{!important};
			}
			&-8 {
				@apply flex-nowrap font-bold text-sm text-light-100 inline-flex items-center lg:text-xl;

				& > div:nth-of-type(1) {
					@apply text-lg lg:text-xl;
				}
			}
			&-9 {
				@apply flex-center -bottom-1 left-4 absolute md:(-bottom-1.5 left-5) ;
			}
			&-10 {
				@apply opacity-50;
			}
			&-11 {
				@apply font-black mx-1 text-black opacity-50;
			}
			&-12 {
				@apply flex items-center <md:(text-sm);
			}
			&-13 {
				@apply mr-2 ml-1 text-green-500;
				@apply transform scale-90 #{!important};
			}
			&-14 {
				@apply grid gap-4 grid-cols-1 md:grid-cols-2;
			}
			&-15 {
				box-shadow: 0 0 8px 0 rgba(245, 158, 11, 0.5);
				@apply rounded-md flex-center bg-yellow-500 text-center py-2 transition text-light-300 duration-400 delay-100 hover:(bg-black);
			}
			&-16 {
				@apply mx-3 text-white icon-sm sm:mt-0.35;
			}
			&-17 {
				//@apply rounded-md flex-center bg-yellow-500 text-center py-2 transition text-light-300 duration-400 delay-100 hover:(bg-black);
			}
			&-18 {
				@apply text-white mr-1 ml-2;
			}
			&-19 {
				@apply flex h-[200%] inset-0 w-[200%] z-0 fixed overflow-hidden pointer-events-none;
			}
			&-20 {
				@apply md:col-span-2;
			}
			&-21 {
				@apply text-white mr-2 ml-2;
			}

			//&-22 { @apply ; }
			//&-23 { @apply ; }
			//&-24 { @apply ; }
			//&-25 { @apply ; }
			//&-26 { @apply ; }
			//&-27 { @apply ; }
		}
	}
	&-images {
		@apply flex-center h-full transition-all w-1/2 pointer-events-none <lg:(w-full mb-10) ;
	}
	&-img {
		&-1 {
			@apply text-shadow-xl w-96 z-0 animate-delay-1500 relative;
		}
		&-2 {
			@apply rounded-full w-50 animate-delay-8000 animate-duration-60000 elevation-5;

			&-conteiner {
				@apply right-8 -bottom-1 animate-delay-2500 absolute;
			}
		}
		&-lot {
			@apply min-h-screen min-w-screen object-center;

			&-alt {
				@apply bg-black bg-hero-bamboo-water-30 bg-2p w-full inset-0 absolute md:bg-1p;
			}
		}
	}
	&-affair {
		@apply shadow-lg mr-2.5 ml-1 min-w-4 text-indigo-600;
		@apply transform scale-80 #{!important};
	}
	&-stride {
		@apply shadow mr-2 min-w-5 text-yellow-500;
	}
	&-link {
		@apply flex-center transition duration-500 pointer-events-none;

		&:nth-of-type(2n) {
			@apply group-hover:(-rotate-360);
		}
		&:nth-of-type(2n + 1) {
			@apply group-hover:(rotate-360);
		}
		&-container {
			@apply flex-center h-7 mt-2 w-7 relative;
		}
		&-icon {
			@apply text-shadow-sm transition duration-200 filter pointer-events-auto;
			@apply hover:(invert blur-1px text-shadow-md) ;
		}
	}
}
</style>