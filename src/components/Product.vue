<template><div>
  <p>{{product.name}}</p>
  <div>
    <StripeCheckout
      ref="checkoutRef"
      mode="subscription"
      pk="pk_test_51JKIuDIZNIF6strfLEPdU6rl4q2U2jH5V3q0MFnE0XbG5fAYTcW4EuBMH7MDb8AIVfNFWkftlvo2Gzi6lW5h8BXj00SER3EiUN"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Subscribe!</button>
  </div>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';

export default {
  props: {
    product: Object,
  },
  components: {
    StripeCheckout,
  },
  data () {
    return {
      loading: false,
      lineItems: [
        {
          // price: this.product.id, // The id of the one-time price you created in your Stripe dashboard
          price: "price_1JKJuHIZNIF6strfOwfEPFUS", // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'http://localhost:8080/',
      cancelURL: 'http://localhost:8080/cancel.html',
    };
  },
  methods: {
    placeOrder(product) {
      this.$store.dispatch("placeOrder", product);
    },
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  }

}
</script>

<style>

</style>
  const stripe = require('stripe')('sk_test_51JKIuDIZNIF6strf1jaT9lK5m0jtirHlhgdQJ0TLqvAEuqtlRZDIxd83cvXPRchs7WmZMhurhtsXZFBDMHbL5r97004DqN6MGg');
      