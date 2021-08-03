<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      msg: "default message",
    };
  },
  components: {
    HelloWorld,
  },
  async created() {
    const response = await axios.get("/api/test");
    console.log(response)
    this.msg = await response.data;
  },
};
</script>
