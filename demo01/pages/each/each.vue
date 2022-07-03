<template>

</template>

<script>
export default {
  name: "each",
  // 方式1 指定middleware目录下的js文件
  // middleware: 'auth1',
  // 方式2 指定middleware函数
  middleware() {
    console.log('页面导航守卫')
  }
}
</script>

<style scoped>

</style>
