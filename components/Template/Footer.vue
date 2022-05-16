<template>
	<footer>
		<slot>
			<div class="footer">
				<div class="footer-container">
					<!--<div class="text-xl text-light-600">Подписывайтесь на нас</div>-->
					<!-- 	hover:(text-indigo-400 text-shadow-lg) -->
					<ItemLink href="https://www.facebook.com/maxiosigma.partners" class="footer-link">
						<div class="footer-link-name">©</div> {{ $config.app.name }} <div class="mx-1 mb-1">▬</div> 2022
						<!--Партнёр для всех-->
					</ItemLink>

					<!--<LazyItemFbChat class=" "></LazyItemFbChat>-->
				</div>
			</div>
		</slot>
	</footer>
</template>

<style lang="scss">
.footer {
	//bg-cool-gray-900 bg-hero-wiggle-chocolate-30

	@apply bg-opacity-90 bg-cyan-700 bg-hero-wiggle-white-10 bg-2r w-full py-2 px-4 elevation-5;

	&-container {
		//sm:justify-between
		@apply container flex flex-wrap mx-auto justify-center items-center <sm:(flex-col ) ;
	}
	&-link {
		@apply cursor-default order-3 text-xl leading-none transition text-light-800 duration-300 inline-flex items-center sm:order-1;

		&-name {
			@apply mr-1.5 text-green-400 text-3xl;
		}
	}
	&-chat {
		@apply order-3 min-w-5 min-h-1 <sm:(order-2 my-1) ;
	}
}
</style>