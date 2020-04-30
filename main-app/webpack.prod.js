const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {DefinePlugin} = require("webpack");

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(),
			new TerserPlugin()
		]
	},
	plugins: [
		new MiniCssExtractPlugin({filename: "[name].[contentHash].css"}), 
		new CleanWebpackPlugin(),
		new DefinePlugin({
			PROTOCOL: JSON.stringify('https://'),
			DOMAIN: JSON.stringify('apply.vectoracademy.io'),
			PUBLIC: JSON.stringify('../../assets/student-cvs/'),
			EMPLOYERDOMAIN: JSON.stringify('hire.vectoracademy.io')
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader, 
					"css-loader"
				]
			}
		]
	}
});
