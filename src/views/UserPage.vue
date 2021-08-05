<template>
  <div id="test">
    <p>User Page</p>
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
#test {
  margin-top: 80px;
}
</style>
