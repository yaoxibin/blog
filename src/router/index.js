import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/login.vue'
// const Login=()=>import('@/views/login/login.vue')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
