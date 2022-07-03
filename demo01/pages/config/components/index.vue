<template>
  <div>
    {{pageData}}
    <hr>
    <ComponentTest/>
  </div>
</template>

<script>
import ComponentTest from "@/components/ComponentTest";
export default {
  name: "index",
  components: {ComponentTest},
  data() {
    return {}
  },
  // asyncData只能用于页面中，且asyncData中是不能使用this的
  async asyncData({ $axios }) {
    let pageData = await $axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders', {progress: false})
    //asyncData中通过return返回数据，数据最终会和data进行合并
    return {
      pageData
    }
  }
}
</script>

<style scoped>

</style>
