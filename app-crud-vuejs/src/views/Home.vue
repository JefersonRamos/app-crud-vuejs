<template >
  <div>
    <header>
      <div id="text"><p>Seja bem vindo - </p></div>
      <BtnLogout name="Logout"/>
      <BtnHref name="Cadastrar" href="cadastro" />
    </header>

    <div>
      <Table />
    </div>
  </div>
</template>
<script>
import Table from "../components/Tabelas/Table.vue";
import BtnHref from "../components/Buttons/ButtonHref.vue";
import BtnLogout from "../components/Buttons/ButtonLogout.vue";
import $ from 'jquery';

export default {
  name: "Home",

  mounted(){
    const email = localStorage['email'];
    const emailSplit = email.split("@");
    const text = 'Seja bem vindo - ' + emailSplit[0];
    $("#text").text(text);
  },

  components: {
    Table,
    BtnHref,
    BtnLogout,
  },
};
</script>
<style>
#text{
  flex:1;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}
</style>