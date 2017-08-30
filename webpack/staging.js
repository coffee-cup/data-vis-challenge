import webpack from 'webpack';

export default {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('staging')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true
      }
    })
  ]
};
