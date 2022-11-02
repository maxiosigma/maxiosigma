export default function (content) {
	return content
		?.split("")
		.map((it) => it.charCodeAt(0)) // ^ 1
		.map((it, i) => (i < 10 ? (it -= 7) : i < 20 ? (it += 9) : (it -= 11)))
		.join(":");
}

//.map((it) => new Buffer(it).toString("base64"))
