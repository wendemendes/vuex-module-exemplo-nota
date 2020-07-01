import apiProduto from '../../api/produto'

// initial state
const state = () => ({
  all: []
})

// getters
const getters = {}

// actions
const actions = {
  getAllProdutos ({ commit }) {
    apiProduto.getProdutos(produtos => {
      commit('setProdutos', produtos)
    })
  }
}

// mutations
const mutations = {
setProdutos (state, produtos) {
    state.all = produtos
  },

  decrementProductInventory (state, { id }) {
    const produto = state.all.find(produto => produto.id === id)
    produto.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
