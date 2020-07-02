<template>
  <div>


<h3>Exemplo de:</h3>

<b-list-group>
  <b-list-group-item> vuex para modularizar os store </b-list-group-item>
  <b-list-group-item>organizando as rotas</b-list-group-item>

  <b-list-group-item>aplicando table com bootstrap</b-list-group-item>
 
</b-list-group>

   <br/><br/>

    <b-nav vertical class="w-25">
      <b-nav-item>
        <router-link :to="{ name: 'EmissaoNotaFiscal' }">
          Criar Nota fiscal
        </router-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>
