<template>
  <div>
    <a href="/router/test">a链接形式(不推荐)</a><br>
    <nuxt-link to="/router/test">基础路由</nuxt-link><br>
    <button @click="onRouter">基础路由js形式</button><br>
    <nuxt-link to="/router/child/100000000">动态路由</nuxt-link><br>
    <!--
    1. to前面要加:，否则有问题
    2. 使用path时无法传递params参数
    3. 使用name路由名称时，nuxt中自动生成路由名称会自动加上前缀router-
    -->
    <nuxt-link :to="{path: '/router/test', query:{key:2}}">nuxt-link path(路由参数校验)</nuxt-link><br>
    <nuxt-link :to="{name: 'router-test', params:{key:1}, query:{key:2}}">nuxt-link name(路由参数校验)</nuxt-link><br>
    <nuxt-link to="/router/child/TestChild">嵌套路由</nuxt-link><br>
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

<style scoped>

</style>
