Module.register("super-hello-world", {
	// Default module config.
	defaults: {
		text: "Hello Super World!"
	},

	// Override dom generator.
	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	},

	getTemplateData: function () {
		return this.config;
	}
});
