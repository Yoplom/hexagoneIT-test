import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import page404 from '../components/page404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Les excuses de dev',
      component: HelloWorld
    },
    {
      path: '/lost',
      name: 'I\'m lost',
      component: () => import('../components/lost.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page404',
      component: page404
    },
    {
      path: '/code=:http_code(\\d+)',
      name: 'http',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../components/admin.vue')
    },
  ]
})

export default router
