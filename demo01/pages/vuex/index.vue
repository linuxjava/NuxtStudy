<template>
  <div>
    用户名{{username}}
    <button @click="changeUsername('王五')">改变名称</button>
    <button @click="btn">改变名称</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: "index",
  computed: {
    ...mapState({
      username: state => state.user.username
    })
  },
  methods: {
    ...mapMutations({
      changeUsername: 'user/changeUsername'
    }),
    btn(){
      this.$store.commit('user/changeUsername', '李四')
    }
  }
}
</script>

<style scoped>

</style>
