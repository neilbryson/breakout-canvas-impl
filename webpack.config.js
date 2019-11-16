const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'src'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        test: /\.(js|ts)x?$/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
};
