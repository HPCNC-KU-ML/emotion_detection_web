<template>
  <div id="button-predict">
    <section>
      <b-collapse :open="false">
        <button class="button is-primary" slot="trigger">Click me!</button>
        <div class="notification">
          <div class="content">
            <h3>{{ reverseMessage() }}</h3>
          </div>
        </div>
      </b-collapse>
    </section>
  </div>
</template>

<script>
export default {
  name: "button-predict",
  data: function() {
    return {
      message: "Hello Vue.js!"
    };
  },
  methods: {
    reverseMessage: function() {
      return this.message;
    }
  }
};
</script>

<style>
#button-predict {
  text-align: center;
}
</style>
