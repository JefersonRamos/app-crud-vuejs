<template>
  <div class="container">
    <button class="btnCadastro">Cadastrar</button>
  </div>
</template>
<script>
export default {
  name: "button",
};
</script>
<style>
.container {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

.btnCadastro{
  margin-right: 20px;
  background-color: teal;
  border: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  transition: all 0.4s;
}

.btnCadastro:hover{
  background-color: rgb(0, 0, 0);
}
</style>