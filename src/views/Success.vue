<template>
  <h1>Success!</h1>
  <p>session_id: {{ this.$route.query.session_id }}</p>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    const response = await axios.get(
      `/api/sessions/${this.$route.query.session_id}`
    );
    const customerID = response.data.customer;
    const latestSubscription = await axios.get(
      `/api/customers/${customerID}/latestsubscription`
    );
    const subscriptionID = latestSubscription.data.id;
    const userUID = response.data.client_reference_id;

    await axios.post("/api/subscriptions", {
      id: subscriptionID,
      user_id: userUID,
    });
  },
};
</script>

<style></style>
