<template>
  <div>

    <header>
      <BtnHref name="Cadastrar" />
    </header>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BtnHref from './components/Buttons/ButtonHref.vue'

export default {
  name: "App",
  components: {
    BtnHref
  },
};
</script>

<style>
#app {
  margin: 0px;
}

header {
  margin-bottom: 25px;
}
</style>
