<template>
  <div>
      <h2>Emissão de nota fiscal</h2>

      <BuscaProduto/>
      <NotaFiscal/>
          
  </div>
</template>

<script>

import BuscaProduto from '../../components/BuscaProduto.vue'
import NotaFiscal from '../../components/NotaFiscal.vue'


export default {
  name: 'EmissaoNotaFiscal',
  components: {
   BuscaProduto, NotaFiscal
  }
}

</script>
