<template>
<div class="product">
  <div class="product-card" @click="toggleShowInfo">
    <img class="product-image" :src="product.images[0]" />
    <p class="product-title">{{product.name}}</p>
    <br>

    <div v-if="showInfo">

    <div class="product-container">
    <p class="product-description">{{product.description}}</p>
      <div class="product-button-container">
      <div>
        <StripeCheckout
          ref="oneTimeCheckoutRef"
          mode="payment"
          pk="pk_test_51JKIuDIZNIF6strfLEPdU6rl4q2U2jH5V3q0MFnE0XbG5fAYTcW4EuBMH7MDb8AIVfNFWkftlvo2Gzi6lW5h8BXj00SER3EiUN"
          :line-items="oneTimePrice"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="v => loading = v"
        />
        <button class="product-button" @click="makeOneTimePayment">Donate</button>
        <!-- <b-button @click="makeOneTimePayment">Donate!</b-button> -->
      </div>
      <div>
        <StripeCheckout
          ref="recurringCheckoutRef"
          mode="subscription"
          pk="pk_test_51JKIuDIZNIF6strfLEPdU6rl4q2U2jH5V3q0MFnE0XbG5fAYTcW4EuBMH7MDb8AIVfNFWkftlvo2Gzi6lW5h8BXj00SER3EiUN"
          :line-items="recurringPrice"
          :success-url="successURL"
          :cancel-url="cancelURL"
          @loading="v => loading = v"
        />
        <button class="product-button" @click="makeRecurringPayment">Recurring</button>
      </div>
      </div>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import axios from "axios"
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  props: {
    product: Object,
  },
  components: {
    StripeCheckout,
  },
  async created() {
    const response = await axios.get(`/api/products/${this.product.id}/prices`)
    const prices = response.data.data.filter(price => price.active);
    this.oneTimePrice = prices.filter(price => price.type === "one_time").map(price => {return {price: price.id, quantity: 1}});
    this.recurringPrice = prices.filter(price => price.type === "recurring").map(price => {return {price: price.id, quantity: 1}});
  },
  data () {
    return {
      showInfo: false,
      loading: false,
      oneTimePrice: [],
      recurringPrice: [],
      // lineItems: [
      //   // {
      //   //   // price: this.product.id, // The id of the one-time price you created in your Stripe dashboard
      //   //   price: "price_1JKJuHIZNIF6strfOwfEPFUS", // The id of the one-time price you created in your Stripe dashboard
      //   //   quantity: 1,
      //   // },
      // ],
      successURL: 'http://localhost:8080/',
      cancelURL: 'http://localhost:8080/',
    };
  },
  methods: {
    makeOneTimePayment() {
      this.$refs.oneTimeCheckoutRef.redirectToCheckout();
    },
    makeRecurringPayment() {
      this.$refs.recurringCheckoutRef.redirectToCheckout();
    },
    toggleShowInfo() {
      this.showInfo = !this.showInfo;
    }
  }

}
</script>

<style>
  .product {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .product-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 15px;
    width: 400px;
    margin-bottom: 25px;
    align-items: center;
  }

  .product-card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
  }

  .product-title {
    font-size: 25px;
    font-weight: bold;
    color: black;
  }

  .product-description {
    font-size: 15px;
    text-align: left;
    color: grey;
    font-weight: 500;
  }

  .product-container {
    padding: 2px 26px;
  }


  .product-image {
    border-radius: 15px 15px 0 0;
    width: 100%;
  }

  .product-button-container {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-button {
    background: white;
    border: 3px solid black;
    border-radius: 20px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: 0.3s;
    color: black;
    margin: 20px 30px 20px 30px;
    align-items: center;
  }

  .product-button:hover {
    background: black;
    color: white;

  }

</style>
      