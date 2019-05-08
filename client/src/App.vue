<template>
<div id="app" class="grid-container app-container">
  <title>Path Finder</title>
  <page-header />
    <left-box v-on:changeHiked="changeHiked" v-on:newTrail="newTrail" v-bind:detailsTrail="detailsTrail" />
    <search v-on:childToParent="findTrails" />
    <RouterView v-on:changeHiked="changeHiked" v-on:viewDetails="viewDetails" :newTrails="newTrails" :oldTrails="oldTrails" :coordinates="coordinates" />

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
            oldTrails: [],
            coordinates: [44.9778, -93.2650],
            newTrails: {},
            detailsTrail: {}
        }
    },
    components: {
        PageHeader,
        Search,
        LeftBox
    },
    created() {
        this.findTrails('Minneapolis', 'MN')
    },
    mounted() {
        this.loadSavedTrails();
    },
    methods: {
        loadSavedTrails() {
            this.$trail_api.getAllTrails().then( res => {
                this.oldTrails = res;
            } )
        },
        findTrails(city, state) {
            this.$trail_api.findTrails(city, state).then( res => {
                // Assign response data to component variables
                this.coordinates = [res['coordinates']['lat'], res['coordinates']['lon']];
                this.newTrails = res['trails'];
            })
        },
        viewDetails(trail) {
            this.detailsTrail = trail
        },
        newTrail(trail) {
            console.log(trail);
            this.oldTrails.push(trail);
        },
        changeHiked(trail) {
            let hiked = (trail.hasHiked ? false : true)
            this.$trail_api.updateTrailHiked(
                {
                    id: trail.id,
                    hasHiked: hiked
                }).then(res => {
            
                    for (let i in this.oldTrails) {
                        if (res.id == this.oldTrails[i].id) {
                            this.oldTrails[i].hasHiked = res.hasHiked
                            this.detailsTrail = this.oldTrails[i]
                        }
                    }

                });
    }}
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
