<template>
  <div class="home">
    <router-view />
    <p>Hello {{ $store.state.userEmail }}</p>
    <ProductList />
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
#nav a {
  padding: 60px;
}
</style>
