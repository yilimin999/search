import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/msg'
  },
  {
    path: '/msg',
    name: 'msg',
    component: () => import(/* webpackChunkName: "msg" */ '../views/Msg.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "list" */ '../views/List.vue')
  },
  {
    path: '/kong',
    name: 'kong',
    component: () => import(/* webpackChunkName: "kong" */ '../views/Kong.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
