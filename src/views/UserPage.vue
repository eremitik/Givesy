<template>
  <div>
    <p class="temp">User Page</p>
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
.temp{
  padding-top: 100px;
}

</style>
