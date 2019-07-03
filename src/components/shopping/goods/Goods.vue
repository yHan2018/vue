<template>
  <div class="goods">
    <h1>商品列表</h1>
    <div class="list">
      <div class="good-item" v-for="good in goods" :key="good.id" @click="goGoodDetail(good)">
        <img :src="good.img_url" alt />
        <p class="good-title">{{good.title}}</p>
        <div class="good-other-info">
          <p class="price">
            <span class="new-price">￥{{good.sell_price}}</span>
            <span class="old-price">￥{{good.market_price}}</span>
          </p>
        </div>
      </div>
      <mt-button type="danger" size="large" @click="loadMore()">加载更多</mt-button>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "Goods",
  data() {
    return {
      page: 1,
      pageSize: 10,
      goods: []
    };
  },
  methods: {
    /**
      加载商品列表
     */
    getGoods() {
      this.$http.get(`api/getgoods?pageindex=${this.page}`).then(result => {
        console.log(result);
        if (result.body.status == 0) {
          this.goods = this.goods.concat(result.body.message);
        } else {
          Toast("获取商品列表失败");
        }
      });
    },

    /**
      加载更多
     */
    loadMore() {
      this.page++;
      this.getGoods();
    },

    /**
      进入商品详情
     */
    goGoodDetail(good) {
      // this.$router.push("/shopping/good-detail/" + good.id);
      // this.$router.push({ path: "/shopping/good-detail/" + good.id });
      this.$router.push({
        name: "good-detail",
        params: {
          id: good.id
        }
      });
    }
  },
  created() {
    this.getGoods();
  }
};
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-bottom: none;
  justify-content: space-between;
}
.good-item {
  width: 49%;
  margin-bottom: 10px;
  background: #ffffff;
  border: 1px solid #ccc;
  box-shadow: 0 0 8px #ccc;
  padding: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.good-item img {
  width: 100%;
}

.new-price {
  color: red;
  font-size: 16px;
  font-weight: bold;
}

.old-price {
  margin-left: 15px;
  text-decoration: line-through;
  font-size: 12px;
}

.price {
  background: #ccc;
  text-align: left;
}

.load-more {
  background: red;
  color: #ffffff;
  border-radius: 10px;
}
</style>


