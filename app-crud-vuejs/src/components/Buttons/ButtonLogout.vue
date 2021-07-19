<template>
  <div class="container">
    <button class="btnCadastro" v-on:click="click()">{{ name }}</button>
  </div>
</template>
<script>
//Imports
import router from "../../router";

export default {
  name: "button",
  props: ["name"],
  methods: {
    click() {
      //Deslogando
      localStorage.setItem("idToken", "");
      localStorage.setItem('email', "")
      router.push({ path: "/login" });
    },
  },
};
</script>
<style scoped>
@import "./Css/buttonHref.css";
</style>