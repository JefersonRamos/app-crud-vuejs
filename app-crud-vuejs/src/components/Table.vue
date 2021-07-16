<template>
  <div>
    <ul class="firstColumn">
      <li>Id</li>
      <li>Quantidade</li>
      <li>Price</li>
      <li>Produto</li>
      <li>Cliente</li>
      <li>Ativo/Inativo</li>
      <li></li>
    </ul>

    <ColunasVue :data="this.objetos" />
  </div>
</template>

<script>
//Import de colunas e Auth token
import ColunasVue from "./Colunas.vue";
import URL from "../api/auth";

//Importando o Axios
const axios = require("axios");

export default {
  name: "Table",

  //Dados dos objetos em JSON
  data() {
    return {
      objetos: [],
    };
  },

  mounted() {
    //Request pelo axios retornando todos os objetos
    axios.get(URL).then(
      (response) => {
        this.objetos = response;
      },
      (error) => {
        console.log('Erro Interno' + ' - ' + error);
      }
    );
  },

  //Componentes
  components: {
    ColunasVue,
  },
};
</script>

<style>
.firstColumn {
  display: flex;
  padding: 0px;
  margin: 0px;
}

.firstColumn > li {
  padding: 20px;
  list-style: none;
  flex: 1;
  background-color: #1994f8;
  color: white;
  text-align: center;
  transition: all 0.4s;
}

.firstColumn > li:hover {
  background-color: #1370bd;
}

.firstColumn > li:last-child:hover {
  background-color: #1994f8;
}
</style>