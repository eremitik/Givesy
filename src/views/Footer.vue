<template>
  <div class="footer-container">
    <div class="footer-text-container">
    <div class="footer-text">
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>
      <p>test</p>

    </div>
    </div>



  </div>
  
</template>

<script>
export default {

}
</script>

<style>
  .footer-container {
    height: 600px;
    background-color: rgba(22,23,24);
  }

  .footer-text-container {
    /* position: absolute; */
    /* bottom: 100px; */
  }

  .footer-text {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: rgba(22,23,24);
    color: white;
    font-weight: bold;
  }

</style>