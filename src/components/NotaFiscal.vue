<template>
<div>

    <br>
    Produtos da nota fiscal
  <ul>
    <li
      v-for="item in itensNota"
      :key="item.id">
      {{ item.title }}
      <br>
    </li>
  </ul>
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  // computed: mapState({
  //   itensNota: state => state.nota.items
  // }),
  



  computed: {
    ...mapState({
      itensNota: state => state.nota.items
    }),
    ...mapGetters('nota', {
      itensNota: 'itensNotaFiscal'
    
    })
  },

  methods: mapActions('nota', [
    'addProdutoNotaFiscal'
  ]),
  created () {
   // this.$store.dispatch('nota/itensNotaFiscal')
  }
}
</script>
