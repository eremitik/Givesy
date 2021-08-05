<template>
  <div>
    <form @submit.prevent="Signup">
      <h2>Register</h2>
      <input type="email" placeholder="Email address..." v-model="email" />
      <input type="password" placeholder="password..." v-model="password" />
      <button @click="register">Sign up</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Signup",
  data() {
    return {
      email: "",
      password: "",
      // uid: '',
    };
  },
  methods: {
    async register() {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        alert("Successfully registered!✨");
        this.email = "";
        this.password = "";
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style></style>
