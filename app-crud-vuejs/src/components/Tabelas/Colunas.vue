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
        <button v-on:click="atualiza(objeto['_id'])">Update</button>
        <button>Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
//Imports
import router from '../../router'

// Config do componente
export default {
  name: "Column",
  props: ["data"],
  methods: {
    atualiza(id) {
      router.push({path: '/update/'+id})
    },
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