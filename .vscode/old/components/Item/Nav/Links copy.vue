<template>
	<div :class="['flex mt-0.5 items-center']" :count="count" v-if="links">
		<div
			:class="['nav-link', link.items || link.href ? '' : 'hidden']"
			:key="lastID + i"
			v-for="(link, i) in links"
			@click="handleClickNext({ link: link.href, count: count + 1, id: lastID + i + links.length })">
			<div :class="[{ hidden: lastID !== thisID }, 'nav-link-hover']">{{ link.title }}</div>

			<div class="text-6px" :class="[{ hidden: lastID !== thisID }]">
				{{ lastID + i + links.length }}-{{ lastID }}-{{ thisID }}-{{ count }}-{{ thisCount }}
			</div>
		</div>

		<!--<ItemNavLinks
			:count="count + 1"
			:links="link.items"
			:key="lastID + i"
			v-for="(link, i) in links"
			:lastID="lastID + i + links.length + 1" />-->
	</div>
</template>

<script>
export default {
	//props: {
	//	links: { type: Object, required: false },
	//	links: { type: Array, required: false },
	//	lastID: { type: Number, required: false, default: 0 },
	//	count: { type: Number, required: false, default: 0 },
	//	thisID: { type: Number, required: false, default: 0 },
	//	thisCount: { type: Number, required: false, default: 0 },
	//},
	data() {
		return {
			//thisID: 0,
		}
	},
	methods: {
		//handleClickNext({ id, count, link }) {
		//	if (link) {
		//		//location.href = '/' + link
		//		//this.menuRedirect(link)
		//	} else {
		//		//this.thisID = id
		//		//this.thisCount = count
		//		//this.$emit('emtcount', count)
		//		//this.$emit('emtid', id)
		//		//console.log(this.thisID, id, count, link)
		//	}
		//},
	},
}
</script>

<style lang="scss">
.nav-link {
	@apply cursor-pointer font-medium text-sm text-shadow-md tracking-wide uppercase;

	&-hover {
		@apply transition-all duration-500 hover:(text-yellow-300 tracking-widest text-shadow-lg) ;
	}

	&:nth-of-type(n + 1) {
		@apply mr-4;
	}
}
</style>