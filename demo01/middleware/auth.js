export default function ({ store, route, redirect, params, query, req, res }) {
  const token = store.state.token
  console.log('全局导航守卫', token)
}
