<template>
    <div class="sub-spacing">
      <text class="sub-title">Let's Explore.</text>
      <p class="sub-paragraph">Don't be shy! Many organizations are working hard to built a better tomorrow, and we're here to make it easy for you to participate.</p>
    </div>
  <ProductList />
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
    name: "Charities",
  components: {
    ProductList,
  }

}
</script>

<style>
  .sub-spacing {
    height: 300px;
    padding-top: 150px;
  }

  .sub-title {
    font-size: 40px;
    font-weight: bold;
    color: black;
  }

  .sub-paragraph {
    font-size: 25px;
    word-wrap: break-word;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

</style>