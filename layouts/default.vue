<template>
	<div class="lang">
		<AppHeader />
		<slot />
		<AppFooter />
	</div>
</template>

<script setup></script>

<style lang="scss">
	.lang {
		&-ru {
			color: red;
		}
	}
</style>
