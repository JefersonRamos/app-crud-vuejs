<template>
  <div>
    <section>
      <Form type="put" msg="Update" :data="id" />
    </section>
  </div>
</template>

<script>
//Imports
import Form from "../components/Forms/Form.vue";
import BtnHref from "../components/Buttons/ButtonHref.vue";
import $ from "jquery";

//Export
export default {
  name: "Update",
  data() {
    //Passando o id da rota para uma var
    return {
      id: this.$route.params.id,
    };
  },

  //Components
  components: {
    Form,
    BtnHref,
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
}
</style>