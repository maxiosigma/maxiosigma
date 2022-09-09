export default function ({ app }) {
   return {
      breakpoint: {},
      icons: {},
      lang: {
         t: (key, ...params) => app.i18n.t(key, params),
      },
      rtl: true,
      theme: {},
   };
}
