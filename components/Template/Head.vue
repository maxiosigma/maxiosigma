<template>
   <div v-if="false"></div>
</template>

<script>
export default {
   props: ["title", "description", "main", "alt", "short", "ico", "array", "twcard", "url"],
   data() {
      return {
         headTitle: this.title ?? this.$config.app.name,
         headDescription:
            this.description ??
            "Сайт о личном росте, бизнесе, сотрудничестве, фрилансе, заработке, путешествиях, экономии, науке, творчестве и мышлении",
         headImg: {
            main: this.main ?? "/logo.svg", // ?? require(`~/images/icons/logo.svg`),
            alt: this.alt ?? "/logo.png", // ?? require(`~/images/icons/logo.png`),
            short: this.short ?? "/shortcut.ico", // || require(`~/images/icons/shortcut.ico`).default,
            ico: this.ico ?? "/favicon.ico", // || require(`~/images/icons/favicon.ico`).default,
         },
         headImgArray: this.array ?? [],
         headTwCard: this.twcard ?? "summary",
         headUrl: this.url ?? this.$config.baseUrl + this.$route.fullPath,
      };
   },
   //mounted() {
   //	//console.log(this.$config.baseUrl + this.$route.fullPath)
   //},
   head() {
      const headTitle = this.headTitle;
      const headDescription = this.headDescription;
      const headImg = this.headImg;
      const headImgArray = this.headImgArray;
      const headTwCard = this.headTwCard;
      const headUrl = this.headUrl;

      //https://meworld-3e18aa.netlify.live/link/mw

      return {
         meta: [
            { property: "og:url", content: headUrl },

            { property: "og:title", content: headTitle },
            { property: "og:site_name", content: headTitle },
            { name: "application-name", content: headTitle },
            { name: "twitter:title", content: headTitle },
            { itemprop: "name", content: headTitle },

            { name: "description", content: headDescription },
            { name: "twitter:title", content: headDescription },
            { property: "og:description", content: headDescription },
            { name: "msapplication-tooltip", content: headDescription },
            { itemprop: "description", content: headDescription },

            { property: "og:site", content: headImg.ico },
            { property: "og:site", content: headImg.main },

            { property: "og:image", content: headImg.main },
            { property: "og:image:alt", content: headImg.alt },
            { property: "og:image:secure_url", content: headImg.main },

            { property: "og:image:type", content: "image/png" },
            { property: "og:image:width", content: "500" },
            //{ property: 'og:image:height', content: '200' },

            { property: "og:image", content: headImg.main },
            { property: "og:image:alt", content: headImg.alt },
            { property: "og:image:type", content: "image/svg" },
            { property: "og:image:width", content: "100" },
            //{ property: 'og:image:height', content: '100' },

            { property: "og:image", content: headImg.ico },
            { property: "og:image:alt", content: headImg.short },
            { property: "og:image:type", content: "image/x-icon" },
            { property: "og:image:width", content: "60" },
            //{ property: 'og:image:height', content: '60' },

            { property: "og:image", content: headImg.main },
            { property: "og:image:alt", content: headImg.alt },
            { property: "og:image:type", content: "image/jpg" },
            { property: "og:image:width", content: "500" },
            //{ property: 'og:image:height', content: '200' },

            { itemprop: "image", content: headImg.main },
            { name: "vk:image", content: headImg.main },
            { name: "twitter:image", content: headImg.main },
            { name: "msapplication-TileImage", content: headImg.main },

            { name: "msapplication-square70x70logo", content: headImg.main },
            { name: "msapplication-square150x150logo", content: headImg.main },
            { name: "msapplication-square310x310logo", content: headImg.main },
            { name: "msapplication-wide310x150logo", content: headImg.main },

            ...headImgArray,

            { property: "og:video", content: headImg.main },
            { property: "og:audio", content: headImg.main },

            { name: "twitter:card", content: headTwCard },
         ],
         link: [
            { rel: "image_src", href: headImg.main },

            { rel: "icon", type: "image/x-icon", href: headImg.ico },
            { rel: "apple-touch-icon", sizes: "180x180", href: headImg.main },

            { rel: "shortcut icon", type: "image/x-icon", href: headImg.short },
            { rel: "shortcut icon", type: "image/svg", href: headImg.main },
            { rel: "shortcut icon", type: "image/png", href: headImg.main },

            { rel: "icon", type: "image/x-icon", href: headImg.ico, sizes: "192x192" },
            { rel: "icon", type: "image/x-icon", href: headImg.ico, sizes: "256x256" },
            { rel: "icon", type: "image/x-icon", href: headImg.ico, sizes: "32x32" },
            { rel: "icon", type: "image/x-icon", href: headImg.ico, sizes: "16x16" },

            { rel: "icon", type: "image/png", href: headImg.main, sizes: "192x192" },
            { rel: "icon", type: "image/png", href: headImg.main, sizes: "256x256" },
            { rel: "icon", type: "image/png", href: headImg.main, sizes: "32x32" },
            { rel: "icon", type: "image/png", href: headImg.main, sizes: "16x16" },

            { rel: "icon", type: "image/jpg", href: headImg.main, sizes: "192x192" },
            { rel: "icon", type: "image/jpg", href: headImg.main, sizes: "256x256" },
            { rel: "icon", type: "image/jpg", href: headImg.main, sizes: "32x32" },
            { rel: "icon", type: "image/jpg", href: headImg.main, sizes: "16x16" },

            { rel: "icon", type: "image/svg", href: headImg.main, sizes: "192x192" },
            { rel: "icon", type: "image/svg", href: headImg.main, sizes: "256x256" },
            { rel: "icon", type: "image/svg", href: headImg.main, sizes: "32x32" },
            { rel: "icon", type: "image/svg", href: headImg.main, sizes: "16x16" },

            { rel: "mask-icon", href: headImg.ico, color: "#333333" },
         ],
      };
   },
};
</script>
