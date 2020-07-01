<template>
  <div>
       <router-link class="btn btn" :to="{ name: 'EmissaoNotaFiscal' }"
          ><li class="list-group-item list-group-item-dark">
             Criar Nota fiscal
          </li></router-link
        >
  </div>
</template>

<script>


export default {
  name: 'Menu'
}
</script>
