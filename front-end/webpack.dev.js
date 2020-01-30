const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");

module.exports = merge(common, {
	mode: "development",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dev")
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/public/html/template-index.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'home']
		}),
		new HtmlWebpackPlugin({
			filename: "contact.html",
			template: "./src/public/html/template-contact.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'contact']
		}),
		new HtmlWebpackPlugin({
			filename: "faqs.html",
			template: "./src/public/html/template-faqs.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'faq']
		}),
		new HtmlWebpackPlugin({
			filename: "privacy.html",
			template: "./src/public/html/template-privacy.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['main']
		}),
		new HtmlWebpackPlugin({
			filename: "howitworks.html",
			template: "./src/public/html/how-it-works.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'howitworks']
		}),
		new DefinePlugin({
			DOMAIN: JSON.stringify('http://localhost:3001')
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