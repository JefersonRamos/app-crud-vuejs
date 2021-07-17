<template>
  <div class="container">
    <button class="btnCadastro" v-on:click="click()">{{ name }}</button>
  </div>
</template>
<script>

import router from '../../router'

export default {
  name: "button",
  props: ["href", "name"],
  methods: {
    click() {
      router.push({ path: '/'+this.href});
    },
  },
};
</script>
<style>
.container {
  display: flex;
  justify-content: flex-end;
  align-items: end;
}

.btnCadastro {
  margin-right: 20px;
  background-color: teal;
  border: none;
  padding: 10px;
  width: 200px;
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  transition: all 0.4s;
}

.btnCadastro:hover {
  background-color: rgb(0, 0, 0);
}
</style>