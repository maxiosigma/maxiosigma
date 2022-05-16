<template>
	<p>Loading Prismic preview...</p>
</template>

<script>
export default {
	layout: 'empty',
	mounted() {
		this?.$prismic?.preview()
	},
}
</script>