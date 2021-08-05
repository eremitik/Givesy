<template>
  <div class="login-container">
    <div class="login-box">
      <form class="form-container" @submit.prevent="login">
        <p class="title">Log in</p>
        <input
          class="inputs"
          type="email"
          placeholder="email"
          v-model="email"
        /><br />
        <input
          class="inputs"
          type="password"
          placeholder="password"
          v-model="password"
        /><br />
        <p class="new-user">New user? 
          <router-link class="create-user" :to="{ name: 'Signup' }">Create an account</router-link>
        </p>
        <button class="input-button" @click="login">Continue</button>
      </form>
    </div>
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

<style scoped>
.login-container {
  min-height: 65vh;
}

.login-box {
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

.create-user {
  text-decoration: none;
  font-weight: bold;
  color: rgb(255, 20, 147);
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
  margin-top: 25px;
  margin-top: 25px;
  color: black;
}

.input-button {
  background: rgb(255, 20, 147);
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
  background: rgb(215, 20, 147);
  color: white;
}
</style>
