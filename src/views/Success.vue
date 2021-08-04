<template>
  <h1>Success!</h1>
  <p>session_id: {{ this.$route.query.session_id }}</p>
</template>

<script>
import axios from "axios";

export default {
  async mounted() {
    console.log("mounted");
    const response = await axios.get(
      `/api/sessions/${this.$route.query.session_id}`
    );
    console.log(response);
  },
};
</script>

<style></style>
