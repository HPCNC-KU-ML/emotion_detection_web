<template>
  <div id="app">
    <link
      rel="stylesheet"
      href="//cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css"
    >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css">
    <HeroTitle/>
    <UploadFile/>
    <ButtonPredict/>
  </div>
</template>

<script>
import HeroTitle from "./components/HeroTitle.vue";
import UploadFile from "./components/UploadFile.vue";
import ButtonPredict from "./components/ButtonPredict.vue";

export default {
  name: "app",
  components: {
    HeroTitle,
    UploadFile,
    ButtonPredict
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
