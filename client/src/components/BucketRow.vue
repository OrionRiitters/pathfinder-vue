<template>
  <div id="bucket-row">
    <tr>
      <td class="vertical-center">{{ trail.name }}</td>
      <td class="vertical-center" v-if="trailHiked">Yes</td>
      <td class="vertical-center" v-else>No</td>
      <button class="btn btn-secondary btn-right" v-on:click="showDetails">
        View Details
      </button>
      <button class="btn btn-secondary btn-right" v-on:click="changeHiked">
        Changed Hiked Status
      </button>
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

<style></style>
