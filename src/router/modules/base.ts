import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: async () => await import('@/views/home/home.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: async () => await import('@/views/test/test.vue')
  },
  {
    path: '/test2',
    name: 'test2',
    component: async () => await import('@/views/test/test2.vue')
  }
]

export default routes
