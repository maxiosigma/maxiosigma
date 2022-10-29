export default function (callback) {
	//&& !process.browser
	if (process.server) callback();
}
