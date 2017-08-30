import webpack from 'webpack';

export default {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: '3000'
  },
  devtool: 'cheap-eval-source-map',
};
