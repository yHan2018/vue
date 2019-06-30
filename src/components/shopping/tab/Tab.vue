<template>
  <nav class="mui-bar mui-bar-tab">
    <router-link class="mui-tab-item1" to="/shopping/home">
      <span class="mui-icon mui-icon-home"></span>
      <span class="mui-tab-label">首页</span>
    </router-link>
    <router-link class="mui-tab-item1" to="/shopping/member">
      <span class="mui-icon mui-icon-contact"></span>
      <span class="mui-tab-label">会员</span>
    </router-link>
    <router-link class="mui-tab-item1" to="/shopping/shopcar">
      <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
        <span class="mui-badge" id="badge">0</span>
      </span>
      <span class="mui-tab-label">购物车</span>
    </router-link>
    <router-link class="mui-tab-item1" to="/shopping/search">
      <span class="mui-icon mui-icon-search"></span>
      <span class="mui-tab-label">搜素</span>
    </router-link>
  </nav>
  <!-- <div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="tab-container1">外卖</mt-tab-item>
      <mt-tab-item id="tab-container2">订单</mt-tab-item>
      <mt-tab-item id="tab-container3">发现</mt-tab-item>
      <mt-tab-item id="tab-container4">我的</mt-tab-item>
    </mt-tabbar>
  </div>-->
</template>

<script>
// import Vue from "vue";
// import { Tabbar, TabItem } from "mint-ui";

// Vue.component(Tabbar.name, Tabbar);
// Vue.component(TabItem.name, TabItem);

export default {
  name: "Tab"
};
</script>
<style scope>
.mui-bar.mui-bar-tab a {
  display: table-cell;
  color: #bbb;
}
.mui-bar-tab .mui-tab-item1.mui-active {
  color: #007aff;
}
</style>


