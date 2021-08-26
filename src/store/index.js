import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	user:[],
  	url:"http://127.0.0.1:8000/api",
  	marque:[],
  	categorie:[],
  	produits:[],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
