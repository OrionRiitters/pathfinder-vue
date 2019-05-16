<template>
  <div id="leaflet-map" class="right-box">
    <l-map
      ref="trailMap"
      style="height: 100%; width: 100%"
      v-bind:zoom="zoom"
      v-bind:center="center"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-marker
        v-on:click="viewDetails(trail)"
        v-for="trail in newTrails"
        :icon="newIcon"
        :lat-lng="[trail.latitude, trail.longitude]"
      ></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
  name: 'leaflet-map',
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      zoom: 11,
      center: this.coordinates,
      bounds: null,
      newIcon: L.icon({
        iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
        iconSize: [25, 58],
        iconAnchor: [0, 0],
        popupAnchor: [-3, -76],
      }),
    }
  },
  props: {
    newTrails: {
      type: Array,
    },
    coordinates: {
      type: Array,
    },
  },
  // viewDetails will cause app.vue to load this trail's details in left-box
  methods: {
    viewDetails(trail) {
      this.$emit('viewDetails', trail)
      console.log(trail)
    },
  },
  watch: {
    newTrails: function() {
      this.center = this.coordinates
    },
  },
}
</script>

<style></style>
