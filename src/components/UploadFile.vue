<template>
  <div id="upload-file">
    <h1 class="title">Upload image/video to dataset</h1>
    <div id="emotion-picker">
      <b-field label="Select a emotion">
        <b-select
          placeholder="Select a emotion"
          required
          v-model="selectedEmotion"
          @input="handleEmotionChange"
        >
          <option v-for="option in emotions" :value="option" :key="option">{{ option }}</option>
        </b-select>
      </b-field>
    </div>
    <section>
      <b-field>
        <b-upload v-model="dropFiles" multiple drag-drop>
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
      <div class="tags" id="file-list">
        <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
          {{file.name}}
          <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
        </span>
      </div>
      <button class="button is-primary" @click="uploadFile(dropFiles)">Upload</button>
      <b-notification
        type="is-success"
        has-icon
        :active.sync="uploadSuccess"
      >Your file is uploaded to the server.</b-notification>
      <!-- <b-notification
        type="is-danger"
        has-icon :active.sync="isActive"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien laoreet elit</b-notification>-->
    </section>
  </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:4000/upload/";

export default {
  name: "upload-file",
  data() {
    return {
      dropFiles: [],
      emotions: ["Angry", "Happy", "Neutral", "Sad", "Scared"],
      selectedEmotion: "Unselect",
      uploadSuccess: false
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    clearFile() {
      this.dropFiles = [];
    },
    handleEmotionChange() {
      // eslint-disable-next-line
      console.log("selected: " + this.selectedEmotion);
    },
    async uploadFile(dropFiles) {
      let urlTemp = url + this.selectedEmotion.toLowerCase();
      dropFiles.forEach(file => {
        let formData = new window.FormData();
        formData.append("files", file);
        axios({
          method: "POST",
          url: urlTemp,
          data: formData
        }).then(response => {
          this.uploadSuccess = true;
          this.clearFile();
          return response;
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#upload-file {
  text-align: center;
  margin-top: 2%;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#file-list {
  margin-left: 30%;
  margin-right: 30%;
}
#emotion-picker {
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 5%;
  text-align: left;
}
</style>
