<template>
	<div class="flex-center h-screen w-screen">
		<nuxt-link to="/test/transition_1">На первую</nuxt-link>
	</div>
</template>

<script>
export default {
	transition: {
		name: 'page',
		mode: 'out-in',
		afterLeave(el) {
			//console.log('afterLeave', el)
		},
	},
}
</script>