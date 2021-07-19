<template>
  <div>
    <RegistForm />
  </div>
</template>
<script>
import RegistForm from "../components/Forms/RegisterForm.vue";
import router from '../router'
export default {
  name: "Register",
  
  components: {
    RegistForm,
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