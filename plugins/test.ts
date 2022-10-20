export default defineNuxtPlugin((nuxtApp) => {
	if (process.server && !process.browser) {
		// ...
	}

	//nuxtApp.vueApp.directive("focus", {
	//	mounted(el) {
	//		el.focus();
	//	},
	//	getSSRProps(binding, vnode) {
	//		// you can provide SSR-specific props here
	//		return {};
	//	},
	//});
});
