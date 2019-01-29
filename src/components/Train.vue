<template>
  <div class="train">
    <div id="number-picker">
      <h1 class="title">Model preference</h1>
      <b-field>Epoch
        <b-input placeholder="Number" type="number" min="1" max="1000"></b-input>
      </b-field>
      <b-field>Dropout
        <b-input placeholder="Number" type="number" min="0" max="100"></b-input>
      </b-field>
      <b-field>Image size
        <b-input placeholder="Number" type="number" min="1" max="1000"></b-input>
      </b-field>
      <button class="button is-primary" slot="trigger">Train Model</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "train"
};
</script>

<style>
#number-picker {
  margin-top: 5%;
  margin-left: 30%;
  margin-right: 30%;
}
</style>

