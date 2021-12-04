const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBar = require("webpackbar");
const pluginsConfig = [
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './index.html',
		hash: process.env.MODE === 'production' ? true : false,
		// favicon: path.resolve(__dirname, '../src/assets/icons/favicon.ico'),
		minify: process.env.MODE === 'production' ? {
			removeAttributeQuotes: true,
			collapseWhitespace: true,
		} : false,
	}),
	new MiniCssExtractPlugin({
		filename: process.env.MODE == 'production' ? 'css/[name][hash:8].css' : 'css/[name].css',
		chunkFilename: process.env.MODE == 'production' ? 'css/[id][hash:8].css' : 'css/[id].css',
	}),
	new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
	new webpack.NamedModulesPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new WebpackBar(),
];
if (process.env.MODE == 'production') {
	pluginsConfig.push(
		new CleanWebpackPlugin(),
	)
	if (process.env.BUILD === 'dev') {
		pluginsConfig.push(
			new webpack.DefinePlugin({
				BUILD_MODE: JSON.stringify('build_dev'),
			})
		)
		console.log('DefinePlugin---------[测试注入全局变量build_dev]---------->');
	} else if (process.env.BUILD === 'test') {
		pluginsConfig.push(
			new webpack.DefinePlugin({
				BUILD_MODE: JSON.stringify('build_test'),
			})
		)
		console.log('DefinePlugin---------[测试注入全局变量build_test]--------->');
	}else if (process.env.BUILD === 'prod') {
		pluginsConfig.push(
			new webpack.DefinePlugin({
				BUILD_MODE: JSON.stringify('build_prod'),
			})
		)
		console.log('DefinePlugin---------[生产注入全局变量build_prod]--------->');
	}
	if (process.env.AY == 'true') {
		const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
		pluginsConfig.push(
			new BundleAnalyzerPlugin(),
		)
		console.log('pluginsConfig--------[模块分析]---------------->');
	}
	console.log('CleanWebpackPlugin---[清除dist目录]----------------------->');
} else {
	pluginsConfig.push(
		new webpack.DefinePlugin({
			BUILD_MODE: JSON.stringify('dev'),
		})
	)
	console.log('DefinePlugin--------[开发注入全局变量dev]--------->');
}
module.exports = pluginsConfig;

console.log('pluginsConfig--------[导出插件]--------------------------->');
