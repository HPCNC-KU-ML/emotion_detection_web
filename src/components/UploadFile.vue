<template>
  <div id="upload-file">
    <h1 class="title">Upload image/video to dataset</h1>
    <div id="emotion-picker">
      <b-field label="Pick emotion">
        <b-select placeholder="Select a emotion" id="emotion-picker">
          <option v-for="option in emotions" :value="option.id" :key="option.id">{{ option }}</option>
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
      <button class="button is-primary" @click="uploadFile(dropFiles)">Click me!</button>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "upload-file",
  data() {
    return {
      dropFiles: [],
      emotions: ["Angry", "Happy", "Neutral", "Sad", "Scared"]
    };
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1);
    },
    handleEmotionChange(e) {
      // eslint-disable-next-line
      console.log(e.target.options[e.target.options.selectedIndex].dataset.foo);
    },
    async uploadFile(dropFiles) {
      dropFiles.forEach(async function(file) {
        let formData = new window.FormData();
        formData.append("files", file);
        await axios({
          method: "POST",
          url: "http://localhost:4000/upload",
          data: formData
        }).then(response => {
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
