module.exports = {
	entry: {
		main: "./src/index.js",
		contact: "./src/public/js/contact.js",
		faq: "./src/public/js/faq.js",
		applyButtons: "./src/public/js/apply-buttons.js",
		landingPage: "./src/public/js/landing-page.js"
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "assets",
						esModule: false
					}
				}
			}
		]
	},
}

