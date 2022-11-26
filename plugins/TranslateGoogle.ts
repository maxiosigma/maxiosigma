//import { translate } from "@vitalets/google-translate-api";
//const {text} = await translate("Привет мир");
//console.log(text);

//try {
//	const { text } = await translate("Привет, мир!", {
//		to: "en",
//		fetchOptions: { agent },
//	});
//} catch (e) {
//	if (e.name === "TooManyRequestsError") {
//		// retry with another proxy agent
//	}
//}

export default defineNuxtPlugin(async (nuxtApp) => {
	return nuxtApp;
});
