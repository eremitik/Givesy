<template>
  <div>
    <form @submit.prevent="login">
      <h2>Login</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  mounted() {
    this.getUserInfo();
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          alert("Login ok!✨");
          this.email = "";
          this.password = "";
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    getUserInfo() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.email = user.email;
        }
      });
    },
  },
};
</script>

<style></style>
