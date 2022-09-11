export default async function ({ store, $strapi, $axios, redirect }) {
   //   const isGet = (await $axios?.get("http://localhost:1337/admin"))?.status === 200;
   //   if (process.server && isGet) {
   //      const { DownloaderHelper } = require("node-downloader-helper");
   //      [
   //         ...(await $strapi.graphql({ query: store.state.gql.works })).works.data.reduce(
   //            (sum, it) => it.attributes.media.data.map((md) => sum.push(md.attributes.url)) && sum,
   //            []
   //         ),
   //         ...(await $strapi.graphql({ query: store.state.gql.links })).links.data.reduce(
   //            (sum, it) => it.attributes.imgs.data.map((md) => sum.push(md.attributes.url)) && sum,
   //            []
   //         ),
   //      ].map((ln, i) => {
   //         // if (i === 0) {
   //         new DownloaderHelper(`http://localhost:1337${ln}`, "./media/cdn", {
   //            resumeIfFileExists: true,
   //            override: "skip",
   //         }).start();
   //         // console.log(`http://localhost:1337${ln}`);
   //         // }
   //      });
   //   }
}
