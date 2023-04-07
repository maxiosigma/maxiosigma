//// lodash zip-lib dotenv vk-io

//const { resolve } = require("node:path");
//const { union, uniq, intersection, intersectionWith, uniqBy, flattenDepth, last } = require("lodash/array");
//const { sortBy } = require("lodash/collection");
//const { readFileSync, writeFileSync, existsSync } = require("node:fs");
//const slugify = require("slugify");

//const zl = require("zip-lib");
//const dotenv = require("dotenv");
//const cronMatcher = require("cronmatch");

////|| process.env
//const env = dotenv.config().parsed;

////console.log(dotenv.config());
////console.log(process.env);

//const splitEnv = (key, sep = ",") => env?.[key]?.split(sep);

//const splitEnv2 = (key, sep, s1 = "my_user_id", s2 = "token") =>
//	splitEnv(key, sep)?.reduce((s, v, i, a) => ((i + 1) % 2 === 0 ? s.push({ [s1]: a?.[i - 1], [s2]: a?.[i] }) : []) && s, []);

//const splitEnv3 = (key, sep, s1 = "name", s2 = "type", s3 = "id") =>
//	splitEnv(key, sep)?.reduce((s, v, i, a) => ((i + 1) % 3 === 0 ? s.push({ [s1]: a?.[i - 2], [s2]: a?.[i - 1], [s3]: a?.[i] }) : []) && s, []);

////const splitEnvN = ({ key, sep, names }) => {
////	splitEnv(key, sep)?.reduce(
////		(s, v, i, a) =>
////			((i + 1) % (names.length - 1) === 0
////				? s.push({
////						...names.map((nm, ni) => {
////							return { [nm]: a?.[ni] };
////						}),
////				  })
////				: []) && s,
////		[]
////	);
////};

//// splitEnv N - бесконечный

const tmet = 150

//const now_time = new Date();
//const now_time_unix = Date.now();
//const now_time_ymd = { y: now_time.getFullYear(), m: now_time.getMonth(), d: now_time.getDay() };

//const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export const asyncReduceArray = async (arr, predicate, timeout = tmet) =>
    arr?.reduce(async (sum, it, i) => {
        await sleep(timeout * i)
        const result = (await predicate(it, i, arr, arr.length)) ?? []
        return await sum.then(async (res) => {
            return [...res, ...(result || [])]
        })
    }, Promise.resolve([]))

//const asyncReduceObject = async (arr, predicate, timeout = tmet) =>
//	arr?.reduce(async (sum, it, i) => {
//		await sleep(getRandomInt(timeout * 0.8, timeout) * i);
//		const result = (await predicate(it, i, arr, arr.length)) ?? {};
//		return await sum.then(async (res) => {
//			return { ...res, ...(result || {}) };
//		});
//	}, Promise.resolve({}));

//const asyncFilter = async (arr, predicate, timeout = tmet) =>
//	arr?.reduce(async (memo, e, i) => {
//		await sleep(getRandomInt(timeout * 0.8, timeout) * i);
//		return [...(await memo), ...((await predicate(e, i, arr, arr.length)) ? [e] : [])];
//	}, []);

//const range = (size = 1, startAt = 0) => (size ? Array.from(Array(size).keys()).map((i) => i + startAt) : []);

//const rundomString = (content, precontent = "") => precontent + content?.[Math.floor(Math.random(0, content?.length - 1))];

//const part = (content, tokens_length, ti) => {
//	const ceil = Math.ceil(content?.length / tokens_length);
//	return content?.slice(ti * ceil, (ti + 1) * ceil);
//};

//const part_oc = (offset, i, ti, tokens_length) => {
//	// Исправить, начинать с +1 со 2го элемента
//	const ceilOffset = Math.ceil((offset * i) / tokens_length);
//	const ceilCount = Math.ceil(offset / tokens_length);
//	return { offset: ceilOffset + (ti + i) * ceilCount, count: ceilCount };
//};

//const splitKeys = (content) =>
//	content
//		.split("\n")
//		.map((it) => it.replaceAll("\t", "").trim())
//		.filter((it) => it);

//const isBlackWords = (content, blackKeys) => blackKeys.filter((key) => content?.toLowerCase()?.includes(key?.toLowerCase())).length > 0;
//const isScreenPublic = (content) => content?.toLowerCase()?.includes("club") || content?.toLowerCase()?.includes("public");

//const keysQueries = (content) => {
//	return { white: splitKeys(content?.white), black: splitKeys(content?.black) };
//};

//const sliceChunks = (arr, chunkSize) => {
//	const res = [];
//	for (let i = 0; i < arr.length; i += chunkSize) {
//		res.push(arr.slice(i, i + chunkSize));
//	}
//	return res;
//};

//const noMyUser = (user_id, my_users_ids) => my_users_ids?.filter((user) => user == user_id)?.length === 0;

//const sortArrayObject = (array) => array.sort(() => Math.random() - 0.5);

//const isStringRU = (str) => /[А-яЁё]/.test(str);

//const cnse = (log, ti = "") => console.log(`${ti ? ti + ": " : ""}Ошибка : ${log}`);

//const differenceDate = (date, unix = true) => Math.abs(now_time.getTime() - new Date(date * 1000).getTime());
//const daysLag = (date, unix = true) => (!isNaN(date) ? Math.ceil(differenceDate(date) / (1000 * 60 * 60 * 24)) : false);

//const satisfiesСomparison = (v, ...arr) => arr?.filter((a) => a === v)?.length > 0;
//const satisfiesIncludesСomparison = (v, keys) =>
//	keys.w.filter((a) => v?.toLowerCase()?.includes(a))?.length > 0 && keys.b.filter((a) => v?.toLowerCase()?.includes(a))?.length === 0;

//const arrayRandomItems = (arr, counts) => {
//	const array = arr;
//	return range(array.length - counts <= 0 ? array.length : counts).map(() => array?.[getRandomInt(0, array.length - 1)]) || [];
//};

//const slugly = (str) => slugify(str, { replacement: "_", remove: undefined, lower: true, strict: true, locale: "ru", trim: true });

//const readJson = (name) => JSON.parse(readFileSync(resolve(__dirname, `./${name}.json`), "utf8"));
//const writeJson = (name, data) => writeFileSync(resolve(__dirname, `./${name}.json`), JSON.stringify(data));
//const existJson = (name) => existsSync(resolve(__dirname, `./${name}.json`));

//function nameScreenModule(name) {
//	return name?.replace("./modules/", "")?.replace("/index", "")?.replace(".js", "")?.replace(".cjs", "")?.replace(".mjs", "")?.split("/").join("	");
//}

//const exp = {
//	config: { env },
//	imported: {
//		zl,
//		last,
//		uniq,
//		union,
//		uniqBy,
//		sortBy,
//		dotenv,
//		resolve,
//		existsSync,
//		cronMatcher,
//		intersection,
//		flattenDepth,
//		readFileSync,
//		writeFileSync,
//		intersectionWith,
//	},
//	functions: {
//		slugly,
//		readJson,
//		writeJson,
//		existJson,
//		//splitEnvN,
//		nameScreenModule,
//		satisfiesIncludesСomparison,
//		satisfiesСomparison,
//		asyncReduceObject,
//		asyncReduceArray,
//		arrayRandomItems,
//		sortArrayObject,
//		isScreenPublic,
//		now_time_unix,
//		now_time_ymd,
//		isBlackWords,
//		rundomString,
//		getRandomInt,
//		sliceChunks,
//		keysQueries,
//		asyncFilter,
//		isStringRU,
//		splitEnv3,
//		splitEnv2,
//		splitKeys,
//		now_time,
//		noMyUser,
//		splitEnv,
//		part_oc,
//		daysLag,
//		sleep,
//		range,
//		part,
//		cnse,
//	},
//};

//module.exports = exp;

//export const asyncReduceArray =[]
