var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, include: __dirname + '/app', loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
