<template>
  <div>
    <p>{{ test }}</p>
    <Subscription />
  </div>
</template>

<script>
import Subscription from "./Subscription.vue";

export default {
  name: "SubscriptionList",
  components: {
    Subscription,
  },
  data() {
    return {
      test: "This is the subscription list",
    };
  },
};
</script>

<style></style>
