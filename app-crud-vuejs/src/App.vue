<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import router from './router'

export default {
  name: "App",
  created() {
    if (localStorage["idToken"] == null) {
      router.push("/login");
    } else if (localStorage["idToken"] !== "") {
      router.push("/");
    } else if (localStorage["idToken"] === "") {
      router.push("/login");
      localStorage["idToke"] == null;
    }
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

body {
  overflow-x: hidden;
}
</style>
