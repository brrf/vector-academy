const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/public/html/template-index.html",
			favicon: "./src/public/assets/logo.png"
		}),
		new HtmlWebpackPlugin({
			filename: "contact.html",
			template: "./src/public/html/template-contact.html",
			favicon: "./src/public/assets/logo.png"
		}),
		new HtmlWebpackPlugin({
			filename: "faqs.html",
			template: "./src/public/html/template-faqs.html",
			favicon: "./src/public/assets/logo.png"
		}),
		new HtmlWebpackPlugin({
			filename: "privacy.html",
			template: "./src/public/html/template-privacy.html",
			favicon: "./src/public/assets/logo.png"
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
		]
	}
});