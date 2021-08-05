<template>
  <div>
    <!-- <Product v-for="product of $store.state.products" :key="product.id" :product="product"/> -->

    <Subscription
      v-for="subscription of $store.state.subscriptions"
      :key="subscription.sub.id"
      :subscription="subscription"
    />
  </div>
</template>

<script>
import Subscription from "./Subscription.vue";
import { watch } from "vue";
import { useStore } from "vuex";

export default {
  name: "SubscriptionList",
  components: {
    Subscription,
  },
  setup() {
    const store = useStore();
    watch(
      () => store.getters.userUID,
      () => store.dispatch("loadSubscriptions")
    );
  },
  async created() {
    this.$store.dispatch("loadSubscriptions");
  },
};
</script>

<style></style>
