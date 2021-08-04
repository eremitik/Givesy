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
    },
    setUserEmail(state, email) {
      state.userEmail = email
    }
  },
  actions: {
    async loadProducts({commit}) {
      const response = await axios.get("/api/products")
      commit("setProducts", response.data.data);
    },
    async placeOrder(store, product) {
      console.log(product);
      let response = await axios.get(`/api/products/${product.id}/prices`);
      const firstPrice = response.data.data[0]
      response = await axios.post(`/api/prices/${firstPrice.id}/buy`)
    }
  },
  modules: {},
});
