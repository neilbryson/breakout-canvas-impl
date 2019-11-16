module.exports = {
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
    extensions: ['.ts', '.tsx'],
  },
};
