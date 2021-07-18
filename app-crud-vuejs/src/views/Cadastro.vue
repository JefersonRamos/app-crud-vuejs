<template>
  <div>
      <main>
          <Form type="post" msg="Cadastro"/>
      </main>
  </div>
</template>

<script>
import BtnHref from '../components/Buttons/ButtonHref.vue'
import Form from '../components/Forms/Form.vue'

export default {
  name: "Cadastro",
  components: {
      BtnHref,
      Form
  },
};
</script>

<style scoped>
    main{
        display: flex;
        margin-top: 5px;
        justify-content: center;
    }
</style>