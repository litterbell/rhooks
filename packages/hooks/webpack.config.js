// 实现CDN代码产出 umd 格式的库
const merge = require('webpack-merge');
const common = require('../../webpack.common.js');
const path = require('path');

module.exports = merge(common,
  {
    entry: './es/index.js',
    output: {
      filename: 'rhooks.js',
      library: 'rhooks',
      path: path.resolve(__dirname, 'dist')
    }
  }
)