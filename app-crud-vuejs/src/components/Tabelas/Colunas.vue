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
        <p>{{ objeto["status"] }}</p>
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
import URL from '../../api/auth'

// Config do componente
export default {
  name: "Column",
  props: ["data"],
  methods: {
    //Metodo q chama a tela de atualizacao passando um id como param pela rota
    att(id) {
      router.push({path: '/update/'+id})
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
.lastColumn {
  display: flex;
  padding: 0px;
  margin: 0px;
}

.lastColumn > li {
  list-style: none;
  text-align: start;
  text-align: center;
  flex: 1;
  border: 1px solid #cecece;
}

.lastColumn > li > p {
  align-self: center;
}

.lastColumn > li:last-child {
  display: flex;
  justify-content: center;
}

.lastColumn > li:last-child > button {
  background-color: #1994f8;
  color: white;
  border: none;
  margin: 4px;
  padding: 5px;
  transition: all 0.4s;
}

.lastColumn > li:last-child > button:hover {
  background-color: #1370bd;
}
</style>