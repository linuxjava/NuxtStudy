<template>
  <div>
    <ul>
      <li>test1</li>
    </ul>
    <Header/>
    <h2>首页</h2>
    <Bottom/>
  </div>
</template>

<script>
import Header from "@/components/Bottom";
export default {
  name: "css",
  components: {Header}
}
</script>

<!--
添加scoped后只会影响本vue文件的源代码，不会影响从components中引入的组件；去掉scoped会影响components中引入的组件
-->
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
