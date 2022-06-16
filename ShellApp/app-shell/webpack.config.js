const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3010,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
    // To learn more about the usage of this plugin, please visit https://webpack.js.org/plugins/module-federation-plugin/
    new ModuleFederationPlugin({
      name: 'AppShell',
      filename: 'remoteEntry.js',
      remotes: {
        AppLibs: 'AppLibs@[AppLibsUrl]/remoteEntry.js',
      },
      exposes: {
        './AppShell': './src/AppShell',
      },
      shared: {
        react: { singleton: true, import: false },
        'react-dom': { singleton: true, import: false },
        'styled-components': { singleton: true, import: false },
      },
    }),
  ],
};
