<template>
  <div id="hero-title">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Emotion Detection</h1>
          <div style="display: flex;">
            <router-link to="/home" exact class="f-left" style="margin-right:1%;">
              <h2 class="subtitle">Home</h2>
            </router-link>
            <router-link to="/train" exact class="f-left" style="margin-right:1%;">
              <h2 class="subtitle">Train</h2>
            </router-link>
            <router-link to="/upload" exact class="f-left" style="margin-right:1%;">
              <h2 class="subtitle">Upload</h2>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "hero-title"
};
</script>

<style>
</style>
