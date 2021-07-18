<template>
  <div>
    <form>
      <div>
        <h1>{{msg}}</h1>
        <ul>
          <li>
            <input
              class="editText"
              type="number"
              name="qunt"
              id="quant"
              placeholder="Quantidade"
            />
          </li>
          <li>
            <input
              class="editText"
              type="number"
              name="price"
              id="price"
              placeholder="R$"
            />
          </li>
          <li>
            <input
              class="editText"
              type="text"
              name="prod"
              id="prod"
              placeholder="Produto"
            />
          </li>
          <li>
            <input
              class="editText"
              type="text"
              name="client"
              id="client"
              placeholder="Cliente"
            />
          </li>
          <li>
            <span>Active/Inactive</span>
            <input type="checkbox" name="checkbox" id="checkbox" />
          </li>
          <li><input type="button" v-on:click="send()" value="Cadastrar" /></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
//Imports
import axios from "axios";
import URL from "../../api/auth";
import $ from "jquery";
import Router from "../../router";

//Exportando
export default {
  name: "Form",
  props: ["data", "type", "msg"],

  created(){
    console.log(this.data)
  },

  methods: {
    //Metodo q faz as request
    send() {
      //Pegando os valores dos inputs
      var quant = $("#quant").val();
      var price = $("#price").val();
      var prod = $("#prod").val();
      var client = $("#client").val();
      var check = false;

      //Verificando o checkbox e atualizando o valor da boolean 'check'
      if ($("#checkbox").is(":checked")) {
        check = true;
      } else {
        check = false;
      }

      //Fazendo verificacoes de input no front-end
      if (quant === "" || price === "" || prod === "" || client === "") {
        alert("Algo não foi preenchido");
      } else {
        //Criando o data para ser enviado ou atualizado
        var data = {
          quant: quant,
          price: price,
          prod: prod,
          client: client,
          status: check,
        };

        //Verificando o tipo do component se for post ou put
        if (this.type == "post") {
          axios
            .post(URL, data)
            .then(function (response) {
              alert("Cadastrado com sucesso!!!");
              Router.push({ path: "/" });
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (this.type === "put" || this.data !== "") {
          if(this.data){
            //Segue o request e adapta os inputs para fazer as alterações na api
          
          }else{
            //Retorna erro data not found
            alert('Data not found')
          }
        }
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Hind:wght@300&display=swap");

form {
  box-shadow: 0px 8px 20px 0px rgb(0, 0, 0, 0.4);
  display: flex;
  border-radius: 4px;
  padding: 0px;
}

h1 {
  font-family: "Hind", sans-serif;
  margin-top: 45px;
  color: #424242;
  font-size: 24px;
  text-align: center;
}

ul {
  flex: 1;
  justify-content: center;
  padding-left: 70px;
  padding-right: 70px;
  margin-bottom: 45px;
}

ul > li {
  list-style: none;
  margin: 0px;
}

.editText {
  border: none;
  padding: 10px;
  margin: 2px;
  border-bottom: 1px solid #cecece;
  transition: all 0.4s;
}

.editText:focus {
  outline: unset;
  border-bottom-color: black;
}

ul > li:last-child > input {
  background: teal;
  color: white;
  padding: 10px;
  border: none;
  padding-left: 40px;
  padding-right: 40px;
  transition: all 0.4s;
}

ul > li:last-child > input:hover {
  background: black;
}

ul > li:nth-child(5) {
  text-align: center;
  font-size: 15px;
  margin: 10px;
  display: flex;
}

ul > li:nth-child(5) > span {
  flex: 1;
  justify-content: start;
  text-align: start;
}

ul > li:nth-child(5) > input {
}

ul > li:last-child {
  display: flex;
  justify-content: center;
}
</style>