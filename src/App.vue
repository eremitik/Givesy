<template>
  <Nav />
  <router-view />
  <Footer />
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Nav from "./views/Nav";
import Footer from "./views/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
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
