import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    userEmail: "",
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      console.log(state.products)
    },
    setUserEmail(state, email) {
      state.userEmail = email
    }
  },
  actions: {
    async loadProducts({commit}) {
      const response = await axios.get("/api/products")
      commit("setProducts", response.data.data.filter(product => product.active));
    },
    async makeOneTimePayment(store, prices) {
      const price = prices.filter(price => price.type === "one_time")[0];
      await axios.post(`/api/prices/${price.id}/oneTimePayment`)
    }
  },
  modules: {},
});
