// 演示自定义路由
import Vue from "vue";
import VueRouter from "vue-router";
import Index from "@/pages/index.vue";
import Lifecycle from "@/pages/lifecycle/lifecycle";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/lifecycle/lifecycle",
    name: "Lifecycle",
    component:Lifecycle
  },
];

let router = new VueRouter({
  mode: 'history',
  routes
})

//演示自定义路由下的导航守卫
router.beforeEach((to, from, next) => {
  /* 必须调用 `next` */
  console.log(to)
  next()
})

export function createRouter() {
  return router
}
