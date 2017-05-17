module.exports = {
	entry: [
		'./src/index.js'
	],
	devServer: {
    inline:true,
    port: 4044
  },
	output: {
		path: __dirname,
		filename: 'app/js/main.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			}
		]
	}
}