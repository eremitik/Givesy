<template>
  <div class="splash-container">
    <img class="splash-pic" src="../../images/pinkvibe.jpeg">
    <p class="splash-title">Help change the <span class="splash-title-underline">world</span>.</p>
    <p class="splash-subtitle">Donate to hundred's of causes today. </p>
    <button class="splash-button">Get started</button>
  </div>
  <div class="splash-spacing">

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

  .splash-container {
    height: 700px;
    background-color: rgba(22,23,24);
  }
  
  .splash-pic {
    position: absolute;
    bottom: 400px;
    right: 300px;
    width: 30%;
  }

  .splash-spacing {
    height: 600px;
  }

  .splash-title {
    position: absolute;
    bottom: 525px;
    left: 300px;
    color: white;
    font-size: 70px;
    font-weight: bold;
    word-wrap: break-word;
    width: 600px;
    text-align: left;
  }

  .splash-title-underline {
    text-decoration: 15px solid rgb(255,20,147) underline;
  }

  .splash-subtitle {
    position: absolute;
    bottom: 500px;
    left: 300px;
    color: white;
    font-size: 20px;
    font-weight: 500;
    word-wrap: break-word;
    width: 700px;
    text-align: left;
  }

  .splash-button {
    position: absolute;
    bottom: 455px;
    left: 300px;
    background: rgb(255,20,147);
    border: none;
    border-radius: 20px;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s;
    color: white;
    align-items: center
  }

  .splash-button:hover {
    background: white;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    transition: 0.3s;
    color: black;
    align-items: center
  }

</style>