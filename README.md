# 工程结构-demo01

## 工程结构

学习目标：熟悉工程结构

安装过程中的选项

```
Programming language	:   程序设计语言
Package manager			:   包管理器
UI framework			:	ui框架
Nuxt.js modules			:   nuxt的js模块
Linting tools			:	代码校验工具
Testing framework		:   测试框架
Rendering modules       :	渲染模式
Deployment target		:   部署目标
Development tools       :   开发工具
Version control system  :   版本控制工具
```

目录结构

```java
pages  			:  存放页面	
	类似于src/views
components  	:  存放组件
	类似于src/components
static      	:  存放静态资源
	类似于src/assets
store			:  vuex状态树
	类似于src/store
nuxt.config.js  : 全局的配置文件
	类似于vue.config.js
```

nuxt在components中定义的组件无须像vue中那样注册后使用，可以直接使用

<img src="images\1.png" style="zoom:80%;" />

## 生命周期

<img src="images\2.svg"/>

### 服务端生命周期

- **nuxtServerInit**

	nuxtServerInit( store , context ){}
	参数1  ： vuex上下文
	参数2  ： nuxt上下文

- **middleware**

类似于vue中的导航守卫

```js
middleware({store,route,redirect,params,query,req,res}){}
```

全局使用，在nuxt.config.js进行配置

```js
router:{
	middleware:'名称'
}

新建middleware目录 ==> 名称.js
```

局部使用，在页面page中定义

```
<script>
	export default {
	  middleware:'auth'
	}
</script>
新建middleware目录 ==> auth.js
```

```js
//auth.js
export default function ({ store, route, redirect, params, query, req, res }) {
  const token = store.state.token
  console.log('全局导航守卫', token)
}
```

或

```
<script>
export default {
 	middleware({ store, route, redirect, params, query, req, res }){

	}
}
</script>
```

- **validate**

 *Nuxt.js 可以让你在动态路由对应的页面组件中配置一个校验方法用于校验动态路由参数的有效性。* 

```
validate({params,query}){}
```

在页面中定义如下

```js
***校验url参数
<script>
export default {
  validate({params,query}){
  	console.log('validate');
  	return /^\d+$/.test(query.id);
  }
}
</script>
```

- **asyncData**

 *你可能想要在服务器端获取并渲染数据。Nuxt.js 添加了*`asyncData`*方法使得你能够在渲染组件之前异步获取数据* 

```
asyncData({store,params}){}
```

- **fetch**

 *fetch 方法用于在渲染页面前填充应用的状态树（store）数据， 与 asyncData 方法类似，不同的是它不会设置组件的数据。* 

```
fetch({app,store,params}){}
```

### 服务端和客户端共有生命周期

```
beforeCreate
created
```

### 客户端生命周期

```
beforeMount
mounted
beforeUpdate
updated
beforeDestroy
destroyed
```

## 路由

### nuxt路由

#### 基础路由

```
<nuxt-link to="/router/test">基础路由</nuxt-link><br>
```

```html
<template>
  <div>
	<button @click="onRouter">基础路由js形式</button><br>
  </div>
</template>

<script>
export default {
  name: "router",
  methods: {
    onRouter() {
      this.$router.push({
        path: '/router/test',
        query: {
          key: 1
        }
      })

      //注：
      // 1.如果使用params传参，那么需要使用路有名称，否者validate中接收不到params参数
      // 2.nuxt中自动生成路由名称会自动加上前缀router-
      // this.$router.push({
      //   name: 'router-test',
      //   params: {
      //     key: 1
      //   }
      // })
    }
  }
}
</script>
```

#### 动态路由

```
<nuxt-link to="/router/child/100000000">动态路由</nuxt-link><br>
```

#### 嵌套路由

#### 路由传参

```js
<!--
1. to前面要加:，否则有问题
2. 使用path时无法传递params参数
3. 使用name路由名称时，nuxt中自动生成路由名称会自动加上前缀router-
-->
<nuxt-link :to="{path: '/router/test', query:{key:2}}">nuxt-link path(路由参数校验)</nuxt-link><br>
<nuxt-link :to="{name: 'router-test', params:{key:1}, query:{key:2}}">nuxt-link name(路由参数校验)</nuxt-link><br>

```

### 自定义路由

下载 @nuxtjs/router	

```js
npm i @nuxtjs/router -S
```

在nuxt.config.js的modules模块进行配置

```js
modules: [
	'@nuxtjs/router'
],
```

nuxt项目根目录创建router.js文件，文件内容如下日工自定义路由

```js
// 演示自定义路由
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/pages/index.vue";
import Lifecycle from "@/pages/lifecycle/lifecycle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/lifecycle/lifecycle",
    name: "Lifecycle",
    component:Lifecycle
  },
];

export function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes
  })
}
```

这样nuxt就会使用指定的路由地址



## 导航守卫

nuxt导航守卫根据是否使用了自定义路由分为两种场景：非自定义路由和自定义路由

### 非自定义路由

#### 中间件middleware

- 全局

在nuxt.config.js进行配置

```js
router:{
	middleware:'名称'
}

新建middleware目录 ==> 名称.js
```

- 局部使

在页面page中定义

```js
<script>
	export default {
	  middleware:'auth'
	}
</script>
新建middleware目录 ==> auth.js
```

```js
//auth.js
export default function ({ store, route, redirect, params, query, req, res }) {
  const token = store.state.token
  console.log('全局导航守卫', token)
}
```

或

```js
<script>
export default {
 	middleware({ store, route, redirect, params, query, req, res }){

	}
}
</script>
```

#### 插件

插件定义的守卫是全局的

nuxt.config.js配置

```
plugins: [
	'~/plugins/router.js'
]
```

新建plugins/router.js

```js
export default ({app})=>{
  app.router.beforeEach((to,from,next)=>{
    console.log( 'plugins: ', to);
    next();
  })
}
```

### 自定义路由

如果在nuxt框架中使用自定义路由，那么导航守卫的使用与 [Vue Router](https://v3.router.vuejs.org/zh/) 使用完全一致。

- 首先参考"自定义路由"配置好自定义路由列表
- 然后如下代码设置导航守卫

```js
// 演示自定义路由
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/pages/index.vue";
import Lifecycle from "@/pages/lifecycle/lifecycle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/lifecycle/lifecycle",
    name: "Lifecycle",
    component:Lifecycle
  },
];

let router = new VueRouter({
  mode: 'history',
  routes
})

//演示自定义路由下的导航守卫
router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
  console.log(to)
  next()
})

export function createRouter() {
  return router
}
```



## localStorage和cookie

在导航守卫中使用nuxt框架保存了token到vuex中，vuex并不能实现持久化存储，当网站关闭后token就没有了；而因为nuxt框架服务端不能使用localStorage和cookie，这样导致在实际开发中数据无法存储到本地。

>  解决方案：https://www.npmjs.com/package/cookie-universal-nuxt

### cookie-universal-nuxt

- 安装下载

```
npm i --save cookie-universal-nuxt
```

- nuxt.config.js配置

```
modules: [
	'cookie-universal-nuxt'
]
```

- 使用

```
this.$cookies.set()
this.$cookies.get()
```

### demo测试

1.页面存在登录和购买2个按钮

2.点击登录，成功后会将token存储到cookie中

3.点击购买，在paying.vue的middleware拦截器中会从cookie中获得token，如果没有token重定向登录

## Nuxt配置

### head

页面组件局部配置

```html
<script type="text/javascript">
export default{
	head(){
		return {
			title: '关于我们',
		    meta: [
		      { hid: 'description', name: 'description', content: '此处是网站描述' },
		      { hid: 'keywords', name: 'keywords', content: '此处是网站关键词' }
		    ]
		}
	}
}
</script>
```

### css

- 全局css

<img src="images\2.png"/>

- 局部css

因为nust工程默认开启了自动从components中导入组件（上图所示），所以在页面中引入组件时不需要像vue工程中那样单独引入组件

<img src="images\3.png"/>

```
<style scoped>
  h2{
    background-color: red;
  }
</style>
```

添加scoped后只会影响本vue文件的源代码，不会影响从components中引入的组件；去掉scoped会影响components中引入的组件

- scss

安装sass

```
npm install --save-dev sass sass-loader@10
```

```
<style scoped lang="scss">
  h2{
    background-color: red;
  }
  ul{
    li{
      background-color: antiquewhite;
    }
  }
</style>
```

### plugins

安装elementUI

```
npm i element-ui -S
```

定义插件引入elementUi js

<img src="images\4.png"/>

在全局配置文件中引入elementUi

<img src="images\5.png"/>

### components

- axios安装

nuxt方式安装

```
1.1 npm install @nuxtjs/axios -
1.2 nuxt.config.js进行配置
modules: [
	'@nuxtjs/axios',
],
```

vue方式安装

```
npm install axios -S
```

两者区别：vue方式安装，需要在使用的页面中手动去import axios才能使用；nuxt方式无需主动引用，直接this.$axios。

- asyncData生命周期 || 方法	

	pages 目录中的页面组件才可以去用
	
		***注意components内的.vue文件是不可以使用的
	
	asyncData中没有this

- fetch生命周期 || 方法


	fetch只能用于components中的组件
	fetch是有this的

asyncData与fetch差异

https://www.cnblogs.com/China-Dream/p/15667561.html

### Loading

- nuxtjs loading默认是开启的，也可以关闭


	//nuxt.config.js中
	loading:false
	
	//修改默认配置
	loading: {
	   color: 'blue',
	   height: '10px'
	},

- 自定义

	loading: '~/components/loading.vue',
	
	loading.vue中写入对应的内容
	
	查看api：https://www.nuxtjs.cn/api/configuration-loading

- 你也可以不用nuxtjs的loading


	loading:false
	
	自己在axios中进行封装
## VUEX

核心了解nuxt中vuxe的使用以及模块化vuex文件



# 学习参考

NuxtJS完整视频 (预渲染、服务端渲染)【完整项目重构】

https://www.bilibili.com/video/BV1GT4y1X7aC?p=9&spm_id_from=pageDriver

尚硅谷JS模块化教程(js模块化精讲含commonjs、AMD、ES6、CMD规范)

https://www.bilibili.com/video/BV18s411E7Tj?p=10&spm_id_from=333.880.my_history.page.click

尚硅谷新版Webpack实战教程(从入门到精通)

https://www.bilibili.com/video/BV1e7411j7T5?p=5&spm_id_from=333.880.my_history.page.click