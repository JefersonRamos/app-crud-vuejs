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
import URL from "../../api/crudcrud";

//Importando o Axios
const axios = require("axios");

export default {
  name: "Table",

  //Dados dos objetos
  data() {
    return {
      objetos: [],
    };
  },

  mounted() {
    //Request pelo axios retornando todos os objetos para o data()
    axios.get(URL).then(
      (response) => {
        this.objetos = response.data;
        console.table(response.data);
      },
      (error) => {
        console.log("Erro Interno" + " - " + error);
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
@import "./Css/table.css";
</style>