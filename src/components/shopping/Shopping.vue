<template>
  <div class="app-container">
    <Header/>
    <div class="content">
      <!-- <transition :name="transitionName"> -->
      <transition>
        <!-- <mt-tab-container v-model="active">
        <mt-tab-container-item id="tab-container1">
          <mt-cell v-for="n in 10" v-bind:key="n" title="tab-container 1"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <mt-cell v-for="n in 5" v-bind:key="n" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
          <mt-cell v-for="n in 7" v-bind:key="n" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container4">
          <mt-cell v-for="n in 9" v-bind:key="n" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
        </mt-tab-container>-->
        <router-view></router-view>
      </transition>
    </div>
    <Tab/>
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Tab from "./tab/Tab.vue";
import Header from "./tab/Header.vue";
// import { TabContainer, TabContainerItem } from "mint-ui";

// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);

Vue.use(VueRouter);
export default {
  name: "Layout",
  components: {
    Tab,
    Header
  },
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log(1);
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    // this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    next();
  }
};
</script>
<style scope>
.content {
  position: fixed;
  left: 0;
  right: 0;
  top: 40px;
  bottom: 50px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>


