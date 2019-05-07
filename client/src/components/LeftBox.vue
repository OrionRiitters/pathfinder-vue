<template>
  <div id="left-box">
            <div id="left-header">
                <p>Details</p>
            </div>
            <div id="left-details">
                <p>Find a path to view the details here!</p>
            </div>
            </div>
</template>

<script>
export default {
  name: "LeftBox"
};
</script>

<style>

#left-header {
    grid-row: 5 / 8;
    grid-column: 2 / 9;
    background-color: #cce6bc;
    color: #323232;
    vertical-align: center;
    text-align: center;
    font-size: 36px;
    border-radius: 5px 5px 0px 0px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

#left-details {
    grid-row: 8 / 36;
    grid-column: 2 / 9;
    background-color: rgba(63, 63, 63, 0.95);
    color: #f5f5f5;
    overflow: auto;
    border-radius: 0px 0px 5px 5px;
    font-family: 'Archivo', sans-serif;
    border: 2px solid rgba(63, 63, 63, 0.95);
}
</style>
