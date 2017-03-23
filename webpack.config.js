const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, ""),
    compress: true,
    port: 8871
  },
  module: {
    rules: [
      {
       test: /\.js$/,
       exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader',
       query: {
         presets: ['es2015']
       }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'style-loader!css-loader!sass-loader'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
   // 开启全局的模块热替换(HMR)
  //  new ExtractTextPlugin("index.scss")
  new webpack.NamedModulesPlugin(),
   // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

   // 压缩
   new webpack.LoaderOptionsPlugin({
     minimize: true
   }),
   new webpack.optimize.UglifyJsPlugin({
     beautify: false,
     comments: false,
     compress: {
       warnings: false
     }
   })
 ],
}
