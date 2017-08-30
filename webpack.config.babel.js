import webpack from 'webpack';
import merge from 'webpack-merge';
import path from 'path';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import * as configs from './webpack';

const ENV = process.env.NODE_ENV;

const commonConfig = {
  entry: path.join(__dirname, 'src/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      use: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            outputStyle: 'expanded',
            includePaths: [
              path.resolve(__dirname, 'src/styles')
            ]
          }
        }]
      })
    }]
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  plugins: [
    new StyleLintPlugin({
      configFile: path.join(__dirname, '.stylelintrc'),
      files: '**/*.?(sa|sc|c)ss',
      context: path.join(__dirname, 'src'),
      emitErrors: ENV !== 'development'
    }),
    new ExtractTextPlugin({
      disable: ENV === 'development',
      filename: 'index.css'
    }),
    new webpack.LoaderOptionsPlugin({
      test: /\.jsx?$/,
      options: {
        eslint: {
          emitWarning: ENV === 'development',
          emitError: ENV === 'staging' || ENV === 'production'
        }
      }
    })
  ]
};

const environmentConfig = (() => {
  switch (ENV) {
    case 'production':
      return configs.production;
    case 'staging':
      return configs.staging;
    case 'development':
    default:
      return configs.development;
  }
})();

export default merge(commonConfig, environmentConfig);
