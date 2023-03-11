module.exports = {
  mode: 'production',
	entry: require('./webpack.entry'),
  devtool: false,
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
