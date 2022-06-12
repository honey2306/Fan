import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import index from '../views/home/Index.vue'
import blog from '../views/blog/Index.vue'
import blogDetail from '../components/ArticleDetail.vue'
import travel from '../views/travel/Index.vue'
import inner from '../views/Inner.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/inner',
    name: 'inner',
    component: inner,
    redirect: '/',
    children: [
      {
        path: '/blog',
        name: 'blog',
        component: blog
      },
      {
        path: '/travel',
        name: 'travel',
        component: travel
      },
      {
        path: '/blog/detail/:id',
        component: blogDetail,
        name: 'detail'
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
