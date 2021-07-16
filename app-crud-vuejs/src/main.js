import Vue from 'vue'
import App from './App.vue'
import Cadastro from './Cadastro.vue'

const NotFound = { template: '<p>Página não encontrada</p>'}
const Home = App;
const CadastroPage = Cadastro;

const routes = {
  '/': Home,
  '/cadastro': CadastroPage
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
