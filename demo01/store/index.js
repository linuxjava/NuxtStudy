export const state = () => ({
  token: ''
})

export const mutations = {
  setToken (state, token) {
    state.token = token
    this.$cookies.set('token', token)
  },
  getToken(state) {
    //从cookie中加载token
    state.token = this.$cookies.get('token');
    console.log('getToken, ' + state.token)
  }
}

export const actions = {
  nuxtServerInit (store, context) {
    console.log('nuxtServerInit')
    // store.commit('setToken', '11111')
    // console.log(store)
  }
}
