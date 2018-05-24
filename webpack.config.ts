import * as CleanWebpackPlugin from "clean-webpack-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as MiniCssExtractPlugin from "mini-css-extract-plugin";
import * as path from "path";
import * as webpack from "webpack";

const DIST_DIR = path.resolve(__dirname, "dist");
const IS_PROD = process.env.NODE_ENV === "production";

console.log("PRODUCTION?", IS_PROD);

const config: webpack.Configuration = {
	mode: IS_PROD ? "production" : "development",
	devtool: IS_PROD ? undefined : "inline-source-map",
	entry: "./src/index.tsx",
	output: {
		path: DIST_DIR,
		filename: "[name].bundle.js",
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
	performance: {
		hints: IS_PROD ? "error" : false,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: ["babel-loader", "ts-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.pug$/,
				use: ["pug-loader"],
				exclude: /node_modules/,
			},
			{
				test: /\.sass$/,
				use: [
					IS_PROD ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					"sass-loader",
				],
				exclude: /node_modules/,
			},
		],
	},
	devServer: {
		contentBase: DIST_DIR,
		compress: true,
		port: 9000,
		historyApiFallback: true,
	},
	plugins: [
		new CleanWebpackPlugin(["dist"], {
			verbose: true,
		}),
		new HtmlWebpackPlugin({
			template: "src/index.pug",
			filename: "index.html",
		}),
		new MiniCssExtractPlugin(),
	],
};

module.exports = config;
