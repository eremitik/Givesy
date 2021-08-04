require("dotenv").config();
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";

console.log(process.env.VUE_APP_F_API_KEY)

const firebaseConfig = {
  apiKey: process.env.VUE_APP_F_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PID,
  storageBucket: process.env.VUE_APP_BUCKET,
  messagingSenderId: process.env.VUE_APP_MSGID,
  appId: process.env.VUE_APP_F_APP_ID,
  measurementId: process.env.VUE_APP_MID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");

/*

firebase.initializeApp(firebaseConfig);


let app;

firebase.auth().onAuthStateChanged(user => {
  console.log(user)
  if(!app) {
    app = new Vue({
      router: router,
      render: h => h(App),
    }).$mount('#app')
  }
})
*/