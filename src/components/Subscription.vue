<template>
  <div :class="`temp_box status_${subscription.sub.status}`">
    <p>{{ subscription.sub.id }}</p>
    <p>{{ subscription.prod.name }}</p>
    <p>Status: {{ `${subscription.sub.status}` }}</p>
    <button @click="cancelSubscription">Cancel Subscription</button>
  </div>
</template>

<script>
export default {
  name: "Subscription",
  props: {
    subscription: Object,
  },
  methods: {
    cancelSubscription() {
      this.$store.dispatch("cancelSubscription", this.subscription.sub.id);
      this.$router.go("/userpage");
    },
  },
};
</script>

<style>
.temp_box {
  margin: auto;
  border: 1px dotted black;
  width: 70%;
  height: 10em;
}

.status_active {
  background-color: green;
}

.status_canceled {
  background-color: red;
}
</style>
