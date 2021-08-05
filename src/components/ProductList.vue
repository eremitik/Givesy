<template>
  <div class="spacing">
  <div class="container">
    <Product v-for="product of $store.state.products" :key="product.id" :product="product"/>
  </div>
  </div>
</template>

<script>
import Product from "./Product.vue"

export default {
    components: {
        Product,
    },
    async created() {
        this.$store.dispatch("loadProducts");
    }
}
</script>

<style scope>
  .spacing {
    padding-top: 600px;
    padding-bottom: 100px;
  }
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

</style>