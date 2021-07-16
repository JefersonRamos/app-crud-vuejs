<template>
  <div id="app">
    <!-- Tabela -->
    <header>
      <ButtonCadastro />
    </header>

    <TableVue />
  </div>
</template>

<script>
import TableVue from "./components/Table.vue";
import ButtonCadastro from "./components/ButtonCadastro.vue";

export default {
  name: "Home",
  components: {
    TableVue,
    ButtonCadastro,
  },
};
</script>

<style>
#app {
  margin: 0px;
}

header {
  margin-bottom: 25px;
}

</style>
