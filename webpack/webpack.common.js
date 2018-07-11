const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// 获得路径
const resolve = function(src) {
  return path.join(__dirname, "..", src);
};

let htmlWebpackPluginConfig = [];

function getEntry(globPath) {
  let entries = {};
  glob.sync(globPath).forEach(function(entry) {
    entry.replace(/\/([^\/]+)\/index.js$/, function(a, pathname) {
      entries[pathname] = entry;
      // 配置生成的html文件，定义路径等
      var conf = {
        filename: pathname + '.html',
        // 模板路径
        template: resolve('src/index.html'),
        inject: true // js插入位置
      };
      // 需要生成几个html文件，就配置几个HtmlWebpackPlugin对象
      htmlWebpackPluginConfig.push(new HtmlWebpackPlugin(conf));
    })

  });
  return entries;
}


module.exports = {
  entry: {
    vendor: ['vue', 'vue-router'],
    ...getEntry(resolve('src/modules/*/index.js'))
  },
  output: {
    filename: '[name].[hash].js',
    path: resolve('dist')
  },
  plugins: [
    //引入外部类库
    // new webpack.ProvidePlugin({
    //   chrome: 'chrome'
    // }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin('dist', {
      root: resolve(''),
    }),
    ...htmlWebpackPluginConfig
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }, {
        test: /\.js$/,
        loader: 'babel-loader'
      }, {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
          'vue-style-loader',
        ],
      }, {
        test: /\.(ttf|woff|svg|eot)$/,
        use: [
          'url-loader?name=../fonts/[name].[ext]?[hash]'
        ],
      }, {
        // 图片加载器，file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
        // 如下配置，将小于8192byte的图片转成base64码
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=8192&name=../images/[name].[ext]?[hash]',
      }
    ]
  },
  resolve: {
    // 可以忽略的文件类型
    extensions: ['.vue'],
    // 别名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      src: resolve('src'),
      common: resolve('src/common'),
      modules: resolve('src/modules'),
      base: resolve('src/base'),
      assets: resolve('src/assets'),
    }
  }
};
