<template>
  <div class="train">
    <h1>train</h1>
    <div id="number-picker">
      <b-field>Epoch
        <b-input placeholder="Number" type="number" min="1" max="1000"></b-input>
      </b-field>
      <b-field>Dropout
        <b-input placeholder="Number" type="number" min="0" max="100"></b-input>
      </b-field>
      <b-field>Image size
        <b-input placeholder="Number" type="number" min="1" max="1000"></b-input>
      </b-field>
      <button class="button is-primary" slot="trigger">Train</button>
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
  margin-left: 30%;
  margin-right: 30%;
}
</style>

