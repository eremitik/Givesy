<template>
  <div class="home">
    <router-view />
    <p>Hello {{ $store.state.userEmail }}</p>
    <ProductList class="product"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "../components/ProductList.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    ProductList,
  },
  async created() {
    const response = await axios.get("/api/test");
    this.msg = await response.data;
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