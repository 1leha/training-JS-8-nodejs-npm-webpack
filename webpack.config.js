const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// const isProd = process.env.NODE_ENV === 'production';
// const isDev = !isProd;

module.exports = {
  // mode: 'production',
  mode: 'development',
  target: 'web',

  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.s[ac]ss$/i,
  //       use: [
  //         // Creates `style` nodes from JS strings
  //         // 'style-loader',
  //         // Translates CSS into CommonJS
  //         // 'css-loader',
  //         // Compiles Sass to CSS
  //         // 'sass-loader',
  //       ],
  //     },
  //   ],
  // },

  plugins: [
    new CleanWebpackPlugin(),
    // new WebpackNotifierPlugin(), // и другие...
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: path.resolve(__dirname, 'src/index.html'), // шаблон
      filename: 'index.html', // название выходного файла
    }),
  ],

  // Control how source maps are generated

  // devtool: isDev ? 'source-map' : false,
  devtool: 'inline-source-map',

  devServer: {
    historyApiFallback: true,
    // open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
