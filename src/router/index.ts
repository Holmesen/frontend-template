/** * createRouter 这个为创建路由的方法 * createWebHashHistory 这个就是vue2中路由的模式， * 这里的是hash模式，这个还可以是createWebHistory等 * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import baseRoutes from './modules/base'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    name: 'home',
    component: async () => await import('@/views/home/home.vue'),
    alias: '/home',
    meta: {
      title: '首页',
    },
  },
  ...baseRoutes,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
