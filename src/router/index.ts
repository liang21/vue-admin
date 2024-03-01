import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error/404.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
