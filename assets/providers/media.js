import { joinURL, resolveURL } from "ufo";

// import {} from '~image'

export function getImage(src, { modifiers, baseURL } = {}, { options, nuxtContext, $img }) {
   const { width, height, format, fit, ...providerModifiers } = modifiers;
   const operationsString = [].join(",");

   //const path = require(`~/media${src}`);
   const path = src;

   console.log(path);

   try {
      //  path = import("~/media" + src);
      //  console.log(require("~/media" + src));
   } catch (error) {
      //  console.log(src);
   }

   //   console.log(path);
   //   console.log(joinURL(require("~/media/cdn/202207137172755_dac643ddef.webp"), "/"));

   // process modifiers

   return {
      url: joinURL(baseURL, operationsString, path),
   };
}
