var path = require('path');
var openBrowserPlugin = require('open-browser-webpack-plugin');
var node_modules = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: {
		main: [
			'webpack/hot/dev-server',
			'webpack-dev-server/client?http://localhost:8888',
			path.resolve(__dirname, './src/app.js')
		],
		login: path.resolve(__dirname, './src/view/login.js')
	},
	output: {
		path: path.resolve(__dirname, './'),
		filename: '[name].js'
	},
	resolve: {
		extentions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			exculde: /node_modules/,
			query: {
				presets: ['react','es2015']
			}
		},{
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.scss$/,
			loader: 'style!css!sass'
		},{
			test: /\.(png|jpg|gif|eot|svg|ttf|woff)\??.*$/,
			loader: 'url?limit=25000&name=[path][name].[ext]'
		},]
	},
	plugin: [
		new openBrowserPlugin({url: 'http://localhost:8888'})
	]
}