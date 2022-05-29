import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/home/Index.vue'
import blog from '../views/blog/Index.vue'
import blogDetail from '../components/ArticleDetail.vue'

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
  },
  {
    path: '/blog/detail/:id',
    component: blogDetail,
    name: 'detail'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
