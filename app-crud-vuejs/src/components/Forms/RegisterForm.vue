<template>
  <div>
    <form class="formRegister">
      <div><h1>Register</h1></div>

      <ul>
        <li><input type="email" autocomplete="off" name="" placeholder="Email" id="email" /></li>
        <li>
          <input type="password" autocomplete="off" name="" placeholder="Password" id="password" />
        </li>
        <li>
          <input type="password" name="" placeholder="Password" id="password2" autocomplete="off"/>
        </li>
        <li>
          <button type="button" v-on:click="register()" id="regist">
            Registrar
          </button>
        </li>
        <li>
          <a v-on:click="login()" id="register">Já possui conta?</a>
        </li>
      </ul>
    </form>
  </div>
</template>
<script>
//Imports
import $ from "jquery";
import router from "../../router";
import axios from "axios";

export default {
  methods: {
    login() {
      router.push({ path: "/login" });
    },

    register() {
      var email = $("#email").val();
      var password = $("#password").val();
      var password2 = $("#password2").val();

      if (email == "" || password == "" || password2 == "") {
        alert("Algo não foi preenchido !!!");
      } else if (email !== "" || password !== "" || password2 == "") {
        if (password.length < 6) {
          alert("Senhas não podem ter menos q 6 caracteres");
        } else if (password.length >= 6) {
          if (password == password2) {
            //FIREBASE
            const firebaseConfig = {
              apiKey: "AIzaSyAugICABWLvuc6GhiIqEan4UIxJC8kuAz8",
              authDomain: "app-crud-vuejs.firebaseapp.com",
              projectId: "app-crud-vuejs",
              storageBucket: "app-crud-vuejs.appspot.com",
              messagingSenderId: "370900761562",
              appId: "1:370900761562:web:515d9c89e430926dcb9ee3",
              measurementId: "G-J17FVY9K5Q",
            };

            const data = {
              email: email,
              password: password,
            };

            const url =
              "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
              firebaseConfig["apiKey"];

            axios
              .post(url, data)
              .then(function (response) {
                alert('Registrado com sucesso !!!')
                router.push({path: "/login"})
              })
              .catch(function (error) {
                console.table(error.data);
                alert('Erro ao registrar - Email ja cadastrado')
              });
            //////////////////////////
          } else {
            alert("As senhas não coincidem");
          }
        }
      }
    },
  },
};
</script>
<style scoped>
@import "./Css/Register.css";
</style>