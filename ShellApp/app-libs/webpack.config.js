const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = {
  entry: './src/index',
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3020,
  },
  output: {
    publicPath: 'auto',
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: 'AppLibs',
      filename: 'remoteEntry.js',
      exposes: {
        '.': './src/index',
        react: 'react',
        'react-dom': 'react-dom',
        'styled-components': 'styled-components',
        lodash: 'lodash',
        moment: 'moment',
        'moment-timezone': 'moment-timezone',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        'styled-components': { singleton: true },
        lodash: { singleton: false },
        moment: { singleton: false },
        'moment-timezone': { singleton: false },
      },
    }),
  ],
};
