const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
          // ... 其它规则
          {
            test: /\.vue$/,
            loader: 'vue-loader'
          }
        ]
      },
    plugins: [
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin()
    ]
};