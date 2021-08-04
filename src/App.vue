<template>
    <div v-if="userEmail" id= "nav">
      <button @click="logout">Logout</button>
    </div> 
    <div v-else id= "nav">
      <router-link :to="{ name: 'Signup' }">Sign up</router-link> | 
      <router-link :to="{ name: 'Login' }">Login</router-link>
    </div>
  <router-view />
</template>

<script>
import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: "App",
  computed: {
    userEmail () {
      return this.$store.state.userEmail;
    },
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
            alert('Successfully logged out');
            this.$router.push('/');
        })
        .catch(error => {
            alert(error.message);
            this.$router.push('/');
        });
    },
    getUserInfo() {
      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              this.$store.commit("setUserEmail", user.email);
              console.log('THIS IS THE APP.VUE PAGE AND USER EMAIL ', user.email)
          } else {
              console.log("something went wrong with getting the user info")
          }
      });
    },
  }
}
</script>


<style>
/* @import './App.css'; */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;800&display=swap");

#app {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #2c3e50;
} 

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
