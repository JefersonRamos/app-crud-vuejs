<template>
  <div>
    <ul class="lastColumn">
      <li>{{id}}</li>
      <li>{{quant}}</li>
      <li>{{price}}</li>
      <li>{{product}}</li>
      <li>Teste</li>
    </ul>
  </div>
</template>
<script>
export default {
    name: "Column",
    props: ['id', 'quant', 'price', 'product', 'status'],
    methods: {
        
    },
};
</script>
<style>
.lastColumn {
  display: flex;
  padding: 0px;
  margin: 0px;
}

.lastColumn > li {
  padding-left: 10px;
  padding-right: 10px;
  list-style: none;
  text-align: start;
  flex: 1;
  border: 1px solid #cecece;
}
</style>