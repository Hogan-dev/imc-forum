import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: import(
      /* webpackChunkName: "Login" */ '../views/login/Login.vue'
    )
  },
  {
    path: '/reg',
    name: 'Reg',
    component: import(/* webpackChunkName: "Reg" */ '../views/login/Reg.vue')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: import(
      /* webpackChunkName: "Forget" */ '../views/login/Forget.vue'
    )
  }
]

const router = new VueRouter({
  routes
})

export default router
