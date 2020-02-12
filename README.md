# what I did
* 让 webpack 能编译 js
> 需要配置 webpack.config.js
* 生成 index.html
> 需要 html-webpack-plugin
* 让 webpack 支持 vue
> 需要 vue-loader
* 让 webpack 支持 TypeScript
> 需要 ts-loader
* 在 ts 中引用 vue 组件
> 配置 shims-vue.d.ts 声明文件
* 在 vue 中使用 ts
> 使用 vue-class-component 即可


# start
```
npm run start:dev
```
# build
* development environemnt
```
npm run build:dev
```
* production environemnt
```
npm run build
```