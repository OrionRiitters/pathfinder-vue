<template>
  <div id="bucket-list">
    <p v-bind="trails" > {{ trails }}</p>
  </div>
</template>

<script>
export default {
name: "BucketList",
props: {
trails: {
type: Object
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
</style>
