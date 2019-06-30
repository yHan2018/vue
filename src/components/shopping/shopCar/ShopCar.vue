<template>
  <h1>ShopCar</h1>
</template>
<script>
export default {
  name: "ShopCar",
  created() {
    console.log("ShopCar");
    this.$store.commit("cutTitle", "ShopCar");
  }
};
</script>
