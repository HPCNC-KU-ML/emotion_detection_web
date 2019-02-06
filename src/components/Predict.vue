<template>
  <div id="predict">
    <h1 class="title">Upload image/video to predict.</h1>
    <section>
      <b-field>
        <b-upload v-if="dropFiles.length != 1" v-model="dropFiles" multiple drag-drop>
          <section class="section">
            <div class="content has-text-centered">
              <p>
                <b-icon icon="upload" size="is-large"></b-icon>
              </p>
              <p>Drop your files here or click to upload</p>
            </div>
          </section>
        </b-upload>
      </b-field>

      <div class="tags">
        <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
          {{file.name}}
          <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
        </span>
      </div>
    </section>
    <button class="button is-primary" style="margin-top: 2%;" @click="predict">Predict</button>
  </div>
</template>

<script>
import axios from "axios";
const url = "http://localhost:4000/predict";

export default {
  name: "predict",
  data() {
    return {
      dropFiles: []
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    clearFile() {
      this.dropFiles = [];
    },
    predict() {
      this.dropFiles.forEach(file => {
        let formData = new window.FormData();
        formData.append("files", file);
        axios({
          method: "POST",
          url,
          data: formData
        }).then(response => {
          // this.uploadSuccess = true;
          // this.clearFile();
          return response;
        });
      });
    }
  }
};
</script>

<style>
#predict {
  text-align: center;
  margin-top: 3%;
}
</style>
