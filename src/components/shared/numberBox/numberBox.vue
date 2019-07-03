<template>
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="1">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" @change="countChange()" />
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../../lib/mui/js/mui.js";
export default {
  name: "NumberBox",
  props: ["max"],
  data() {
    return {
      numberBox: null
    };
  },
  created() {
    console.log(this.max);
  },
  mounted() {
    mui(".mui-numbox");
    console.log();
    mui(".mui-numbox").numbox();
  },
  watch: {
    max: function(newValue, oldValue) {
      mui(".mui-numbox").numbox().setOption("max", newValue);
    }
  },
  methods: {
    countChange() {
      this.$emit('countChange',mui(".mui-numbox").numbox().getValue());
    }
  }
};
</script>

<style>
</style>
