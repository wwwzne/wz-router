# wz-router

> 简易前端路由控制库

## 安装

```shell
npm i wz-router
```

## 引入

```javascript
//整个库仅wzRouter一个对象(微型设计)
import {wzRouter} from "wz-router"
```

## 使用

### 初始化

```javascript
wzRouter.init()
```

### 设置路由

```javascript
wzRouter.addRoute("/about",()=>{
    //逻辑
})
wzRouter.addRoute("/home",()=>{
    //逻辑
})
wzRouter.addRoute("/",()=>{
    //逻辑
})
```

### 设置404

```javascript
wzRouter.setNotFound(()=>{
    //逻辑
})
```

### 页面跳转

```javascript
wzRouter.navigate(path)
```
