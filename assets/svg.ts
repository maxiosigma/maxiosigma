////var node_watch = require("node-watch");

////node_watch("./svg", { recursive: true }, function (evt, name) {
////	console.log("%s changed.", name);
////});
////import  glob from "glob";

//const fs = require("fs");
//const path = require("path");
//const glob = require("glob");
//const SVGSpriter = require("svg-sprite");
//const spriter = new SVGSpriter({
//	//dest: "assets/images/sprite",
//});

//spriter.add("assets/svg/ameba.svg", null, fs.readFileSync("assets/svg/ameba.svg", "utf-8"));
//spriter.add("assets/svg/avito.svg", null, fs.readFileSync("assets/svg/avito.svg", "utf-8"));

//spriter.compile((error, result) => {
//	console.log(result);

//	for (const mode in result) {
//		for (const resource in result[mode]) {
//			fs.mkdirSync(path.dirname(result[mode][resource].path), { recursive: true });
//			fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
//		}
//	}
//});

//glob("assets/svg/*", function (er, files) {
//	//files.map((file) => spriter.add("assets/svg/ameba.svg", null, fs.readFileSync("assets/svg/ameba.svg", "utf-8")));
//});

////console.log(spriter);

////svg-sprite --css --css-render-css --css-example --dest=assets/images/sprite assets/svg/*.svg

////svg-sprite --css --dest=assets/images/sprite assets/svg/*.svg
