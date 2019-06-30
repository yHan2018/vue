<template>
  <h1>Search</h1>
</template>
<script>
export default {
  name: "Search",
  created() {
    console.log("Search");
    this.$store.commit("cutTitle", "Search");
  }
};
</script>
