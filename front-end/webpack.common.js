const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		main: "./src/index.js",
		contact: "./src/public/js/contact.js",
		faq: "./src/public/js/faq.js",
		modal: "./src/public/js/modal.js"
	},
	module: {
		rules: [
			{
		        test: /\.js$/,
		        exclude: /node_modules/,
		        use: {
		          loader: "babel-loader"
		        }
     		},
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

