<template>
  <div>
    <input type="text" name="" v-model="userName">
    <input type="text" name="" v-model="userPwd">
    <button @click="btnLogin">登录</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  name: "login",
  data() {
    return {
      userName:'',
      userPwd:''
    }
  },
  methods: {
    ...mapMutations(['setToken']),
    btnLogin() {
      this.setToken('adfasfasd')
      this.$router.push('/cookie/cookie')
    }
  }
}
</script>

<style scoped>

</style>
