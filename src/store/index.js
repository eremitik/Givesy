import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    userEmail: "",
    userUID: "",
    domainUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://givesy.herokuapp.com",
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
      console.log(state.products);
    },
    setUserEmail(state, email) {
      state.userEmail = email;
    },
    setUserUID(state, uid) {
      state.userUID = uid;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      const response = await axios.get("/api/products");
      commit(
        "setProducts",
        response.data.data.filter((product) => product.active)
      );
    },
    // async makeOneTimePayment(store, prices) {
    //   const price = prices.filter(price => price.type === "one_time")[0];
    //   await axios.post(`/api/prices/${price.id}/oneTimePayment`)
    // },
    // async makeRecurringPayment(store, prices) {
    //   const price = prices.filter(price => price.type === "recurring")[0];
    //   await axios.post(`/api/prices/${price.id}/oneTimePayment`)
    // }
  },
  modules: {},
});
