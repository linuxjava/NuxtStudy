<template>
  <div>购物</div>
</template>

<script>
export default {
  name: "paying",
  middleware({ store, route, redirect, params, query, req, res }) {
    //从cookie中加载token
    store.commit('getToken')
    //如果没有token则说明没有登录，跳转到登录页
    console.log(store.state)
    if (!store.state.token) {
      redirect('/cookie/login');
    }
  }
}
</script>

<style scoped>

</style>
