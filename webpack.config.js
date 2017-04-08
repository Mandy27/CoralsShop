module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
            test: /\.css$/,
        	use: [ 'style-loader', 'css-loader' ]
        },
		{
			test: /\.js$/,
			loader: 'babel-loader'		
		},
		{
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			loader: 'url-loader',
			options: {
			limit: 10000
			}
		}
		]
	}
};
