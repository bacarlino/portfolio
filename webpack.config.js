var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var BundleClean = require('webpack-bundle-clean');

module.exports = {
  context: __dirname,

  entry: './assets/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    new BundleClean({filename: './webpack-stats.json'}),
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env']
        }
      }
    },
    { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
    {
      test: [/\.mp3$/, /\.jpg$/],
      use: 'file-loader',
    }
  ]
},

devServer: {
  historyApiFallback: true
},

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.js', '.jsx']
  },
}
