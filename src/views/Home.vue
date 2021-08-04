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
#nav a {
  padding: 60px;
}
</style>