<template>
	<div class="social">
		<ItemLink class="social-link group" :href="item.href" :key="index" v-for="(item, index) in links">
			<div class="social-link-container">
				<i :class="[item.icon || '', 'social-link-icon']">{{ item.title }}</i>
			</div>
		</ItemLink>
	</div>
</template>

<script>
export default {
	data() {
		return {
			links: this.$store.state.social,
		}
	},
}
</script>

<style lang="scss" scoped>
.social {
	&-link {
		@apply flex-center transition-all duration-500 pointer-events-none;

		&:nth-of-type(2n) {
			@apply group-hover:(-rotate-360);
		}
		&:nth-of-type(2n + 1) {
			@apply group-hover:(rotate-360);
		}
		&-container {
			filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.25));
			@apply border-dashed rounded-full flex-center bg-opacity-95 border-opacity-50 border-orange-500 border-4 h-16 mt-2 w-16 relative;
		}
		&-icon {
			@apply h-0 text-shadow-sm transition w-0 duration-200 absolute filter pointer-events-auto;
			@apply hover:(invert-[0.75] blur-0.25px text-shadow-md) ;
		}
	}
}
</style>