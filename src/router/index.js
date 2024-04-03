import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export const routerMapping = [

]
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/login/index.vue')
    },
    ...routerMapping
  ]
})

export default router
