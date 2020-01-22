const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
	entry: "./src/index.js",
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
	// plugins: [
	// 	new FaviconsWebpackPlugin()
	// ]
}

