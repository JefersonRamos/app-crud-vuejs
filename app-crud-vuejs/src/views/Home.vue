<template >
  <div>
    <div>
      <Table />
    </div>
  </div>
</template>
<script>
import Table from "../components/Tabelas/Table.vue";
import BtnHref from "../components/Buttons/ButtonHref.vue";

export default {
  name: "Home",
  components: {
    Table,
    BtnHref,
  },
};
</script>
<style >
</style>