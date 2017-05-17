module.exports = {
	entry: [
		'./src/js/main.js'
	],
	devServer: {
    inline:true,
    port: 4043
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
	// "resolve": {
 //    "mainFields": [ "main", "webpack", "browser", "web", "browserify", ["jam", "main"]]
 //  },
}