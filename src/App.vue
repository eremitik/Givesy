<template>
    <Nav />
    <Splash />

    <p>Hello {{ $store.state.userEmail }}</p>
    <div v-if="userEmail" id= "nav">
      <button @click="logout">Logout</button>
      <router-link :to="{ name: 'UserPage' }">Dashboard</router-link>
    </div> 
    <div v-else id= "nav">
      <router-link :to="{ name: 'Signup' }">Sign up</router-link> | 
      <router-link :to="{ name: 'Login' }">Login</router-link>
      
    </div>
  <router-view />
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Nav from "./views/Nav";
import Splash from "./views/Splash";

export default {
  name: "App",
  components: {
    Nav,
    Splash,
  },
  computed: {
    userEmail() {
      return this.$store.state.userEmail;
    },
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          alert("Successfully logged out");
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
          this.$router.push("/");
        });
    },
    getUserInfo() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.$store.commit("setUserUID", user.uid);
          this.$store.commit("setUserEmail", user.email);
        }
      });
    },
  },
};
</script>

<style>
/* @import './App.css'; */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;800&display=swap");

html,
body {
  background-color: white;
  margin: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.app-name {
  font-size: 80px;
  font-weight: bold;
  color: black;
  margin-bottom: 60px;
  margin-top: 30px;
}
</style>
