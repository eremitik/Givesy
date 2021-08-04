<template>
  <div class="product">
    <div class="product-card">
      <!-- <div @click="toggleShowInfo"> -->
      <div>
        <img class="product-image" :src="product.images[0]" />
        <p class="product-title">{{ product.name }}</p>
      </div>
      <br />
      <div v-if="showInfo">
        <div class="product-container">
          <p class="product-description">{{ product.description }}</p>
          <div class="product-button-container">
            <button class="product-button" @click="makeOneTimePayment">
              Donate
            </button>
            <button class="product-button" @click="makeRecurringPayment">
              Recurring
            </button>
          </div>
        </div>
      </div>
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
      showInfo: true,
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
    // toggleShowInfo() {
      // this.showInfo = !this.showInfo;
    // },
  },
};
</script>

<style>
body {
  /* margin-left: 20px; */
}
.product {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-left: 6px;
}
.product-card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 15px;
  width: 400px;
  margin-bottom: 25px;
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
  font-weight: 400;
}

.product-container {
  padding: 2px 26px;
}

.product-image {
  border-radius: 15px 15px 0 0;
  width: 100%;
  max-height: 250px;
}

.product-button-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-button {
  background: white;
  border: 2px solid black;
  border-radius: 20px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
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
