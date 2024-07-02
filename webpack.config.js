// webpack.config.js

const path = require('path');

module.exports = {
  mode: 'development',
  entry: '/docs/src/index.js',   // 入口文件路径
  output: {
    filename: 'bundle.js',   // 输出文件名
    path: path.resolve('./docs', 'dist'),  // 输出文件夹路径
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'docs'),
    },
    compress: true,
    port: 8080,
    hot: true,
  },
};

