<template>
  <div class="subscription-container">
    <div class="subscription-scroll">
    <div class="subscription-text">
    
    <!-- <div class="subscription-top"> -->
      <!-- <div class="image-cropper"> -->
        <!-- <img class="subscription-image" :src="getImgUrl()"> -->
      <!-- </div> -->
      <p class="subscription-title">{{ subscription.prod.name }}</p>
    <!-- </div> -->

    <p>Amount: ${{ Math.round((subscription.sub.items.data[0].price.unit_amount)/100).toFixed(2) }}</p>
    <p>Interval: {{ subscription.sub.items.data[0].plan.interval }}</p>
    <p>Status: <span :class="`subscription status_${subscription.sub.status}`">{{ `${subscription.sub.status}` }}</span></p>
    <p></p>
  </div>
  <div class="subscription-button-container">
    <button v-if="subscription.sub.status === 'active'" class="subscription-button" @click="cancelSubscription">Cancel Subscription</button>
  </div>
  </div>
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
    getImgUrl() {
      return this.subscription.prod.images[0]
    },
  },
};
</script>

<style scoped>
.subscription-container {
  /* display: grid; */
  /* grid-template-columns: repeat(2, 1fr); */
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  /* height: auto; */
  transition: 0.3s;
  border-radius: 15px;
  width: 275px;
  margin-bottom: 50px;
  padding-top: 10px;
  padding-left: 25px;
  text-align: left;
  line-height: 5px;
}

.subscription-container:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
}
/* 
.image-cropper {
  width: 25px;
  height: 25px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
} */
/* 
.subscription-image {
  display: inline;
  margin: 0 auto;
  margin-left: -25%;
  height: 100%;
  width: auto;
} */
/* 
.subscription-top {
  display: inline-block;
}
 */
.subscription-title {
  font-weight: bold;
  color: black;
  /* margin-left: 35px; */
  /* font-size: 20px; */
}


.status_active {
  color: green;
  font-weight: bold;
}

.status_canceled {
  color: red;
  font-weight: bold;
}


.subscription-button-container {
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin-right: 25px;
}

.subscription-button {
  background: white;
  color: black;
  border: 3px solid black;
  border-radius: 25px;
  padding: 10px 25px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  transition: 0.3s;
  align-items: center;
  text-decoration: none;
  margin-bottom: 25px;
}

.subscription-button:hover {
  background: black;
  color: white;
}
</style>
