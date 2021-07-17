import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cadastro',
    name: 'Cadastro',

    component: () => import('../views/Cadastro.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
