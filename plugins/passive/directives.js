import Vue from 'vue'

Vue.directive('scroll', {
	inserted: function (el, binding) {
		let f = function (evt) {
			if (binding.value(evt, el)) {
				window.removeEventListener('scroll', f)
			}
		}
		window.addEventListener('scroll', f)
	},
})

//Vue.directive('focus', {
//	inserted: (el) => {
//		el.focus()
//	},
//})

//Vue.directive('log-inner-text', {
//	inserted: (el) => {
//		console.log(el.innerText)
//	},
//})

//Vue.directive('is-in-view-port', isInViewPort())

//function isInViewPort() {
//	return {
//		isLiteral: true,
//		inserted: (el, binding, vnode) => {
//			let func = () => {
//				let rect = el.getBoundingClientRect()
//				let inView = rect.width > 0 && rect.height > 0 && rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//				if (inView) {
//					el.classList.add(binding.value)
//					window.removeEventListener('scroll', f)
//				}
//			}
//			window.addEventListener('scroll', func)

//			func()
//		},
//		//<div class="list-item" v-is-in-view-port="'someClass'" >
//	}
//}
