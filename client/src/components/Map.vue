<template>
  <div id="leaflet-map">

    <l-map
      ref="trailMap"
style="height: 100%; width: 100%"
v-bind:zoom="zoom"
v-bind:center="center">
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker v-for="trail in newTrails" :icon="newIcon" :lat-lng="[trail.latitude, trail.longitude]"></l-marker>

    </l-map>

  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
    name: "leaflet-map",
    components: {
        LMap, LTileLayer, LMarker
    },
    data() {
        return {
            url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            zoom: 11,
            center: [44.9778, -93.2650],
            onCoordChange: this.coordinates,
            bounds: null,
            newIcon: L.icon({
                iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
                iconSize:     [25, 58],
                iconAnchor:   [0, 0],
        popupAnchor:  [-3, -76]
      })

        }
    },
    props: {
        newTrails: {
            type: Array
        },
        coordinates: {
            type: Array
        }
    },
    mounted() {
        this.$refs.trailMap.mapObject.dragging.disable()
    },
    await() {
        this.renderMap()
    },
    watch: {
        trails: function() {
            this.renderMap()
        },
        onCoordChange: function() {
            this.center = this.coordinates;
        }
    },
    methods: {
        renderMap() {
            this.center = this.coordinates
      } 
    }
};
</script>

<style>
#leaflet-map {
    grid-row: 8 / 36;
    grid-column: 10 / 32;
    background-color: rgba(63, 63, 63, 0.95);
    color: white;
    overflow: auto;
    color: #f5f5f5;
    border-radius: 0px 0px 5px 5px;
    opacity: 95%;
    border: 1px solid rgba(150, 150, 150, 0.6);
    border-top: 1px solid rgba(63, 63, 63, 0.6);
    
}
</style>
