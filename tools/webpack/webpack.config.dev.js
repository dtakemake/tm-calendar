module.exports = {
  mode: 'development',
  entry: require('./webpack.entry'),
  devtool: 'source-map',
  module: {
    rules: require('./webpack.rules')
  },
	plugins: require('./webpack.plugins')(),
  resolve: {
    extensions: [ '.js', '.ts' ]
  },
  output: {
    filename: '[name].js',
    clean: true
  }
}
