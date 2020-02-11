#### 让 webpack 能编译 js
* 初始化 package.json
```
npm init -y
```
* 安装基本依赖
```
npm install webpack@4.22.0 webpack-cli@3.1.2 -D
```
* 安装 webpack init 所需依赖 
```
npm install -D @webpack-cli/init@0.2.2
```
* 初始化 webpack.config.js
```
npx webpack init
```
* build:dev（开发环境下编译打包，生成 dist 目录）
```
npx webpack
```

---
#### 生成 index.html
* 安装 webpack-dev-server，搭建临时服务器
```
npx webpack-dev-server -D
```
* 安装 html-webpack-plugin，生成 html 页面
```
npx html-webpack-plugin -D
```
之后执行 npm run start:dev，服务器会将 index.html 作为默认展示页面。修改 index.js（单页面应用只修改js）,index.html 会自动刷新
---

#### 支持 vue






---
* 指定 webpack.dev.js 为配置文件
```
npx webpack --config webpack.dev.js
```
* build:dev（开发环境下编译打包，生成 dist 目录）
```
npx webpack
```
* build （生产环境下编译打包，生成 dist 目录，文件会被压缩）
```
npx webpack --config webpack.prod.js
```
```
// webpack.prod.js
const path = require('path');

module.exports = {
  mode:'production'  
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
* bundle:入口文件（src/index.js）
> 单页面应用的开发都是在 js 页面中进行的
* webpack.config.js
```
  output: {
    filename: 'main.js', // 编译后的 js 文件(index.js->main.js)
    path: path.resolve(__dirname, 'dist')
  }
```