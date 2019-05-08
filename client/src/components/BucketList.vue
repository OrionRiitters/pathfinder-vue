<template>
  <div id="bucket-list">
    <table>
      <tbody>
      <bucket-row
        v-on:changeHiked="changeHiked"
        v-on:viewDetails="viewDetails"
        v-for="trail in oldTrails"
        v-bind:trail="trail" />
      </tbody>
    </table>
  </div>
</template>

<script>
import BucketRow from './BucketRow.vue'

export default {
  name: "BucketList",
  props: {
    oldTrails: {
      type: Array
    }
  },
    components: {
        BucketRow
    },
    methods: {
        viewDetails(rowTrail) {
            this.$emit('viewDetails', rowTrail);
            console.log(rowTrail);
        },
        changeHiked(rowTrail) {
            this.$emit('changeHiked', rowTrail)
        }
    }
};
</script>

<style>
#bucket-list {
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
bucket-row {
    padding: 8px;
    border-top: 1px solid rgba(63, 63, 63, 0.95);
}

table {
    width: 100%;
}

tbody {
    width: 100%;
    text-align: center;
    vertical-align: center;
}

bucket-row {
    font-weight: bold;
    border-bottom: 1px;
    border-top: 1px;
    border-color: white;
}
</style>
