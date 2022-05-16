import Vue from "vue";
import VueScrollReveal from "vue-scroll-reveal";

// console.log(document.querySelector(".wrapper"));

Vue.use(VueScrollReveal, {
	mobile: false,
	tablet: false,
	desktop: false,

	class: "scroll-reveal",
	distance: "0px",
	duration: 800,

	container: document.documentElement,

	// container: document.querySelectorAll(".html, .body, #app, #__layout, .wrapper, .section-bottom-container-right"),
	// container: document.querySelector(".wrapper"),
	// container: document.querySelector(".wrapper"),
	// container: document.getElementById("__layout"),

	// container: document.body,
	// container: document.getElementsByClassName(".wrapper"),
	// container: document.querySelector("#__layout"),
	// container: document.querySelector(".body"),
	// container: document.documentElement,
	// interval: 500,
	scale: 1,
	origin: "bottom",
	cleanup: false,
	// cleanup: true,
	useDelay: "always",
	// viewOffset: {
	// 	top: -5,
	// 	right: -5,
	// 	bottom: -5,
	// 	left: -5,
	// },

	// viewOffset: {
	// 	top: 50,
	// 	right: 50,
	// 	bottom: 50,
	// 	left: 50,
	// },
	// useDelay: "onload",
	// afterReset: function(el) {},
	// afterReveal: function(el) {},
	// beforeReset: function(el) {},
	// beforeReveal: function(el) {},
});

// export default () => {
// 	Vue.use(VueScrollReveal, {
// 		scale: 1,
// 		opacity: 0,
// 		delay: 1000,
// 		interval: 500,
// 		duration: 800,
// 		mobile: false,
// 		distance: "0px",
// 		class: "v-scroll-reveal",
// 		viewOffset: {
// 			top: 50,
// 			right: 50,
// 			bottom: 50,
// 			left: 50,
// 		},
// 	});
// };

// import ScrollReveal from "scrollreveal";

// // if (document.querySelector(".wrapper").dataset.anime == "true") {
// // }

// const sr = ScrollReveal({
// 	duration: 800,
// 	delay: 600,
// 	mobile: false,
// 	cleanup: true,
// 	viewOffset: {
// 		top: 10,
// 		right: 0,
// 		bottom: 10,
// 		left: 0,
// 	},
// });

// sr.reveal(".reveal-top", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "top",
// });

// sr.reveal(".reveal-bottom", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "bottom",
// });

// sr.reveal(".reveal-left", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "left",
// });

// sr.reveal(".reveal-right", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "right",
// });

// sr.reveal(".reveal-scale", {
// 	distance: "0",
// 	scale: 0.01,
// 	order: "bottom",
// 	interval: 400,
// });

// const pr = ScrollReveal({
// 	duration: 800,
// 	delay: 1600,
// 	mobile: false,
// 	cleanup: true,
// 	viewOffset: {
// 		top: 10,
// 		right: 0,
// 		bottom: 10,
// 		left: 0,
// 	},
// });

// pr.reveal(".reveal-delay-top", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "top",
// });

// pr.reveal(".reveal-delay-bottom", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "bottom",
// });

// pr.reveal(".reveal-delay-left", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "left",
// });

// pr.reveal(".reveal-delay-right", {
// 	distance: "50px",
// 	interval: 400,
// 	origin: "right",
// });

// pr.reveal(".reveal-delay-scale", {
// 	distance: "0",
// 	scale: 0.01,
// 	order: "bottom",
// 	interval: 400,
// });
