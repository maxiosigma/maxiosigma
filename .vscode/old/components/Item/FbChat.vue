<template>
	<div class="hidden"></div>

	<!--<div class="fb-container">
		<div id="fb-root" class="fb-root"></div>
		<div id="fb-chat" class="fb-customerchat"> </div>
	</div>-->
</template>

<script>
export default {
	//mounted() {
	//	//try {
	//	//	this.isHttps() ? this.fbChat() : null
	//	//} catch (error) {}
	//},
	//methods: {
	//	//fbChat() {
	//	//	const chatbox = document.getElementById('fb-chat')
	//	//	chatbox.setAttribute('page_id', '103604482016781')
	//	//	chatbox.setAttribute('attribution', 'biz_inbox')
	//	//	// {{ this.$store.state.scroll }}
	//	//	window.fbAsyncInit = function () {
	//	//		FB.init({
	//	//			xfbml: true,
	//	//			version: 'v13.0',
	//	//		})
	//	//	}
	//	//	//
	//	//	;(function (d, s, id) {
	//	//		var js,
	//	//			fjs = d.getElementsByTagName(s)[0]
	//	//		if (d.getElementById(id)) return
	//	//		js = d.createElement(s)
	//	//		js.id = id
	//	//		js.src = 'https://connect.facebook.net/ru_RU/sdk/xfbml.customerchat.js'
	//	//		fjs.parentNode.insertBefore(js, fjs)
	//	//	})(document, 'script', 'facebook-jssdk')
	//	//},
	//},
}
</script>

<style lang="scss">
.fb {
	&-root {
		@apply flex;
	}
	&_dialog {
		background: transparent !important;
		@apply bg-transparent flex-center h-auto min-w-8 p-0 inset-0 z-9000 relative #{!important};

		&_content {
			@apply bg-transparent flex-center h-auto #{!important};

			& > iframe:nth-of-type(1) {
				@apply flex-center z-9000 #{!important};
			}
		}
	}
	&_iframe {
		&_widget {
			& iframe {
				@apply mb-3 #{!important};
			}
		}
	}
}
</style>