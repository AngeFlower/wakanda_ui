import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Produit from '../views/Produits.vue'
import Utilisateur from '../views/Utilisateur.vue'
import produitdet from '../components/produit_detail.vue'
import Marque from '../views/Marque.vue'
import Categorie from '../views/Categorie.vue'
import Cart from '../components/Add_cart.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/marque',
    name: 'Marque',
    component: Marque
  },
   {
    path: '/categorie',
    name: 'Categorie',
    component: Categorie
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
    {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
