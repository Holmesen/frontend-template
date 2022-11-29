import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'home',
    component: async () => await import('@/views/home/home.vue'),
  },
]

export default routes
