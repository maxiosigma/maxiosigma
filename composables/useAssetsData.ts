export default function (key = '', dir = 'data' || 'images') {
    //const directory = dir === 'data' ? '/assets/data/*.*' : dir === 'images' ? '/assets/images/*.*' : dir

    const files = Object.entries(import.meta.glob('/assets/data/**', { eager: true })).reduce((acc, [key, val]) => {
        //const k = key.split('/') //k[k.length - 1]
        const name = key.replace('/assets/data/', '')
        //console.log(name)

        acc = Object.assign(acc, { [name]: val?.default }) //.default
        return acc
    }, {})

    //console.log(files)

    return files?.[key]
}

//import fs from "node:fs/promises";
//import { fileURLToPath } from "node:url";

//const filePath = fileURLToPath(new URL("./someFile.txt", import.meta.url));
//fs.readFile(filePath, "utf8").then(console.log);
//import data from './folder/file.json' assert { type: 'json' }
