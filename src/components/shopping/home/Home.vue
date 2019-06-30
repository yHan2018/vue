<template>
  <div class="home">
    <div class="banner">
      <SwipeComponent :imgList="imgList"></SwipeComponent>
    </div>
    <!-- 九宫格区域 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/shopping/news">
          <img src="../../../assets/imgs/menu1.png" alt>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/shopping/photo">
          <img src="../../../assets/imgs/menu2.png" alt>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/shopping/goods">
          <img src="../../../assets/imgs/menu3.png" alt>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../../assets/imgs/menu4.png" alt>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../../assets/imgs/menu5.png" alt>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../../assets/imgs/menu6.png" alt>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import SwipeComponent from "../../shared/swipe/Swipe.component.vue";
import { Toast } from "mint-ui";

export default {
  name: "Home",
  data: () => ({
    imgList: []
  }),
  components: {
    SwipeComponent
  },
  created() {
    this.$http.get("api/getlunbo").then(result => {
      console.log(result.body);
      if (result.body.status == 0) {
        this.imgList = result.body.message;
      } else {
        Toast("获取轮播图数据失败！");
      }
    });
    this.$store.commit("cutTitle", "Yhan 商城");
  }
};
</script>
<style>
.home{
  widows: 100%;
  height: 100%;
  background: #ffffff;
}
.banner {
  height: 60vw;
}
.banner img {
  /* width: 100%; */
  height: 100%;
}
.mui-grid-view.mui-grid-9 {
  background: #ffffff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border: none;
}
.mui-table-view li{
 display: table-cell;
}

.mui-table-view li img {
  width: 60px;
  height: 60px;
}
</style>

