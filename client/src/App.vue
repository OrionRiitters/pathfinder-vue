<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <Header v-bind:prop_trails="trails" v-bind:prop_testResponse="testResponse" />
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  data() {
    return {
        trails: [],
        testResponse: {}
    }
  },
  components: {
    Header
  },
    mounted() {
        this.loadSavedTrails();
        this.findTrails('Minneapolis', 'MN')
    },
  methods: {
        loadSavedTrails() {
            this.$trail_api.getAllTrails().then( res => {
                console.log(res);
                this.trails = res;
            } )
        },
      findTrails(city, state) {
          this.$trail_api.findTrails(city, state).then( res => {
              this.testResponse = res;
          })
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
