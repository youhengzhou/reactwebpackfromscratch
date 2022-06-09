const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "src"), // where to serve files from in development
    port: 3000,
    open: true, // enable auto open browser
    hot: true, // enable Hot Module Replacement feature
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app0",
      remotes: {
        app1: "app1@[app1Url]/remoteEntry.js",
      },
      shared: {
        react: { singleton: true }, // singleton means to use only one version of react
        "react-dom": { singleton: true },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
