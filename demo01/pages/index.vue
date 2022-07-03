<template>
  <div>
    <nuxt-link to="/lifecycle/lifecycle">生命周期</nuxt-link><br>
    <nuxt-link :to="{name: 'router-router', params:{key:1}, query:{key:2}}">路由</nuxt-link><br>
    <nuxt-link to="/each/each">导航守卫</nuxt-link><br>
    <nuxt-link to="/cookie/cookie">服务端不能使用localStorage和cookie的解决方案</nuxt-link><br>
    <nuxt-link to="/config/head">nuxt配置之head</nuxt-link><br>
    <nuxt-link to="/config/css">nuxt配置之css</nuxt-link><br>
    <nuxt-link to="/config/plugin">nuxt配置之plugin(elementUi)</nuxt-link><br>
    <nuxt-link to="/config/components">nuxt配置之components(axios)</nuxt-link><br>
    <nuxt-link to="/vuex">nuxt之vuex</nuxt-link><br>
  </div>

</template>

<script>
export default {
  name: 'IndexPage',
  // 方式1 指定middleware目录下的js文件
  // middleware: 'auth1',
  // 方式2 指定middleware函数
  middleware() {
    console.log('页面middleware1')
  }
}
</script>
