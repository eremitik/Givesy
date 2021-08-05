<template>
  <div class="topnav">
    <label class="logo">Givesy.</label>
    <a class="signup">Sign up</a>
    <a class="login">Login</a>

   </div> 
</template>

<script>
export default {

}
</script>

<style>
  body {
    margin: 0;
  }

  .topnav {
    background-color: white;
    overflow: hidden;
    border-bottom: 1px solid rgba(232, 236, 241, 1);
    position:fixed; 
    left:0;         
    top:0;            
    width:100vw;      
    z-index:200;  
  }

  .topnav a {
    float: right;
    padding: 5px 16px;
    font-size: 12px;
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
  }

  .login:hover {
    background: rgb(211,211,211);
  }
</style>