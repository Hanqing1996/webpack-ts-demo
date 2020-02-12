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
> 首先要安装 vue,然后让 webpack 认识 vue
1. 安装 vue
```
npm install -D vue
```
2. 让 webpack 认识 vue
* 安装所需包
```
npm install -D vue-loader vue-template-compiler
```
* 配置 webpack.conf.js
```
const VueLoaderPlugin = require('vue-loader/lib/plugin')

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
    new VueLoaderPlugin()
]
```
---

#### 支持 TypeScript
1. 安装依赖
```
npm install --save-dev typescript ts-loader
```
2. 添加 tsconfig.json 及 ts 文件
```
  webpack-demo
  |- package.json
+ |- tsconfig.json
  |- webpack.config.js
  |- /dist
    |- bundle.js
    |- index.html
  |- /src
    |- index.js
+   |- index.ts
  |- /node_modules
```
3. 配置 tsconfig.json
```
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}
```
4. 配置 webpack.config.js
> 主要是让 webpack 认识 ts 以及将 index.ts 设置为入口文件
```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
不一定要将 ts 作为入口文件，如果入口文件 index.js 有用到 ts 的地方，webpack 会自动识别并调用。




#### 在 ts 中引用 vue
* 想要在 ts 中引用某个 vue 组件,需要 shims-vue.d.ts 的配合（叫 xx.d.ts 也行，且该文件必须与要引用的 vue 组件在同一目录下）
```
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```
> 比较尴尬的是可能这个类型声明文件也可能报错（moundle not found），那么就说明应该是 ts 对 vue 的支持有问题，应该修改 tsconfig.json（最直接有效的方法是找一个确定能支持 vue 的项目，比如 vue-cli 下的 ts 项目，抄它的 tsconfig.json）


#### 在 vue 中使用 ts
安装  vue-class-component 即可，不必做多余的配置
```
npm install -D vue-class-component 
```
接下来就可以在组件中使用 ts 了
```
<template>
  <div></div>
</template>

<script lang="ts">
let s:string='hi'
console.log(s)
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
})
export default class hello extends Vue {
  created () {
  }
}
</script>
```


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

---
> 不同于 webpack,parcel 遵从"约定大于配置",主要体现在
1. parcel 没有类似于 webpack 的配置文件。指定入口文件是通过指令实现的
```
parcel index.html
```
而 webpack 则是先将 entry 文件写入 webpack.config.js,这样在执行以下指令时 webpack 就知道要打包编译哪个文件了
```
webpack
```
2. parcel 以 html 为入口文件，而 webpack 以 js 为入口文件
3. parcel 对 vue "开箱即用"，而 webpack 需要配置 webpack.config.js 及安装一系列插件



----
* vsCode 下直接这么写文件路径可能会报错，因为 sb 的 vscode 会认为这是某个包的路径
```
import hello from './components/hello.vue'
```
应该写成如下形式
```
import hello from '../src/components/hello.vue'
```






