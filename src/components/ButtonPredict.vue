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
// ต้องเอาfileนี้ไปdeployบนserverเพราะchild_processไม่สามรถrunในbrowser
// let spawn = require("child_process").spawn;
// let pythonProcess = spawn("python", ["./../utility/test.py"]);

export default {
  name: "button-predict",
  data: function() {
    return {
      message: "Hello Vue.js!"
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = pythonProcess.stdout.on("data", data => {
        return data;
      });
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
