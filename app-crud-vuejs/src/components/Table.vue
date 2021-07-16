<template>
  <div>
    <ul class="firstColumn">
      <li>Id</li>
      <li>Quantidade</li>
      <li>Price</li>
      <li>Produto</li>
      <li>Ativo/Inativo</li>
    </ul>

    <div id="colunas"></div>
  </div>
</template>
<script>

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
</style>