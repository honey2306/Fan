import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/home/Index.vue'
import blog from '../views/blog/Index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
