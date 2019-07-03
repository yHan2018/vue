<template>
  <div class="goodDetail">
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>

    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="swiper-box">
            <swiper :imgList="lunbotu"></swiper>
          </div>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-header">{{goodDetail.title}}</div>
        <div class="mui-card-content">
          <p class="price">
            市场价：
            <s>￥{{goodDetail.market_price}}</s>
            &nbsp;&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{goodDetail.sell_price}}</span>
          </p>
          <p class="count">
            购买数量：
            <numbox :max="max" @countChange="buyCountChange"></numbox>
          </p>
          <p class="buy">
            <mt-button type="danger" size="small" @click="addToShopCar($event,1)">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <p class="mui-card-header">商品参数</p>
      <div class="mui-card-content">
        <p>商品货号：{{goodDetail.goods_no}}</p>
        <p>库存情况：{{goodDetail.stock_quantity}}</p>
        <p>上架时间：{{goodDetail.add_time| dateFormat}}</p>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large">图文介绍</mt-button>
        <mt-button type="danger" plain size="large">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
// 导入轮播图组件
import swiper from "../../shared/swiper/Swiper.vue";
// 导入 数字选择框 组件
import numbox from "../../shared/numberBox/numberBox.vue";
export default {
  name: "GoodDetail",
  components: { swiper, numbox },
  data() {
    return {
      goodId: "",
      lunbotu: [],
      goodDetail: {},
      max: 1,
      buyCount: 0,
      ballFlag: false
    };
  },

  methods: {
    /**
     * 获取商品信息
     */
    getGoodDetail() {
      this.$http.get("api/goods/getinfo/" + this.goodId).then(result => {
        if (result.body.status === 0) {
          this.goodDetail = result.body.message[0];
          this.max = this.goodDetail.stock_quantity;
        }
      });
    },

    /**
     * 获取轮播图片
     */
    getImg() {
      this.$http.get("api/getthumimages/" + this.goodId).then(res => {
        if (res.body.status === 0) {
          res.body.message.forEach((item, index) => {
            item.img = item.src;
            item.id = index;
          });
          this.lunbotu = res.body.message;
        } else {
          Toast("获取图文介绍失败");
        }
      });
    },

    buyCountChange(count) {
      this.buyCount = count;
    },

    // addShoppingCar() {
    //   this.ballFlag = !this.ballFlag;
    // },

    // beforeEnter(el) {
    //   // el.style.transform = "translate(0,0)";
    // },

    // enter(el, done) {
    //   const ballPosition = this.$refs.ball.getBoundingClientRect();
    //   const badgeEl = document.getElementById("badge");
    //   const posion = badgeEl.getBoundingClientRect();
    //   const xDist = posion.left - ballPosition.left;
    //   const yDist = posion.top - ballPosition.top;
    //   el.style.transform = `translate(${xDist}px,${yDist}px)`;
    //   el.style.transition = "all 1s cubic-bezier(.4,-0.3,1,.68)";
    //   done();
    // },

    // afterEnter(el) {
    //   this.ballFlag = !this.ballFlag;
    // }

    addToShopCar(e,v) {
      console.log(e,v);
      // 添加到购物车,小球的显示与隐藏
      this.ballFlag = !this.ballFlag;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;

      // 小球动画优化思路：
      // 1. 先分析导致 动画 不准确的 本质原因： 我们把 小球 最终 位移到的 位置，已经局限在了某一分辨率下的 滚动条未滚动的情况下；
      // 2. 只要分辨率和 测试的时候不一样，或者 滚动条有一定的滚动距离之后， 问题就出现了；
      // 3. 因此，我们经过分析，得到结论： 不能把 位置的 横纵坐标 直接写死了，而是应该 根据不同情况，动态计算这个坐标值；
      // 4. 经过分析，得出解题思路： 先得到 徽标的 横纵 坐标，再得到 小球的 横纵坐标，然后 让 y 值 求差， x 值也求 差，得到 的结果，就是横纵坐标要位移的距离
      // 5. 如何 获取 徽标和小球的 位置？？？   domObject.getBoundingClientRect()

      // 获取小球的 在页面中的位置
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },

    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },

  created() {
    this.goodId = this.$route.params.id;
    this.getGoodDetail();
    this.getImg();
  }
};
</script>
<style scoped>
.goodDetail {
  padding: 4px;
}

.swiper-box {
  height: 200px;
}

.mui-card-header {
  text-align: left;
}

.price {
  text-align: left;
  padding-left: 10px;
  height: 30px;
  line-height: 30px;
}
.now_price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}

.count {
  padding-left: 10px;
  text-align: left;
}

.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 340px;
  left: 151px;
}
.mui-card-content p {
  text-align: left;
  padding-left: 10px;
}
</style>