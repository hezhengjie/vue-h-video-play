var webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "vue-h-datepicker.js",
    library: ["vueHDatePicker"],
    libraryTarget: "umd"
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
      }
    ]
  }
}

// if (process.env.NODE_ENV === 'production') {
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.optimize.OccurenceOrderPlugin()
//   ])
// }
if (process.env.NODE_ENV === 'production') {
  module.exports.output.filename = "vue-h-datepicker.min.js",
      module.exports.plugins = [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"production"'
          }
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          compress: {
            warnings: false
          }
        })
      ];
} else {
  module.exports.devtool = '#source-map'
}