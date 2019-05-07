<template>
  <div id="app">
    <ul id="test">
      <li v-for="trail in prop_trails">
        {{ trail.trail_id }}
      </li>
    </ul>
    <p v-bind="prop_testResponse">
      {{ prop_testResponse }}
    </p>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
        data_trails: [],
        testResponse: {}
    };
  },
  props: {
    prop_trails: {
      type: Array,
      required: true
    },
      prop_testResponse: {
          type: Object
      }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
