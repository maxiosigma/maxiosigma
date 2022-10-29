export default function (content) {
	return encodeURI(
		content
			?.split("")
			.map((it) => it.charCodeAt(0) ^ 1)
			.map((it, i) => (i < 20 ? (it -= 60) : (it += 5)))
			.join(":")
	);
}
