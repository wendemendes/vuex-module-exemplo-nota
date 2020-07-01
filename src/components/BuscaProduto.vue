<template>
  <div>
    <h5>Escolha de produtos</h5>

    <b-table striped hover :fields="fields" :items="produtos">
      <template v-slot:cell(actions)="row">
        <b-button
          size="sm"
          @click="addProdutoNotaFiscal(row.item)"
          class="mr-2"
        >
          Adicionar produto
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      fields: ["id", "title", "price", "actions"],
    };
  },

  computed: mapState({
    produtos: (state) => state.buscaProduto.all,
  }),


  methods: mapActions("nota", ["addProdutoNotaFiscal"]),
  created() {
    this.$store.dispatch("buscaProduto/getAllProdutos");
  },
};
</script>
