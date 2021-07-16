<template>
  <div id="app">
    <TableVue />
    <TableVue />
  </div>
</template>

<script>
import TableVue from "./components/Table.vue";

export default {
  name: "App",
  components: {
    TableVue,
  },
};
</script>

<style>
#app {
  margin: 0px;
}
</style>
