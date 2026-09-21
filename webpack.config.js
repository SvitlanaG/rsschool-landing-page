const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  mode: "production",
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/rsschool-landing-page/",
    clean: true,
    filename: "bundle.[contenthash].js",
    assetModuleFilename: "assets/[name].[contenthash][ext]",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    open: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env"] },
        },
      },
      { test: /\.html$/i, loader: "html-loader" },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      { test: /\.(png|jpe?g|gif|svg|webp|mp4)$/i, type: "asset/resource" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/catalog.html",
      filename: "catalog.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles.[contenthash].css" }),
  ],
};
