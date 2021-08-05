<template>
  <div class="topnav">
     <router-link class="logo" :to="{ name: 'Home' }">Givesy.</router-link>
      <div class="button-container">
        <div v-if="$store.state.userEmail">
          <button class="logout" @click="logout">Log out</button>
          <router-link class="dashboard" :to="{ name: 'UserPage' }">Dashboard</router-link>
        </div>
        <div v-else>
      <router-link class="login" :to="{ name: 'Login' }">Log in</router-link>
      <router-link class="signup" :to="{ name: 'Signup' }">Sign up</router-link>
    </div>
        </div>
  </div> 
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";

export default {
  name: "Nav",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.error(error);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scope>
  body {
    margin: 0;
  }

.topnav {
  background-color: white;
  overflow: hidden;
  border-bottom: 1px solid rgba(232, 236, 241, 1);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 200;
}

.topnav a {
  float: left;
  padding: 5px 16px;
  font-weight: bold;
}

.topnav a.active {
  color: black;
  text-decoration: 5px solid underline;
}
.topnav label {
  float: left;
  font-weight: bold;
  font-size: 40px;
  line-height: 65px;
  padding: 0px 0px 0px 10px;
  color: black;
  width: 100%;
}

.button-container {
  float: right;
}

.logo {
  font-size: 45px;
  text-decoration: none;
  color: black;
}

.signup {
  background: black;
  color: white;
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
  margin: 20px 20px 20px 20px;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
}

.signup:hover {
  background: rgba(46, 49, 49, 1);
}

.login {
  background: white;
  color: black;
  border: 2px solid black;
  border-radius: 30px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  transition: 0.3s;
  margin: 20px 0px 20px 20px;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
}

  .login:hover {
    background: rgb(211,211,211);
  }

  .logout {
    background: black;
    color: white;
    border: 6px solid black;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: 0.3s;
    margin: 20px 20px 20px 20px;
    align-items: center;
    text-decoration: none;
    font-size: 12px;
  }

  .logout:hover {
    background: rgba(46, 49, 49, 1);
  }


  .dashboard {
    background: white;
    color: black;
    border: 2px solid black;
    border-radius: 30px;
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    transition: 0.3s;
    margin: 20px 0px 20px 20px;
    align-items: center;
    text-decoration: none;
    font-size: 12px;
  }

  .dashboard:hover {
    background: rgb(211,211,211);
    color: black;
  }

</style>
