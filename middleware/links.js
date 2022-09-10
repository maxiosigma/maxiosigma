//const downloader = require("nodejs-file-downloader");

//__dirname

export default async function ({ store, $strapi, redirect }) {
   if (process.server) {
      //  const links = [];
      //  (await $strapi.graphql({ query: store.state.gql.works })).works.data.map((it) =>
      //     it.attributes.media.data.map((md) => links.push(md.attributes.url))
      //  );
      //  console.log(links);
      const { DownloaderHelper } = require("node-downloader-helper");
      const dl = new DownloaderHelper("http://localhost:1337/uploads/2022082414141936_a866630776.webp", "./media/strapi", {
         resumeIfFileExists: true,
         override: "skip",
      });
      dl.start();

      //  dl.on("error", (err) => console.log("Download Failed", err));
      //  dl.start().catch((err) => console.error(err));
   }

   //   console.log($strapi);
   //   console.log(store);
   //const	data = new downloader({
   //		//url: it.url,
   //		//fileName,
   //		directory: '../../images/cdn',
   //		cloneFiles: false,
   //		skipExistingFileName: true,
   //		//onResponse() {
   //		//	isCheck.response = true
   //		//}
   //	})
   //try {
   //	await data.download()
   //	if (isCheck.response) console.log(`Файл ${fileName} загружен`)
   //} catch (error) {
   //	console.log(`Ошибка скачивания: ${fileName} `, error)
   //}
}
