<template></template>

<script>
export default {
	head() {
		return {
			title: '',
			titleTemplate: '%s',
			meta: [{ hid: 'description', name: 'description', content: '' }],
			link: [{ hid: 'og:description', property: 'og:description', content: '' }],
		}
	},
	asyncData({ redirect }) {
		//redirect('/')
		redirect('/business-info')
	},
}
</script>