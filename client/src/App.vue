<template>
<div id="app" class="grid-container app-container">
  <title>Path Finder</title>
  <page-header />
    <left-box />
    <search v-on:childToParent="findTrails" />
    <RouterView />

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
        centerLat: 0,
        centerLon: 0,
        newTrails: {},
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
                this.trails = res;
            } )
        },
      findTrails(city, state) {
          this.$trail_api.findTrails(city, state).then( res => {
              console.log(res)
              // Assign response data to component variables
              this.centerLat = res['coordinates']['lat'];
              this.centerLon = res['coordinates']['lon'];
              this.newTrails = res['trails'];
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
