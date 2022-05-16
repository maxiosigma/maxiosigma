import Vue from "vue";
import ScrollReveal from "scrollreveal";

const sr = ScrollReveal();

Vue.directive("scroll-reveal", {
	inserted(el, binding) {
		const options = binding.value || {};
		console.log(options);
		sr.reveal(el.childNodes, { container: document.body, reset: true }, options.sequenceDelay);
	},
});
