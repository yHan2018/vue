<template>
  <!-- 顶部Header区域 -->
  <mt-header fixed :title="this.$store.getters.getAppTitle">
    <span @click="goback" slot="left" v-show="flag">
      <mt-button icon="back">返回</mt-button>
    </span>
  </mt-header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),

  methods: {
    goback: function() {
      this.$router.go(-1);
    }
  },

  computed: {
    flag: function() {
      return this.$route.path == "/shopping/home" ? false : true;
    }
  }
};
</script>

<style>
</style>
