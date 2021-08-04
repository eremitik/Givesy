<template>
  <div class="product" @click="toggleShowInfo">
    <img class="product-image" :src="product.images[0]" />
    <p>{{ product.name }}</p>
    <p>{{ product.description }}</p>
    <div class="product-info" v-if="showInfo">
      <button @click="makeOneTimePayment">Donate!</button>
      <button @click="makeRecurringPayment">Recurring!</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    product: Object,
  },
  computed: {
    domainUrl() {
      return this.$store.state.domainUrl;
    },
  },
  async created() {
    const response = await axios.get(`/api/products/${this.product.id}/prices`);
    const prices = response.data.data.filter((price) => price.active);
    this.oneTimePrice = prices
      .filter((price) => price.type === "one_time")
      .map((price) => {
        return { price: price.id, quantity: 1 };
      });
    this.recurringPrice = prices
      .filter((price) => price.type === "recurring")
      .map((price) => {
        return { price: price.id, quantity: 1 };
      });
  },
  data() {
    return {
      showInfo: false,
      loading: false,
      oneTimePrice: [],
      recurringPrice: [],
    };
  },
  methods: {
    async createCheckoutSession(options) {
      const session = await axios.post("/api/create-checkout-session", options);
      return session;
    },
    async makeOneTimePayment() {
      const response = await this.createCheckoutSession({
        success_url:
          this.domainUrl + "/success?session_id={CHECKOUT_SESSION_ID}",
        cancel_url: this.domainUrl,
        payment_method_types: ["card"],
        line_items: this.oneTimePrice,
        mode: "payment",
      });
      const session = response.data;
      console.log(session);
      window.location.href = session.url;
    },
    async makeRecurringPayment() {
      if (this.$store.state.userEmail) {
        const response = await this.createCheckoutSession({
          client_reference_id: this.$store.state.userUID,
          success_url:
            this.domainUrl + "/success?session_id={CHECKOUT_SESSION_ID}",
          cancel_url: this.domainUrl,
          payment_method_types: ["card"],
          line_items: this.oneTimePrice,
          mode: "payment",
        });
        const session = response.data;
        console.log(session);
        window.location.href = session.url;
      }
    },
    toggleShowInfo() {
      this.showInfo = !this.showInfo;
    },
  },
};
</script>

<style>
.product {
  border: 1px dotted black;
}

.product-image {
  width: 100px;
}
</style>
