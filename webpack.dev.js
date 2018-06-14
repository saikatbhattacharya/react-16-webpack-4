const webpack = require('webpack');
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

// const PORT = process.env.PORT || 5000;
module.exports = merge(common, {
  devtool: "inline-source-map",
  mode:'development',
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    port: 8080
  }
});
