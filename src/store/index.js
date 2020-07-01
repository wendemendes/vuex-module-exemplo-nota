import Vue from 'vue'
import Vuex from 'vuex'
import nota from './modules/nota'
import buscaProduto from './modules/buscaProduto'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    nota,
    buscaProduto
  }

})

