<template>
	<div :class="['flex mt-0.5 items-center']" v-if="links">
		<!-- @click="handleClickNext(link)"	
						link.items.length === 0 ? 'hidden' : '',
				i !== links.length - 1 ? 'mr-4' : '',
		 -->
		<!--<ItemNavLinks
			:counter="counter"
			:class="[{ hidden: thisID !== lastID + j + 10 }, '-' + (lastID + counter + 10)]"
			:links="link.items"
			:lastID="links.length"
			v-for="(link, j) in links"
			:key="j + counter - 1 - 5"></ItemNavLinks>-->

		<!-- 	:id="lastID + i + links.length" -->
		<!--  -->
		<div
			:class="['nav-link', link.items || link.href ? '' : 'hidden']"
			:key="lastID + i"
			v-for="(link, i) in links"
			:id="lastID + i + links.length"
			@click="handleClickNext({ link: link.href, id: lastID + i + links.length + 1 })">
			<!--  -->
			<div :class="[{ hidden: lastID !== postID }, 'nav-link-hover']"> {{ link.title }}</div>

			<!--<div class="text-6px" :class="[{ hidden: lastID !== postID }]">{{ lastID }}-{{ thisID }}-{{ postID }}</div>-->

			<!--  :id="lastID + i + links.length" -->
			<ItemNavLinks :links="link.items" :postID="postID" :id="lastID + i + links.length" :lastID="lastID + i + links.length + 1" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		links: { type: Object, required: false },
		links: { type: Array, required: false },
		lastID: { type: Number, required: false, default: 0 },
		postID: { type: Number, required: false, default: 0 },
	},
	data() {
		return {
			thisID: 0,
		}
	},
	methods: {
		handleClickNext({ id, link }) {
			console.log(id, link)

			if (link) {
				//location.href = '/' + link
				this.menuRedirect(link)
			} else {
				this.thisID = id
				this.postID = id
			}
		},
		//handleClickPrev() {},
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