import shop from '../../api/produto'

// initial state
// shape: [{ id, quantity }]
const state = () => ({
  items: [],
  checkoutStatus: null
})

// getters
const getters = {
  
  itensNotaFiscal: (state, getters, rootState) => {
    return state.items;
  },

//   cartTotalPrice: (state, getters) => {
//     return getters.cartProducts.reduce((total, product) => {
//       return total + product.price * product.quantity
//     }, 0)
//   }
}

// actions
const actions = {
//   checkout ({ commit, state }, products) {
//     const savedCartItems = [...state.items]
//     commit('setCheckoutStatus', null)
//     // empty cart
//     commit('setCartItems', { items: [] })
//     shop.buyProducts(
//       products,
//       () => commit('setCheckoutStatus', 'successful'),
//       () => {
//         commit('setCheckoutStatus', 'failed')
//         // rollback to the cart saved before sending the request
//         commit('setCartItems', { items: savedCartItems })
//       }
//     )
//   },


    addProdutoNotaFiscal({ state, commit }, produto) {
    
    commit('pushProdutoNaNota', produto)

    // if (product.inventory > 0) {
    //   const cartItem = state.items.find(item => item.id === product.id)
    //   if (!cartItem) {
    //     commit('pushProductToCart', { id: product.id })
    //   } else {
    //     commit('incrementItemQuantity', cartItem)
    //   }
    //   // remove 1 item from stock
    //   commit('products/decrementProductInventory', { id: product.id }, { root: true })
    // }
  }
}

// mutations
const mutations = {
    pushProdutoNaNota (state, produto) {
    state.items.push(produto)
  },

//   incrementItemQuantity (state, { id }) {
//     const cartItem = state.items.find(item => item.id === id)
//     cartItem.quantity++
//   },

//   setCartItems (state, { items }) {
//     state.items = items
//   },

//   setCheckoutStatus (state, status) {
//     state.checkoutStatus = status
//   }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
