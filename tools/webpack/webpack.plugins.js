const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const setPlugins = () => {
	return (
		[
			new MiniCssExtractPlugin({
				filename: '[name].css',
				chunkFilename: '[name].chunk.css'
			})
		]
	)
}

module.exports = setPlugins
