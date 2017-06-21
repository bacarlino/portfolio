var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: './assets/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name]-[hash].js"
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  // module: {
  //   loaders: [
  //     { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}, // to transform JSX into JS
  //   ],
  // },

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

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['.js', '.js', '.jsx']
  },
}


// var path = require("path")
// var webpack = require('webpack')
// var BundleTracker = require('webpack-bundle-tracker')
//
// module.exports = {
//   context: __dirname,
//
//   entry: './assets/js/index',
//
//   output: {
//     path: path.resolve('./assets/bundles/'),
//     filename: "[name]-[hash].js",
//   },
//
//   plugins: [
//     new BundleTracker({filename: './webpack-stats.json'}),
//   ],
//
//   module: {
//     loaders: [
//       { test: /\.js?$/, exclude: /node_modules/, loader: 'babel-loaer'},
//     ],
//   },
//
//   resolve: {
//     modulesDirectories: ['node_modules', 'bower_components'],
//     extensions: ['', '.js']
//   },
// }
