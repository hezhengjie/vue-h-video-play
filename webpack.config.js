var webpack = require('webpack')

module.exports = {
  entry: './demo/main.js',
  output: {
    path: './demo/build',
    publicPath: '/build/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.less$/,
        loader:"style!css!postcss!less"
      },
      {
        test: /\.css$/,
        loader:"style!css!postcss!less"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ["url?limit=25000"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
