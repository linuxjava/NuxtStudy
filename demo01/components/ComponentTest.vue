<template>
  <div>
    {{componentData}}
  </div>
</template>

<script>
export default {
  name: "ComponentTest",
  data() {
    return {
      componentData: []
    }
  },
  // fetch只能用于components中，且asyncData中可以直接使用this的
  async fetch() {
    let componentData = await this.$axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders', {progress: false})
    console.log(componentData)
    this.componentData = componentData
  }
}
</script>

<style scoped>

</style>
