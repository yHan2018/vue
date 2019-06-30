<template>
  <div class="comment-content">
    <div class="comment">
      <textarea name v-model="comment" id cols="30" rows="5"></textarea>
      <mt-button type="primary" size="large" @click="submitComment">发表评论</mt-button>
    </div>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in commentList" :key="i">
        <div class="cmt-title">第{{i+1}}楼&nbsp;&nbsp;用户 : {{item.user_name}}&nbsp;&nbsp;发表时间 : {{item.add_time | dateFormat}}
        </div>
        <div class="cmt-body">{{item.content === 'undefined' ? '该用户很懒，没有发表任何评论': item.content}}</div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="moreComment">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  name: "Comment",
  data() {
    return {
      commentList: [],
      page: 1,
      size: 20,
      comment: "",
      loadData: null
    };
  },
  props: ["id"],
  created() {
    this.loadData = this.getSuccess;
    this.getCommetList();
  },
  methods: {
    getCommetList() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.page)
        .then(res => {
          this.loadData(res.body.message);
        });
    },

    getSuccess(comment) {
      this.commentList = comment;
    },

    moreComment(comment) {
      this.loadData = this.loadMoreComment;
      this.page++;
      this.getCommetList();
    },

    loadMoreComment(comment) {
      this.commentList = this.commentList.concat(comment);
    },

    submitComment() {
      if (!this.comment.trim()) {
        return Toast("评论信息不能为空");
      } else {
        this.$http
          .post("api/postcomment/" + this.id, {
            content: this.comment.trim()
          })
          .then(res => {
            if (res.body.status == 0) {
              this.commentList.unshift({
                user_name: "匿名用户",
                add_time: Date.now(),
                content: this.comment.trim()
              });
            } else {
              Toast("评论提交失败");
            }
          });
      }
    }
  }
};
</script>
<style scoped>
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
  margin: 5px 0;
}
.cmt-list .cmt-item {
  font-size: 13px;
}
.cmt-list .cmt-item .cmt-title {
  line-height: 30px;
  background-color: #ccc;
}
.cmt-list .cmt-item .cmt-body {
  line-height: 35px;
  text-indent: 2em;
}
</style>



