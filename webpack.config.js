const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	output: {
		path: path.resolve(__dirname, 'build'),
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				options: {
					presets: [['@babel/preset-react', { runtime: 'automatic' }]],
				},
			},
			{
				test: /\.(css|s[ac]ss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		open: true,
		port: 3000,
		client: {
			overlay: true,
		},
		historyApiFallback: true,
	},
}
