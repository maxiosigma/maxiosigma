import Fontagon from "fontagon";

import * as options from "./nuxt.config.js";

Fontagon(options.default.iconFont)
   .then((opts) => {
      //  console.log("done! ", opts);
   })
   .catch((err) => {
      //  console.log("fail! ", err);
   });

//   {
//	files: ["path/**/*.svg"],
//	dist: "dist/",
//	fontName: "fontagon-icons",
//	style: "all",
//	classOptions: {
//	   baseClass: "fontagon-icons",
//	   classPrefix: "ft",
//	},
// }
