<template>
  <div class="footer-container">
    <div class="footer-text-container">
    <div class="footer-text">
      <text class="footer-text-logo">Givesy.</text>
      <p>English</p>
      <p>Japan</p>
      <p>Currency: JPY</p>
    </div>
    <div class="footer-text">
      <text class="footer-text-title">PRODUCT</text>
      <p>Lite</p>
      <p>Pro</p>
      <p>Premium</p>
      <p>User Terms</p>
    </div>
    <div class="footer-text">
      <text class="footer-text-title">FOR NGOS</text>
      <p>Registration</p>
      <p>Payment</p>
      <p>Dashboard</p>
    </div>
    <div class="footer-text">
      <text class="footer-text-title">COMPANY</text>
      <p>About</p>
      <p>Press</p>
      <p>Careers</p>
      <p>Team</p>
    </div>


    </div>



  </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer-container {
    height: 100%;
    background-color: rgba(22,23,24);
  }

  .footer-text-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-bottom: 125px;
    padding-left: 200px;
    padding-top: 60px;
    /* position: absolute; */
    /* bottom: 100px; */
  }

  .footer-text {
    /* display: grid; */
    /* grid-template-columns: repeat(4, 1fr); */
    background-color: rgba(22,23,24);
    color: white;
    text-align: left;
    font-size: 13px;
    /* font-weight: bold; */
  }

  p:hover {
    color: grey;
    cursor: pointer;
  }

  .footer-text-title {
    font-weight: bold;
  }


  .footer-text-logo {
    font-size: 40px;
    font-weight: bold;
  }

</style>