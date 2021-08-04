import { createStore } from "vuex";
import axios from "axios";

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
    async loadProducts({commit}) {
      const response = await axios.get("/api/products")
      console.log(response.data.data)
      commit("setProducts", response.data.data);
    },
  },
  modules: {},
});
