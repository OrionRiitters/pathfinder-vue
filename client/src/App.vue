<template>
<div id="app" class="grid-container app-container">
  <title>Path Finder</title>
  <page-header v-bind:prop_trails="trails" v-bind:prop_testResponse="testResponse" />
    <left-box />
  <search />

  </div>
</template>

<script>
  import PageHeader from './components/Header.vue'
import Search from './components/Search.vue'
import LeftBox from './components/LeftBox.vue'

export default {
  name: 'app',
  data() {
    return {
        trails: [],
        testResponse: {}
    }
  },
  components: {
  PageHeader,
      Search,
      LeftBox
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
    font-family: 'Archivo', sans-serif;
}
.grid-container {
    display: grid;
    grid-template-columns: repeat(32, 1fr);
    grid-template-rows: repeat(36, 1fr);
    height: 100vh;
    width: 100vw;
}
</style>
