<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <HeroTitle/>
    <UploadFile msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HeroTitle from "./components/HeroTitle.vue";
import UploadFile from "./components/UploadFile.vue";

export default {
  name: "app",
  components: {
    HeroTitle,
    UploadFile
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
