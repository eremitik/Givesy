<template>
  <div>
    <Product v-for="product of $store.state.products" :key="product.id" :product="product"/>
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

<style>

</style>