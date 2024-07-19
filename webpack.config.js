const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");
const appDirectory = fs.realpathSync(process.cwd());

module.exports = {
	entry: appDirectory + "/src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	devServer: {
		host: "0.0.0.0",

		port: 4001, //port that we're using for local host (localhost:8080)

		static: path.resolve(appDirectory, "./public"), //tells webpack to serve from the public folder

		hot: true,

		server: { type: "https" },
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(appDirectory, "./public/index.html"),
		}),
	],
};
