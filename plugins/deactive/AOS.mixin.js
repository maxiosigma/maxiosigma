import AOS from "aos";
import "aos/dist/aos.css";

export default {
	mounted() {
		// console.log(document.querySelector(".wrapper").clientWidth);

		AOS.init({
			// disable: true,
			// disable: "mobile",
			// disable: "tablet",
			// disable: window.innerWidth <= 768,
			disable: document.querySelector(".wrapper").clientWidth <= 408 ? true : false,

			debounceDelay: 50,
			throttleDelay: 99,

			offset: -200,
			// offset: -10,
			delay: 50,
			duration: 500,
			easing: "ease",
			// easing: "ease-in-out",
			// once: false,
			once: true,
			// mirror: false,
			mirror: true,

			initClassName: "anime-init",
			animatedClassName: "anime",
			useClassNames: false,

			// anchorPlacement: "center",
			// anchorPlacement: "top-bottom",
		});

		// AOS.Refresh();
	},
};
