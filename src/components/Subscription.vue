<template>
  <div v-if="subscription.sub.status === 'active'" class="temp_box">
    <p>{{ subscription.sub.id }}</p>
    <p>{{ subscription.prod.name }}</p>
    <p>Active: {{ `${subscription.sub.status}` }}</p>
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
</style>
