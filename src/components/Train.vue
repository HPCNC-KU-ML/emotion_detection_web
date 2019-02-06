<template>
  <div class="train">
    <div id="number-picker">
      <h1 class="title">Model preference</h1>
      <b-field>Epoch
        <b-input placeholder="Number" type="number" min="0" max="1000" v-model="epochNumber"></b-input>
      </b-field>
      <button class="button is-primary" slot="trigger" @click="trainModel">Train Model</button>
    </div>
    <b-notification type="is-success" has-icon :active.sync="training">Your model is training.</b-notification>
  </div>
</template>

<script>
import axios from "axios";

const url = "http://localhost:4000/train";

export default {
  name: "train",
  data() {
    return {
      epochNumber: 0,
      training: false
    };
  },
  methods: {
    trainModel() {
      let number = this.epochNumber;
      let epoch = { epochNumber: number };
      axios.post(url, epoch).then(res => {
        this.training = true;
        return res;
      });
    }
  }
};
</script>

<style>
#number-picker {
  margin-top: 2%;
  margin-left: 30%;
  margin-right: 30%;
}
</style>

