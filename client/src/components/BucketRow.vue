<template>
  <div id="bucket-row">
    <tr>
      <td>{{ trail.name }}</td>
      <td v-if="trailHiked">Yes</td>
      <td v-else>No</td>
      <td>
      <button class="btn btn-secondary btn-right" v-on:click="showDetails">
        View Details
      </button>
      </td>
      <td>
      <button class="btn btn-secondary btn-right" v-on:click="changeHiked">
        Changed Hiked Status
      </button>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  name: "BucketRow",
  props: {
    trail: {
      value: Array
    }
  },
  computed: {
    trailHiked: function() {
      return this.trail.hasHiked;
    }
  },
  methods: {
    showDetails() {
      this.$emit("viewDetails", this.trail);
    },
changeHiked() {
this.$emit('changeHiked', this.trail);
    }
  }
};
</script>

<style>

</style>
