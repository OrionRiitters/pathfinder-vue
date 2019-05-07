<template>
  <div id="map">

        <l-map
ref="stateMap"
style="height: 100%; width: 100%"
v-bind:zoom="zoom"
v-bind:center="center">
      <l-tile-layer :url="url"></l-tile-layer>
    </l-map>

  </div>
</template>

<script>
export default {
  name: "Map"
};
</script>

<style>

</style>
