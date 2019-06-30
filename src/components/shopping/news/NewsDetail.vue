<template>
  <div class="newsinfo-containt">
    <h3 class="title">{{newsInfo.title}}</h3>
    <!-- 小标题 -->
    <p class="subtitle">
      <span>发表时间 : {{newsInfo.add_time | dateFormat}}</span>
      <span>点击 ：{{newsInfo.click}}</span>
    </p>
    <hr>
    <!-- 内容区 -->
    <div v-html="newsInfo.content"></div>
    <Comment :id="this.newsInfo.id"/>
  </div>
</template>
<script>
import Comment from "../../shared/comment/Comment.vue";

export default {
  name: "NewsDetail",
  data() {
    return {
      newsInfo: {
        id: this.$route.params.newsId,
        info: null
      }
    };
  },
  created() {
    this.$http.get("api/getnew/" + this.newsInfo.id).then(res => {
      this.newsInfo = res.body.message[0];
    });
    console.log(this.$route.query);
  },
  components: {
    Comment
  }
};
</script>
<style>
.newsinfo-containt {
  padding: 0 4px;
}

.newsinfo-containt .title {
  font-size: 16px;
  color: red;
  text-align: center;
  margin: 15px 0;
}

.newsinfo-containt .subtitle {
  font-size: 13px;
  color: #226aff;
  display: flex;
  justify-content: space-between;
}
.newsinfo-containt .content img {
  width: 100%;
}
</style>


