<template>

</template>

<script>
export default {
  name: "lifecycle",
  validate({params, query}) {
    console.log('validate', params, query)
    // 注意返回值，true：执行正常舔砖；false：页面找不到
    return true
  },
  asyncData({store,params}){
    console.log('asyncData, pages中的页面来请求数据')
  },
  fetch({app,store,params}){
    console.log('fetch, fetch 方法用于在渲染页面前填充应用的状态树（store）数据， ' +
      '与 asyncData 方法类似，不同的是它不会设置组件的数据')
  },
  beforeCreate(){
    console.log( 'beforeCreate' );
  },
  created(){
    console.log( 'created' );
  },
  beforeMount(){
    console.log( 'beforeMount' );
  },
  mounted(){
    console.log('mounted');
  },
  beforeUpdate(){
    console.log('beforeUpate');
  },
  updated(){
    console.log('updated');
  },
  beforeDestroy(){
    console.log('beforeDestroy');
  },
  destroyed(){
    console.log('destroyed');
  }
}
</script>

