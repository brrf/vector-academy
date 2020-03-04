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
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/public/html/template-index.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			},
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'applyButtons']
		}),
		new HtmlWebpackPlugin({
			filename: "contact.html",
			template: "./src/public/html/template-contact.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			},
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'contact']
		}),
		new HtmlWebpackPlugin({
			filename: "faqs.html",
			template: "./src/public/html/template-faqs.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			},
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'faq']
		}),
		new HtmlWebpackPlugin({
			filename: "privacy.html",
			template: "./src/public/html/template-privacy.html",
			minify: {
				removeAttributeQuotes: true,
				collapseWhitespace: true,
				removeComments: true
			},
			favicon: "./src/public/assets/logo.png",
			chunks: ['main']
		}),
		new HtmlWebpackPlugin({
			filename: "how-it-works.html",
			template: "./src/public/html/how-it-works.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'applyButtons']
		}),
		new HtmlWebpackPlugin({
			filename: "timeline.html",
			template: "./src/public/html/timeline.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['main', 'applyButtons']
		}),
		new HtmlWebpackPlugin({
			filename: "landing-page.html",
			template: "./src/public/html/landing-page.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['landingPage']
		}),
		new HtmlWebpackPlugin({
			filename: "landing-page-success.html",
			template: "./src/public/html/landing-page-success.html",
			favicon: "./src/public/assets/logo.png",
			chunks: ['landingPage']
		}),
		new DefinePlugin({
			DOMAIN: JSON.stringify('https://vectoracademy.io')
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
	},
	devServer: {
	    port: 8080,
	    open: true,
	    proxy: {
	      '/api': 'http://localhost:3001'
	    }
  	},
});
