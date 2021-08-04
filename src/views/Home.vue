<template>
  <div class="home">

    <router-view />
    <ProductList class="product"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "../components/ProductList.vue";

export default {
  name: "Home",
  components: {
    ProductList,
  },
};
</script>

<style scoped>
.app-name {
  font-size: 60px;
  font-weight: bold;
  color: black;
}
#nav a {
  padding: 60px;
}
</style>
