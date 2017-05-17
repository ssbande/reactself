module.exports = {
	entry: [
		'./src/js/main.js'
	],
	devServer: {
    inline:true,
    port: 4042
  },
	output: {
		path: __dirname,
		filename: 'dist/js/main.js'
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