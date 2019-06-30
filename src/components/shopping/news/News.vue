<template>
  <ul class="new-list">
    <li v-for="news in newsLsit" :key="news.id">
      <router-link :to="'/shopping/newsDetail/'+news.id">
        <img class="mui-media-object mui-pull-left" :src="news.img_url">
        <div class="mui-media-body">
          <p class="new-title">{{news.title}}</p>
          <p class="mui-ellipsis">
            <span>发表时间 : {{news.add_time|dateFormat}}</span>
            <span>点击 : {{news.click}}次</span>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "News",
  data: () => ({
    newsLsit: []
  }),
  created() {
    this.$http
      .get("api/getnewslist")
      .then(result => {
        if (result.body.status == 0) {
          this.newsLsit = result.body.message;
          console.log(this.newslist);
        } else {
          Toast("获取新闻列表失败");
        }
      })
      .catch(() => {});
  }
};
</script>
<style>
.new-list {
  background: #ffffff;
  margin: 0;
  padding: 10px 0;
  list-style: none;
}
.new-list li {
  padding: 5px;
  border-bottom: 1px solid #cccccc;
}
.new-list li img {
  width: 30px;
  height: 30px;
}

.new-list li .new-title {
  font-size: 14px;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
}
.mui-ellipsis {
  font-size: 12px;
}
.mui-media-body {
}
</style>


