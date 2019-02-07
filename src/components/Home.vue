<template>
  <div id="home">
    <h1 class="title">Home page</h1>
    <button
      id="getJSON"
      class="button is-primary"
      style="margin-top: 2%;"
      @click="getJSON"
    >Get Result (JSON file)</button>
    <button
      class="button is-primary"
      style="margin-top: 2%;"
      @click="getVideo"
    >Get Result (video file)</button>
  </div>
</template>

<script>
import axios from "axios";
const urlJSON = "http://localhost:4000/predict";
const urlVideo = "http://localhost:4000/video";
var Blob = require("blob");

export default {
  name: "home",
  methods: {
    getJSON() {
      axios({
        method: "GET",
        url: urlJSON
      }).then(response => {
        let resultData = JSON.stringify(response.data);

        const url = window.URL.createObjectURL(new Blob([resultData]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "result.json");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
        return response;
      });
    },
    getVideo() {
      const link = document.createElement("a");
      link.href = urlVideo;
      link.setAttribute("download", "output.avi");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  }
};
</script>

<style>
#home {
  text-align: center;
  margin-top: 2%;
}
#getJSON {
  margin-right: 10px;
}
</style>

