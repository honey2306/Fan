import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/home/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
