var utils = require('./utils')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  preLoaders: [
    {
      test: /\.js$/,
      loader: 'eslint',
      exclude: /node_modules/
    }
  ],
  loaders: [
    {
      test: require.resolve('jquery'),
      loader: 'expose?$!expose?jQuery'
    },
    {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    },
    {
      test: /\.json$/,
      loader: 'json'
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    }
  ]
}
