import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyC3itNzI3_a_quEBHK5pVfaC_YgFrXWSKI",
    authDomain: "givesy-fda33.firebaseapp.com",
    projectId: "givesy-fda33",
    storageBucket: "givesy-fda33.appspot.com",
    messagingSenderId: "494746875098",
    appId: "1:494746875098:web:5c231b2304681bed2d21e3",
    measurementId: "G-4RHCS2LK5M"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");

/*
const firebaseConfig = {
    apiKey: process.env.VUE_APP_F_API_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PID,
    storageBucket: process.env.VUE_APP_BUCKET,
    messagingSenderId: process.env.VUE_APP_MSGID,
    appId: process.env.VUE_APP_F_APP_ID,
    measurementId: process.env.VUE_APP_MID
  }

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