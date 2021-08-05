<template>
  <div class="dashboard-container">
    <p class="dashboard-title">History</p>
    <SubscriptionList />
  </div>
</template>

<script>
import SubscriptionList from "../components/SubscriptionList.vue";

export default {
  name: "UserPage",
  components: {
    SubscriptionList,
  },
};
</script>

<style>
  .dashboard-container {
    padding-top: 100px;
    height: 55vh;
    overflow: auto;
  }

  .dashboard-title {
    font-size: 25px;
    font-weight: bold;
    color: black;
  }

</style>
