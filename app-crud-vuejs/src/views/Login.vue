<template>
  <div>
    <LoginForm />
  </div>
</template>
<script>
//Imports
import LoginForm from "../components/Forms/LoginForm.vue";
import router from "../router";

export default {
  name: "Login",

  components: {
    LoginForm,
  },
};
</script>
<style scoped>
div {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>