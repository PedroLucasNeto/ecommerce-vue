import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/management',
      name: 'management',
      component: () => import('@/pages/management/Management.vue'),
      children: [
        {
          path: 'users',
          name: 'users',
          component: () => import('@/pages/management/components/Users.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('@/pages/management/components/Products.vue')
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('@/pages/management/components/Orders.vue')
        }
      ],
     
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
