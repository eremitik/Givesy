<template>
  <div class="product" @click="toggleShowInfo">
    <img class="product-image" :src="product.images[0]" />
    <p>{{product.name}}</p>
    <p>{{product.description}}</p>
    <div class="product-info" v-if="showInfo">
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
        <button @click="makeOneTimePayment">Donate!</button>
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
        <button @click="makeRecurringPayment">Recurring!</button>
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
    border: 1px dotted black;
  }

  .product-image {
    width: 100px;
  }
</style>
      