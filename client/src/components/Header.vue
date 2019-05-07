<template>
<div id="page-header">
  <div id="header-title" class="vertical-center">
    <h1>Path Finder</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageHeader"
};
</script>

<style>
#page-header {
    text-align: center;
    grid-row: 1 / 5;
    grid-column: 2 / 32;
    color: #3f3f3f;
    font-family: 'Archivo', sans-serif;
    font-weight: 'bold';
}
#header-title {
    display: inline-block;
}
</style>
