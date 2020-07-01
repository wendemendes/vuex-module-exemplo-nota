<template>
<div>
  Busca produto
  <ul>
    <li
      v-for="produto in produtos"
      :key="produto.id">
      {{ produto.title }} - {{ produto.price}}
      <br>
      
      <button
        :disabled="!produto.inventory"
        @click="addProdutoNotaFiscal(produto)">
        Adicionar produto
      </button>
    </li>
  </ul>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  computed: mapState({
    produtos: state => state.buscaProduto.all
  }),

   // computed: {
    // ...mapState({
    //   checkoutStatus: state => state.cart.checkoutStatus
    // }),

    // ...mapActions('buscaProduto', {
    //   produtos: 'getAllProdutos'    
    // })
  //},
  methods: mapActions('nota', [
    'addProdutoNotaFiscal'
  ]),
  created () {
    this.$store.dispatch('buscaProduto/getAllProdutos')
  }
}
</script>
