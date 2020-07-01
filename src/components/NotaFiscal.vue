<template>
<div>

    <br>
    <h5>Produtos da nota fiscal</h5>

     <b-table striped hover :fields="fields" :items="itensNota"></b-table>
  
</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      fields: ["id", "title"],
    };
  },
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
  ])
}
</script>
