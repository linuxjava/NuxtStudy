<template>
  <div>
    test
  </div>

</template>

<script>
export default {
  name: "test",
  validate({params, query}) {
    console.log('validate', params, query)
    // 注意返回值，true：执行正常舔砖；false：页面找不到
    return true
  },
  created() {
    console.log(this.$route.params)
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>
