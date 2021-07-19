import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//Sistema de rotas

const routes = [
  {
    //ROTA - HOME
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    //ROTA - CADASTRO
    path: '/cadastro',
    name: 'Cadastro',

    component: () => import('../views/Cadastro.vue')
  },
  {
    //ROTA - UPDATE
    path: '/update/:id',
    name: 'Update',
    props: true,

    component: () => import('../views/Update.vue')
  },
  {
    //ROTA - LOGIN
    path: '/login',
    name: 'Login',
    
    component: () => import('../views/Login.vue')
  },
  {
    //ROTA - REGISTER
    path: '/register',
    name: 'Register',

    component: () => import('../views/Register.vue')
  }
]

//Cria o sistema de rotas e logo em seguida o exporta


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
