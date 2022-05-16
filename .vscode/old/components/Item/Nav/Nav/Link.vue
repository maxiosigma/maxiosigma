<template>
	<div
		:class="['nav-link', link.items || link.href ? '' : 'hidden']"
		@click="handleClickNext({ link: link.href, count: count + 1, id: lastID + i + links.length })">
		<div :class="[{ hidden: lastID !== thisID }, 'nav-link-hover']">{{ link.title }}</div>

		<div class="text-6px" :class="[{ hidden: lastID !== thisID }]">
			{{ lastID + i + links.length }}-{{ lastID }}-{{ thisID }}-{{ count }}-{{ thisCount }}
		</div>
	</div>
</template>

<script>
export default {
	//props: []
	data() {
		return {}
	},
	methods: {
		handleClickNext() {},
	},
}
</script>

<style lang="scss">
.nav-link {
	@apply cursor-pointer font-medium text-sm text-shadow-md tracking-wide uppercase;

	&-hover {
		@apply transition-all duration-500 hover:(text-yellow-300 tracking-widest text-shadow-lg);
	}

	&:nth-of-type(n + 1) {
		@apply mr-4;
	}
}
</style>