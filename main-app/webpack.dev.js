const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");

module.exports = merge(common, {
	mode: "development",
	devServer: {
	    compress: true,
	    port: 3000
  	},
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dev")
	},
	plugins: [
		new DefinePlugin({
			PROTOCOL: JSON.stringify('http://'),
			DOMAIN: JSON.stringify('localhost:3001'),
			PUBLIC: JSON.stringify('../../../../assets/student-cvs/')
		}),	
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