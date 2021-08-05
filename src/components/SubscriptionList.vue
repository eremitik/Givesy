<template>
  <div>
        <!-- <Product v-for="product of $store.state.products" :key="product.id" :product="product"/> -->

    <Subscription v-for="subscription of $store.state.subscriptions" :key="subscription.id" :subscription="subscription"/>
  </div>
</template>

<script>
import Subscription from "./Subscription.vue";

export default {
  name: "SubscriptionList",
  components: {
    Subscription,
  },
  async created() {
    this.$store.dispatch("loadSubscriptions");
  }
};
</script>

<style></style>
