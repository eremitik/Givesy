<template>
  <div>
    <Product />
  </div>
</template>

<script>
require("dotenv").config()
import Product from "./Product.vue"
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default {
    components: {
        Product,
    },
    async created() {
        // await this.$store.dispatch("loadProducts");

        console.log("calling stripe");
        const products = await stripe.products.list();
        console.log("finished calling stripe")
        console.log(products);
    }
}
</script>

<style>

</style>