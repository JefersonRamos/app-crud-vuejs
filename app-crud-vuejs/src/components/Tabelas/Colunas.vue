<template>
  <!-- For each do data passado pelo componente Colunas -->
  <div>
    <ul v-for="objeto of data" :key="objeto.id" class="lastColumn">
      <li>
        <p>{{ objeto["_id"] }}</p>
      </li>
      <li>
        <p>{{ objeto["quant"] }}</p>
      </li>
      <li>
        <p>R${{ objeto["price"] }}</p>
      </li>
      <li>
        <p>{{ objeto["prod"] }}</p>
      </li>
      <li>
        <p>{{ objeto["client"] }}</p>
      </li>
      <li>
        <p>{{ adapter(objeto["status"]) }}</p>
      </li>
      <li>
        <button v-on:click="att(objeto['_id'])">Update</button>
        <button v-on:click="del(objeto['_id'])">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
//Imports
import router from '../../router'
import axios from 'axios'
import URL from '../../api/crudcrud'

// Config do componente
export default {
  name: "Column",
  props: ["data"],
  methods: {
    //Metodo q chama a tela de atualizacao passando um id como param pela rota
    att(id) {
      router.push({path: '/update/'+id})
    },

    adapter(boolean){
      if(boolean == true){
        return 'Ativo'
      }else if(boolean == false){
        return 'Inativo'
      }
    },

    //Metodo q deleta o objeto na api pelo id
    del(id){
      axios.delete(URL+"/"+id)
      .then(function(response){
        alert('Deletado com sucesso!!!')
        router.go()
      })
      .catch(function(error){
        console.log(error);
      })
    }
  },
};
</script>

<style>
 @import "./Css/colunas.css";
</style>