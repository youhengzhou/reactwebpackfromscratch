const path = require("path");

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "/dist"), // output of compiled files
    filename: "[name].bundle.js", // name of compiled files
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, "src"), // where to serve files from in development
    port: 3000,
    open: true, // enable auto open browser
    hot: true, // enable Hot Module Replacement feature
  },
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
};
