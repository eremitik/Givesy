<template>
  <div class="signup-container">
  <div class="signup-box">
    <form class="form-container" @submit.prevent="Signup">
      <p class="title">Create an account</p>
      <input class="inputs" type="email" placeholder="email" v-model="email" /><br>
      <input class="inputs" type="password" placeholder="password" v-model="password" /><br>
      <button class="input-button" @click="register">Create account</button>
    </form>
  </div>
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

<style>
  .signup-container {
    min-height: 65vh;
  }

  .signup-box {
    position: absolute;
    top: 25%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin-top: 100px;
    height: 400px;
    width: 400px;
  }

  .title {
    font-size: 25px;
    font-weight: bold;
    padding-top: 25px;

  }

  .inputs {
    font-size: 15px;
    font-weight: bold;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
    font-family: "Montserrat", sans-serif;
    width: 250px;
    margin-top: 25px;  
    color: black;
  }

  .input-button {
    background: rgb(255,20,147);
    border: none;
    border-radius: 20px;
    padding: 10px 25px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: 0.3s;
    color: white;
    align-items: center;
    text-decoration: none;
    margin-top: 50px;
  }

  .input-button:hover {
    background: rgba(225,20,147);
    color: white;
  }

</style>
