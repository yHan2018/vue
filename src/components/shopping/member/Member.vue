<template>
  <h1>Member</h1>
</template>
<script>
export default {
  name: "Member",
  created() {
    console.log("Member");
    this.$store.commit("cutTitle", "Member");
  }
};
</script>
