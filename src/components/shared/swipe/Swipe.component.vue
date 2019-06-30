<template>
  <div class="swipe">
    <mt-swipe>
      <mt-swipe-item v-for="(img,index) in imgList" v-bind:key="index + img.id">
        <img :src="img.img" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "mint-ui";

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: "SwipeComponent",
  props: ["imgList"]
};
</script>
<style>
.swipe {
  height: 100%;
}
.mint-swipe-item {
  text-align: center;
}
.swipe img {
  width: 100%;
  height: calc(100vw * 0.5);
}
</style>


