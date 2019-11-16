var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    hot: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  entry: ['./src'],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
