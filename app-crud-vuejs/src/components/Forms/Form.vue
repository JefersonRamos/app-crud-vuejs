<template>
  <div>
    <form class="formCadastro">
      <div>
        <h1>{{ msg }}</h1>
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
          <li><input type="button" v-on:click="send()" :value="btnMsg" /></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
//Imports
import axios from "axios";
import URL from "../../api/crudcrud";
import $ from "jquery";
import router from "../../router";

//Exportando
export default {
  name: "Form",
  props: ["data", "type", "msg", "btnMsg"],

  //OnCreate
  created() {
    console.log(this.data);
    if (this.type == "put") {
      if (this.data) {
        var objeto = [];
        axios
          .get(URL + "/" + this.data)
          .then(function (response) {
            console.table(response.data);
            $("#quant").val(response.data["quant"]);
            $("#price").val(response.data["price"]);
            $("#prod").val(response.data["prod"]);
            $("#client").val(response.data["client"]);

            if (response.data["status"] == true) {
              $("#checkbox").attr("checked", "checked");
            } else if (response.data["status" == false]) {
              $("#checkbox").removeAttr("checked", "checked");
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        this.notFound();
      }
    } else {
    }
  },

  methods: {
    //Metodo que retorna um alert not found
    notFound() {
      alert("Data not found");
      router.push({ path: "/" });
    },

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
        var objeto = {
          quant: quant,
          price: price,
          prod: prod,
          client: client,
          status: check,
        };

        //Verificando o tipo do component se for post ou put
        if (this.type == "post") {
          axios
            .post(URL, objeto)
            .then(function (response) {
              alert("Cadastrado com sucesso!!!");
              router.push({ path: "/" });
            })
            .catch(function (error) {
              console.log(error);
            });
        } else if (this.type === "put" || this.data !== "") {
          if (this.data) {
            //Segue o request e adapta os inputs para fazer as alterações na api
            axios.put(URL+"/"+this.data, objeto)
            .then(function(response){
              console.table(response.data)
              alert('Atualizado com sucesso!!!')
              router.push({path: "/"})
            }).catch(function(error){
              console.log(error);
            })
          } else {
            //Retorna erro data not found
            this.notFound();
          }
        }
      }
    },
  },
};
</script>

<style>
  @import './Css/Form.css';
</style>