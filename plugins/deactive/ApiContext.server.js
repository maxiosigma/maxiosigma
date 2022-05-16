export default (context, inject) => {
	inject("server", () => true);
	inject("api", async (controller, method, params) => {
		try {
			if (params && params.httpcall) {
				return await context.$axios["$" + (params ? "post" : "get")]("/api/" + controller + "/" + method, params);
			}
			let api = require("../api/" + controller.replace(/^\/+|\/+$|\.+/g, ""));
			return await api[method](params);
		} catch (e) {
			console.error(e);
			throw e;
		}
	});
};
