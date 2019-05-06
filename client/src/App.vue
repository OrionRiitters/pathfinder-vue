<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Header v-bind:prop_trails="trails" />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
      trails: []
    }
  },
  components: {
    Header
  },
    mounted() {
        this.loadSavedTrails();
    },
  methods: {
        loadSavedTrails() {
            this.$trail_api.getAllTrails().then( trails => {
                this.trails = trails;
            } )
        }
    }
}
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
