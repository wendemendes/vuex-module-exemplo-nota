<template>
  <div>
    <h3>Exemplo com vuex para modularizar os store e organizar as rotas</h3>

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
