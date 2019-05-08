<template>
  <div id="bucket-table">
    <td>
      <bucket-row
        v-on:
        v-on:viewDetails="viewDetails"
        v-for="trail in oldTrails"
        v-bind:trail="trail"
      />
    </td>
  </div>
</template>

<script>
import BucketRow from "./BucketRow.vue";
export default {
  name: "BucketTable",
  props: {
    oldTrails: {
      type: Array
    }
},
methods: {
viewDetails(rowTrail) {
this.$emit('viewDetails', rowTrail)
}
},
  components: {
    BucketRow
  }
};
</script>

<style></style>
