import Vue from "vue";

import app_config from "../../app.config";

// Глабальные методы
Vue.mixin({
   methods: {
      LCG(name) {
         return localStorage.getItem(name) || window.localStorage.getItem(name);
      },
      LCS(name, payload) {
         return localStorage.setItem(name, payload) ?? window.localStorage.setItem(name, payload);
      },
      LCST(name, payload, time = 1500) {
         setTimeout(() => this.LCS(name, payload), time);
      },
      isHttps() {
         return document.location.href.indexOf("https://") !== -1;
      },
      isLight(light = "amp") {
         return this.loke().indexOf("-" + light) !== -1;
      },
      routeLight(link) {
         location.href = this.localePath("/" + link);
      },
      routeBlank(link) {
         window.open("/" + link, "_blank");
      },
      routeLightBlank(link) {
         window.open(this.localePath("/" + link), "_blank");
      },
      isMobile() {
         // || this.$ua.deviceType() !== "desktop"
         return this.$ua.deviceType() !== "pc";
      },
      isLangGlobal() {
         return this.$i18n?.locale?.split("-")?.[0] ?? "ru";
      },
      lightRedirect() {
         const light = this.isLight();
         const isMobile = this.$ua.deviceType() !== "pc" && !light;
         const isDesktop = this.$ua.deviceType() === "pc" && light;
         const checkNoLink =
            app_config.excluded?.filter((it) => this.$route.path.indexOf("/" + it + "/") !== -1 || this.$route.path.indexOf("/") !== -1).length >
            0;

         isMobile && !checkNoLink ? (location.href = this.switchLocalePath(this.loke(true))) : null;

         isDesktop && !checkNoLink ? (location.href = this.switchLocalePath(this.loke(false))) : null;

         console.log(light);

         return (isMobile && !checkNoLink) || (isDesktop && !checkNoLink);
      },
      menuRedirect(link) {
         this.$store.commit("checkMenu");
         setTimeout(() => (location.href = "/" + this.$i18n.locale + "/" + link), 500);
      },
      headSplitTitle(slug, delimetr = " | ") {
         return slug != undefined ? String(slug).toUpperCase().split("_").join(delimetr) : "Link";
      },
      storageItem(item, duration = this.$store.state.timeout + 5000) {
         if (item)
            setTimeout(() => {
               this.LCS(item, true);
            }, duration);
      },
      ucFirst(str) {
         if (!str) return str;
         return str[0].toUpperCase() + str.slice(1);
      },
      isBlank(link) {
         return this.isLinkSite(link);
      },
      isHypertext(link) {
         return this.isLinkSite(link);
      },
      isLinkSite(link) {
         return link.indexOf("http://") !== -1 || link.indexOf("https://") !== -1;
      },
      formatDate(date, locale = "ru") {
         const options = { year: "numeric", month: "long", day: "numeric" };
         return new Date(date).toLocaleDateString(locale, options);
      },
      noContextMenu() {
         if (!this.$config.app.isDev) {
            window.oncontextmenu = function () {
               return false;
            };

            document.onkeydown = function (e) {
               if (window.event.keyCode == 123 || e.button == 2) return false;
            };
         }
      },
      getFields(array) {
         return array.reduce((sum, it) => sum.push(it.fields) && sum, []);
      },
      loke(light = null) {
         const locale = this.$i18n.locale;
         return light === null ? locale : light == true ? locale + "-amp" : locale.replace("-amp", "");
      },
      toogleLoke() {
         const locale = this.$i18n.locale;
         return this.$ua.deviceType() === "pc" ? locale + "-amp" : locale.replace("-amp", "");
      },
      notifyCookie() {
         const cookie = this.LCG("capcake");

         //console.log(cookie);

         if (!cookie || cookie == false) {
            setTimeout(
               () =>
                  this.$toast.show(
                     `Сайт использут cookie и локальное хранилище данных. Это позволяет анализировать взаимодействие посетителей с сайтом и делать его лучше по всем правилам закона 152-ФЗ «О персональных данных». Продолжая пользоваться сайтом, вы соглашаетесь с использованием файлов cookie и политикой конфиденциальности ~ главная → конфиденциальность. Нажмите крестик справа, чтобы закрыть.`,
                     {
                        theme: "outline",
                        position: "bottom-center",
                        duration: null,
                        //duration: 10000000000,
                        fullWidth: true,
                        className: "toast-cookie",
                        singleton: true,
                        closeOnSwipe: false,
                        action: [
                           {
                              text: "",
                              class: "icon-close !m-0 sm:!mr-2 pointer-events-auto !text-yellow-500 transition-all duration-200 hover:(!text-green-300)",
                              onClick: (e, toastObject) => {
                                 toastObject.goAway(0);
                                 this.LCS("capcake", true);
                              },
                           },
                        ],
                     }
                  ),
               2000
            );

            //setTimeout(() => this.LCS("capcake", true), 3000);
         }
      },
      notifyCook() {
         setTimeout(() => {
            const cook = this.LCG("capcake");

            const toast = (count) => {
               setTimeout(
                  () =>
                     this.$toast.show("На сайте используются cookie " + (count - 1) + " из 2", {
                        theme: this.isLight ? "outline" : "bubble",
                        position: "top-right",
                        duration: 1000,
                     }),
                  500
               );
               setTimeout(
                  () =>
                     this.$toast.show("На сайте используются cookie " + count + " из 2", {
                        theme: this.isLight ? "outline" : "bubble",
                        position: "bottom-right",
                        duration: 1000,
                     }),
                  1600
               );
            };

            if (!cook || cook == 0) {
               this.LCS("capcake", 2);
               toast(Number(this.LCG("capcake")));
            } else if (cook && cook > 0 && cook < 2) {
               this.LCS("capcake", Number(cook) + 2);
               toast(Number(this.LCG("capcake")));
            }
         }, 500);
      },
      headTemplate(template = app_config.head.titleTemplate) {
         return template;
      },
      headMeta(meta) {
         return meta ? app_config.head.meta.push(meta) : app_config.head.meta;
      },
      headLinks(links) {
         return links ? app_config.head.links.push(links) : app_config.head.links;
      },
      intRandom(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min)) + min;
      },
      stringRandom(arr) {
         const count = arr?.length;
         const rundom = this.intRandom(0, count);
         return arr[rundom];
      },
      isJS() {
         return true;
      },
      updateURL(query) {
         if (history.pushState && query) {
            var baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;
            var newUrl = `${baseUrl}?${query.replace("?", "")}`;
            history.pushState(null, null, newUrl);
         } else if (!history.pushState && query) {
            console.warn("History API не поддерживается");
         }
         return true;
      },
      st() {
         console.log(this.$style);
      },
      or(i, ...args) {
         let sum = false;

         args.reduce((sum_, item) => {
            if (item === i) return (sum += 1);
            else return sum;
         }, false);

         return sum ? true : false;
      },
      animateBlock({ dl = 1, dr = 1, sc = 1, sk = 1, tx = 0, lp = false, rn = 1 }) {
         return {
            //round: rn,
            loop: lp,
            perspective: 5000,
            translateX: [tx, 0],
            scale: [0.0, sc],
            skew: [1, sk],
            duration: dr * 1000,
            delay: dl * 1000,
         };
      },
      copySign(text, notify = true) {
         const clipboard = navigator?.clipboard;

         clipboard
            ? clipboard.writeText(text) && notify
               ? this.$toast.show("Ссылка скопирована в буфер обмена", {
                    theme: "outline",
                    position: "top-center",
                    duration: 1000,
                 })
               : null
            : console.log(text);
      },
      vkPixel() {
         try {
            //!(function () {
            //  var t = document.createElement("script");
            //  (t.type = "text/javascript"),
            //    (t.async = !0),
            //    (t.src = "https://vk.com/js/api/openapi.js?169"),
            //    (t.onload = function () {
            //      VK.Retargeting.Init("VK-RTRG-1108817-aRWww"),
            //        VK.Retargeting.Hit();
            //    }),
            //    document.head.appendChild(t);
            //})();

            !(function () {
               var t = document.createElement("script");
               (t.type = "text/javascript"),
                  (t.async = !0),
                  (t.src = "https://vk.com/js/api/openapi.js?169"),
                  (t.onload = function () {
                     VK.Retargeting.Init("VK-RTRG-1455228-5lkj2"), VK.Retargeting.Hit();
                  }),
                  document.head.appendChild(t);
            })();

            console.log("VK PIXEL ACTIVE");
         } catch (error) {
            console.log(error);
         }

         return true;
      },
      ymPixel() {
         setTimeout(() => {
            (function (m, e, t, r, i, k, a) {
               m[i] =
                  m[i] ||
                  function () {
                     (m[i].a = m[i].a || []).push(arguments);
                  };
               m[i].l = 1 * new Date();
               (k = e.createElement(t)), (a = e.getElementsByTagName(t)[0]), (k.async = 1), (k.src = r), a.parentNode.insertBefore(k, a);
            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(89264491, "init", {
               clickmap: true,
               trackLinks: true,
               accurateTrackBounce: true,
               webvisor: true,
            });

            console.log("YM PIXEL ACTIVE");
         }, 250);

         return true;
      },
      gtm() {
         setTimeout(() => {
            (function (w, d, s, l, i) {
               w[l] = w[l] || [];
               w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
               var f = d.getElementsByTagName(s)[0],
                  j = d.createElement(s),
                  dl = l != "dataLayer" ? "&l=" + l : "";
               j.async = true;
               j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
               f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-MSJZ4PT");
            //
            //(function (w, d, s, l, i) {
            //  w[l] = w[l] || [];
            //  w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            //  var f = d.getElementsByTagName(s)[0],
            //    j = d.createElement(s),
            //    dl = l != "dataLayer" ? "&l=" + l : "";
            //  j.async = true;
            //  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            //  f.parentNode.insertBefore(j, f);
            //})(window, document, "script", "dataLayer", "G-X7YM5GJKXG");

            console.log("GTM PIXEL ACTIVE");
         }, 250);

         return true;
      },
   },
});

//(t.crossorigin = 'anonymous'),
//VK.Retargeting.Init('VK-RTRG-1108817-aRWww')
//VK.Retargeting.Hit()
//VK.Retargeting.Add(41163856)

// toogleClass
//tc(t, c_1, c_2, c_3) {
//	const tme = t * 1000
//	console.log(tme, this.$store.state.tc.preload)
//	console.log(tme, this.$store.state.tc.active)

//	//if (i === 0)
//	setTimeout(() => {
//		this.$store.commit('tcPreloadCheck', true)
//		console.log(tme, this.$store.state.tc.preload)

//		setTimeout(() => {
//			this.$store.commit('tcActiveCheck', true)
//			console.log(tme, this.$store.state.tc.active)
//		}, tme)
//	}, tme)

//	// console.log(this.$store.state.tc.active)
//	// [preload ? $style.preloadShow : $style.preloadHide]

//	//const result = typeof lastArg === 'string' ? firstArg : args[lastArg]
//	//const result = [this.$store.state.tc.preload ? c_1 : this.$store.state.tc.active ? c_3 : c_2]

//	//console.log(result)

//	return [this.$store.state.tc.preload ? c_1 : this.$store.state.tc.active ? c_3 : c_2]
//},

// encodeShortLink(link) {
// 	// Сделать так, чтобы для 1 и той же ссылки был одинаковый encode
// 	return link
// 		.split('/')
// 		.join('_')
// 		.split('?')
// 		.join('~')
// 		.split('ref')
// 		.join('<^>')
// },
// decodeShortLink(link) {
// 	return link
// },

// redirect() {
// 	if (!this.$cookies.get('openmw')) {
// 		window.open('https://myw.tf/m8sk75', 'Приглашение попробовать новый маркетплейс', 'resizable=yes,scrollbars=yes,status=no,menubar=no,toolbar=no,location=no')

// 		this.$cookies.set('openmw', 'true', {
// 			path: '/',
// 			maxAge: 604800, // 86400 * 7 - дней
// 		})
// 	}

// 	this.$cookies.get('openmw') ? (location.href = '/about') : null
// },
