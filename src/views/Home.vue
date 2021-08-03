<template>
  <div class="home">
    <ProductList />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from "../components/ProductList.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      msg: "default message",
    };
  },
  components: {
    ProductList,
  },
  async created() {
    const response = await axios.get("/api/test");
    this.msg = await response.data;
  },
};
</script>
