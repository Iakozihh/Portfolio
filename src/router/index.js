import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import CVView from '../views/CVView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('../views/MusicView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CVView.vue')
    },
    {
      path: '/project/:id',
      props: true,
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

export default router
