<template>
  <div class="container">
    <button class="btnCadastro" v-on:click="click()">{{ name }}</button>
  </div>
</template>
<script>
import router from "../../router";

export default {
  name: "button",
  props: ["href", "name"],
  methods: {
    click() {
      router.push({ path: "/" + this.href });
    },
  },
};
</script>
<style scoped>
@import "./Css/buttonHref.css";
</style>