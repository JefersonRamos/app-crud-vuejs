<template>
  <div>
    <form class="formLogin">
      <div><h1>Login</h1></div>
      <ul>
        <li><input type="email" autocomplete="off" name="" placeholder="Email" id="email" /></li>
        <li>
          <input type="password" autocomplete="off" name="" placeholder="Password" id="password" />
        </li>
        <li>
          <button type="button" v-on:click="login()" id="login">Login</button>
        </li>
        <li>
          <a v-on:click="register()" id="register">Register</a>
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

      //Pegando variaveis dos inputs
      var email = $("#email").val();
      var password = $("#password").val();

      //Verificacao de campos
      if (email == "" || password == "") {
        alert("Algo não foi preenchido !!!");
      } else if (email !== null || password !== null) {
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
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+firebaseConfig["apiKey"];

        axios
          .post(url, data)
          .then(function (response) {
            //Passa idToken para uma variavel local e da um refresh no view
            localStorage.setItem('idToken', response.data['idToken']);
            localStorage.setItem('email', response.data['email']);
            router.push({path: "/"});
          })
          .catch(function (error) {
            alert('Email ou senha incorreto')
          });
      }
    },

    register() {
      //Manda para a tela register
      router.push({ path: "/register" });
    },
  },
};
</script>
<style scoped>
@import "./Css/Login.css";
</style>