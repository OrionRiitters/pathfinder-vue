<template>
  <div id="search">
    <input
      id="city"
      type="text"
      class="vertical-center"
      placeholder="Enter City Name"
      v-model="city"
    />
    <select id="state" class="vertical-center" v-model="selectedState">
      <option :value="state" v-for="state in states">{{ state }}</option>
    </select>
    <button id="find-path" class="btn btn-primary vertical-center block" v-on:click="findPath">
      <p >Find Path</p>
    </button>

    <button id="saved-trails" class="btn btn-primary vertical-center block" v-on:click="routerPush">
      <p v-if="routeIsMap" >Saved Trails</p>
      <p v-else >View Map</p>
    </button>
  </div>
</template>

<script>
import stateAbbrs from '../states.js'
export default {
    name: "Search",
    data() {
        return {
            city: "",
            states: stateAbbrs(),
            selectedState: ""
        };
    },
    methods: {
        findPath() {
                this.$emit('childToParent', this.city, this.selectedState);
        },
        routerPush() {
            let newRoute = this.routeIsMap ? 'bucketList' : 'map'
            this.$router.push({name: newRoute})
        }
    },
    computed: {
        routeIsMap: function() {
            return this.$route.name == 'map';
        }
    }
};
</script>

<style>
</style>
