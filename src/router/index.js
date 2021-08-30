import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Produit from '../views/Produits.vue'
import Utilisateur from '../views/Utilisateur.vue'
import produitdet from '../components/produit_detail.vue'
import addproduit from '../components/Add_produit.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
   {
    path: '/addproduit',
    name: 'Add_produit',
    component: addproduit
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/produit',
    name: 'Produit',
    component: Produit
  },
 {
    path: '/produit/:id',
    name: 'Produit',
    component: produitdet
  },

  {
    path: '/utilisateur',
    name: 'Utilisateur',
    component: Utilisateur
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
