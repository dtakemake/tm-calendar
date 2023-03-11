const { inDev } = require('./webpack.helpers')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
	{
		// Typescript loader
		test: /\.(tsx|ts)?$/,
		exclude: /(node_modules|\.webpack)/,
		use: {
			loader: 'ts-loader',
			/*options: {
				transpileOnly: true,
			},*/
		},
	},
  {
    // SCSS (SASS) Loader
    test: /\.scss$/i,
    use: [
      { loader: inDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
    ],
  }
]
