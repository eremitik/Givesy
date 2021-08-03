import { createStore } from "vuex";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    }
  },
  actions: {
    async loadProducts({ commit }) {
      const products = await stripe.products.list({
        limit: 3,
      });
      commit("setProducts", products);
    },
  },
  modules: {},
});
