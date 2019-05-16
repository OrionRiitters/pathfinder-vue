<template>
  <div id="bucket-list" class="right-box">
    <table>
      <tbody>
        <bucket-row
          v-on:changeHiked="changeHiked"
          v-on:viewDetails="viewDetails"
          v-for="trail in oldTrails"
          v-bind:trail="trail"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import BucketRow from './BucketRow.vue'

export default {
  name: 'BucketList',
  props: {
    oldTrails: {
      type: Array,
    },
  },
  components: {
    BucketRow,
  },
  methods: {
    viewDetails(rowTrail) {
      this.$emit('viewDetails', rowTrail)
      console.log(rowTrail)
    },
    changeHiked(rowTrail) {
      this.$emit('changeHiked', rowTrail)
    },
  },
}
</script>

<style></style>
