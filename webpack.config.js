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
				use: {
					loader: "ts-loader",
					options: {
						transpileOnly: true, // Skip type-checking in development mode
						happyPackMode: true, // Enable HappyPack mode for faster builds
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			// {
			// 	loader: "css-loader",
			// 	options: {
			// 		modules: true,
			// 	},
			// },
		],
	},
	cache: {
		type: "filesystem", // Enables persistent caching
	},
	devServer: {
		host: "0.0.0.0",

		port: 4005, //port that we're using for local host (localhost:8080)

		static: path.resolve(appDirectory, "./public"), //tells webpack to serve from the public folder
		compress: true,
		client: { overlay: true },
		hot: true,

		server: { type: "https" },
	},
	resolve: {
		extensions: [".ts", ".js"],
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "public"),
	},
	performance: {
		hints: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: path.resolve(appDirectory, "./public/index.html"),
			chunks: "all",
			chunksSortMode: "auto",
			favicon: undefined,
			minify: "auto",
		}),
	],
	mode: "development",
	devtool: process.env.NODE_ENV === "production" ? false : "source-map",
};
