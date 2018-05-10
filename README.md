# 研究小程序模板动态生成

> 主要方向为利用第三方托管来为客户自动生成想要的小程序。

## 模板库结构

```
├── app                                         // 小程序的一些基本配置
├── ext.json                                    // 用于开发调试使用的配置表    
├── utils                                       // 基本的函数封装，配置等
|      ├──── api.js                             // 请求的API
|      ├──── config.js                          // 公共配置
|      ├──── rest.js                            // 微信网络请求的封装
|      ├──── util.js                            // 工具类函数 
├── pages                                       // 普通页面目录
|      ├──── index                              // 首页
|      ├──── product                            // 商品详情
|      ├──── category                           // 商品分类
|      ├──── search                             // 商品搜索
|      ├──── subset                             // 商品集合
|      ├──── webView                            // H5
├── components                                  // 组件模板目录
       ├──── carousel                           // 轮播图组件
       ├──── products                           // 商品导航组件
       ├──── search                             // 商品收缩组件
├── project.config.json                         // 小程序的项目配置
```

## 开发须知

> 开发应遵循ES6的写法

> 每个模板应该对应不同的分支，譬如 origin/template/1，origin/template/2

每个分支的代码代表了不同的小程序风格。

> 请求的接口域名由 config 来进行配置
