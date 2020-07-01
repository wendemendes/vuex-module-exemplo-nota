import shop from '../../api/produto'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
})

const getters = {

  itensNotaFiscal: (state, getters, rootState) => {
    return state.items;
  },
}

const actions = {

  addProdutoNotaFiscal({ state, commit }, produto) {

    commit('pushProdutoNaNota', produto)

  }
}

const mutations = {
  pushProdutoNaNota(state, produto) {
    state.items.push(produto)
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
