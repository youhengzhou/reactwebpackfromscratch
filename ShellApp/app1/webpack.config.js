const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3002,
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
      name: 'App1',
      filename: 'remoteEntry.js',
      remotes: {
        App0: 'App0@[App0Url]/remoteEntry.js',
        App1: 'App1@[App1Url]/remoteEntry.js',
        App2: 'App2@[App2Url]/remoteEntry.js',
        AppShell: 'AppShell@[AppShellUrl]/remoteEntry.js',
        AppLibs: 'AppLibs@[AppLibsUrl]/remoteEntry.js',
      },
      exposes: {
        './Widget': './src/Widget',
      },
      shared: {
        react: { singleton: true, import: false },
        'react-dom': { singleton: true, import: false },
        'styled-components': { singleton: true, import: false },
        moment: { import: false },
        'moment-timezone': { import: false },
      },
    }),
    new ExternalTemplateRemotesPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
