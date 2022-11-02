export default function (query) {
	return (
		["utm_", "gtm_"].reduce(
			(sum, label) =>
				Object.keys(query).map((it) => {
					it.includes(label) ? (sum += 1) : sum;
				}) && sum,

			0
		) > 0
	);
}

//http://192.168.56.1:3000/link?utm_source=ssss
//["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "", "", ""]
