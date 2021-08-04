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
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          //saveUser(userCredential.user.uid);
          alert("Successfully registered!✨");
          this.email = "";
          this.password = "";
          this.$router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    // saveUser(uid) {

    // },
  },
};
</script>

<style></style>
