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
  measurementId: "G-4RHCS2LK5M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
