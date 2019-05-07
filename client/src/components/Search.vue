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
      <p class="vertical-center">Find Path</p>
    </button>

    <button id="saved-trails" class="btn btn-primary vertical-center block" v-on:click="routerPush">
      <p v-if="routeIsMap" class="vertical-center">Saved Trails</p>
      <p v-else class="vertical-center">View Map</p>
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
            this.routeIsMap ? this.$router.push({name: 'bucketList'}) : this.$router.push({name: 'map'});
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
#search {
    grid-row: 5 / 8;
    grid-column: 10 / 32;
    background-color: rgba(45, 45, 45, 0.95);
    border-radius: 5px 5px 0px 0px;
    border-top: 1px solid rgba(150, 150, 150, 0.6);
    border-right: 1px solid rgba(150, 150, 150, 0.6);
    border-left: 1px solid rgba(150, 150, 150, 0.6);
}

#city {
    height: 60%;
    width: 40%;
    border-radius: 6px;
    margin-left: 4px;
}

#state {
    width: 20%;
}
/* Buttons in search bar. */
.btn-primary {
    background-color: #f5f5f5;
    color: #3f3f3f;
    border-color: #3f3f3f;
}

.btn-primary:hover {
    background-color: #3f3f3f;
    border-color: #dcdcdc
}

.btn {
    font-weight: bold;
}
</style>
