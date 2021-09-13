<template>
  <div class="home">
    <h1>PROJECT A</h1>
    <div>{{ env }}</div>
    <div>{{ devEnv }}</div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      env: process.env.VUE_APP_COMMON,
      devEnv: process.env.VUE_APP_DEV,
    };
  },
};
</script>
