<template>
  <div></div>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    if (this.$route.query.session_id) {
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
    }
    this.$router.push("/charities");
  },
};
</script>

<style></style>
