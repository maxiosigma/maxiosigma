export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.directive("scroll", {
		mounted(el, binding) {
			const f = function (evt) {
				binding.value(evt, el) ? window.removeEventListener("scroll", f) : null;
			};

			window.addEventListener("scroll", f);
		},
	});
});
