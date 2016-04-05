var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var argv = require('yargs').argv;

const IS_DEVELOP = !!argv.watch;

const AUTOPREFIXER_BROWSERS = [
    'Chrome >= 20',
    'Firefox >= 24',
    'Explorer >= 9',
    'Safari >= 6'
];

const config = {
  entry: {
    app: path.join(__dirname, 'src', 'app.jsx'),
  },

  devtool: IS_DEVELOP ? 'source-map' : 'hidden-source-map',

  output: {
    filename: '[name]' + (IS_DEVELOP ? '' : '.min') + '.js',
    path: path.join(__dirname, 'build'),
    publicPath: '/static/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': IS_DEVELOP ? JSON.stringify('develop') : JSON.stringify('production'),
      },
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.less$/,
        loader: 'style?singleton!css!postcss!less',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|otf|otf2|woff|woff2?)(\?\S*)?$/,
        loader: 'url?limit=25000',
      },
    ]
  },

  postcss: [autoprefixer(AUTOPREFIXER_BROWSERS)],
};

module.exports = config;
