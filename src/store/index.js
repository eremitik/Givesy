import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    userEmail: "",
    userUID: "",
    subscriptions: [],
    domainUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://givesy.herokuapp.com",
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setUserEmail(state, email) {
      state.userEmail = email;
    },
    setUserUID(state, uid) {
      state.userUID = uid;
    },
    setSubscriptions(state, subscriptions) {
      state.subscriptions = subscriptions;
    },
  },
  getters: {
    userUID: (state) => state.userUID,
  },
  actions: {
    async loadProducts({ commit }) {
      const response = await axios.get("/api/products");
      commit(
        "setProducts",
        response.data.data.filter((product) => product.active)
      );
      console.log(response)
    },
    async loadSubscriptions({ commit, state }) {
      console.log(state.userEmail);
      const response = await axios.get(
        `/api/users/${state.userUID}/subscriptions`
      );
      const subscriptionIDs = response.data.map((sub) => sub.id);
      const subscriptionsPromises = subscriptionIDs.map((id) =>
        axios.get(`/api/subscriptions/${id}`)
      );

      let subscriptions = await Promise.all(subscriptionsPromises);
      subscriptions = subscriptions.map((sub) => sub.data);

      subscriptions = await Promise.all(
        subscriptions.map(async (sub) => {
          const productID = sub.plan.product;
          let product = await axios.get(`/api/products/${productID}`);
          product = product.data;
          return {
            sub: sub,
            prod: product,
          };
        })
      );

      console.log(subscriptions);

      commit("setSubscriptions", subscriptions);
    },
    async cancelSubscription(store, subscriptionID) {
      await axios.delete(`/api/subscriptions/${subscriptionID}`);
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
